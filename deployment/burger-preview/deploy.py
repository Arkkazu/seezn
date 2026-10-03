import base64, ftplib, io, json, os, pathlib, posixpath, secrets, ssl, subprocess, time, urllib.request, urllib.error
ROOT=os.environ['FTP_REMOTE_PATH'].rstrip('/')
BASE='https://seezn.net'
USER=os.environ['BURGER_PREVIEW_AUTH_USER']; PASSWORD=os.environ['BURGER_PREVIEW_AUTH_PASSWORD']
AUTH='Basic '+base64.b64encode((USER+':'+PASSWORD).encode()).decode()
ftp=ftplib.FTP_TLS(context=ssl.create_default_context(),timeout=60)
ftp.connect(os.environ['FTP_SERVER']);ftp.login(os.environ['FTP_USERNAME'],os.environ['FTP_PASSWORD']);ftp.prot_p()
ftp.cwd(ROOT)
files=json.loads(pathlib.Path('/tmp/burger-payload.json').read_text())
backups={}; touched=[]
def ensure(rel):
    ftp.cwd(ROOT)
    for part in rel.split('/'):
        if not part:continue
        try:ftp.cwd(part)
        except ftplib.error_perm as e:
            if not str(e).startswith('550'):raise
            ftp.mkd(part);ftp.cwd(part)
def read(rel):
    buf=io.BytesIO()
    try:ftp.retrbinary('RETR '+posixpath.join(ROOT,rel),buf.write);return buf.getvalue()
    except ftplib.error_perm as e:
        if str(e).startswith('550'):return None
        raise

def write(rel,data):
    parent=posixpath.dirname(rel);ensure(parent)
    temp=posixpath.basename(rel)+'.deploy-'+secrets.token_hex(6)
    ftp.storbinary('STOR '+temp,io.BytesIO(data))
    dest=posixpath.basename(rel)
    try:ftp.rename(temp,dest)
    except Exception:
        try:ftp.delete(temp)
        except Exception:pass
        raise

def request(path,authenticated=False):
    headers={'Cache-Control':'no-cache'}
    if authenticated:headers['Authorization']=AUTH
    req=urllib.request.Request(BASE+path,headers=headers)
    try:
        with urllib.request.urlopen(req,timeout=60) as r:return r.status,r.read(),dict(r.headers)
    except urllib.error.HTTPError as e:return e.code,e.read(),dict(e.headers)

def expect(path,code,authenticated=False):
    for n in range(6):
        result=request(path,authenticated)
        if result[0]==code:return result
        time.sleep(2)
    raise RuntimeError('Unexpected HTTP status '+str(result[0])+' for '+path)

# A short-lived random endpoint resolves the actual server path; it discloses no credentials.
probe='burger-deploy-'+secrets.token_hex(20)+'.php';token=secrets.token_hex(32)
php='<?php if (!hash_equals('+json.dumps(token)+', $_SERVER["HTTP_X_DEPLOY_TOKEN"] ?? "")) { http_response_code(404); exit; } header("Content-Type: application/json"); header("Cache-Control: no-store"); echo json_encode(["root"=>__DIR__]);'
try:
    write(probe,php.encode())
    req=urllib.request.Request(BASE+'/'+probe,headers={'X-Deploy-Token':token})
    with urllib.request.urlopen(req,timeout=60) as r:absolute=json.loads(r.read())['root']
finally:
    ftp.delete(posixpath.join(ROOT,probe))
if not absolute.endswith('/seezn.net/public_html'):raise RuntimeError('Resolved document root does not match seezn.net')
password_basename='.burger-lp-'+secrets.token_hex(12)+'.htpasswd'
password_file=posixpath.join(posixpath.dirname(absolute),password_basename)
hashed=subprocess.run(['openssl','passwd','-apr1','-stdin'],input=PASSWORD+'\n',text=True,check=True,capture_output=True).stdout.strip()
ftp.storbinary('STOR '+posixpath.join(posixpath.dirname(ROOT),password_basename),io.BytesIO((USER+':'+hashed+'\n').encode()))
block='AuthType Basic\nAuthName "SEEZN Burger Preview"\nAuthUserFile "'+password_file+'"\nRequire valid-user\n'
configs={
 'bbq/burger-lp/.htaccess':block+'<IfModule mod_headers.c>\nHeader always set Cache-Control "private, no-store"\n</IfModule>\n',
 'media/images/bbq/burger-lp/.htaccess':block,
 'media/videos/.htaccess':'<Files "seezn-burger-lp-top.mp4">\n'+block+'</Files>\n',
 '_next/static/chunks/pages/bbq/.htaccess':'<Files "burger-lp-*.js">\n'+block+'</Files>\n',
}
for rel,extra in configs.items():
    old=read(rel);backups[rel]=None if old is None else base64.b64encode(old).decode()
    text=(old or b'').decode()
    if '# BEGIN SEEZN BURGER PREVIEW' in text:raise RuntimeError('Existing managed preview authentication requires explicit update')
    write(rel,(text+'\n# BEGIN SEEZN BURGER PREVIEW\n'+extra+'# END SEEZN BURGER PREVIEW\n').encode());touched.append(rel)
# Refuse to publish page data until server authentication actually challenges requests.
protected=['/bbq/burger-lp/','/media/images/bbq/burger-lp/','/media/videos/seezn-burger-lp-top.mp4']
for url in protected:
    status,_,headers=expect(url,401)
    if 'Basic' not in headers.get('WWW-Authenticate',''):raise RuntimeError('Missing Basic authentication challenge')
print('Authentication is active before content upload.')
for rel,data in files.items():
    if rel=='bbq/burger-lp/index.html':continue
    write(rel,base64.b64decode(data))
write('bbq/burger-lp/index.html',base64.b64decode(files['bbq/burger-lp/index.html']))
checks=[]
page_chunk=next('/'+p for p in files if p.startswith('_next/static/chunks/pages/bbq/burger-lp-') and p.endswith('.js'))
for url in ['/bbq/burger-lp/','/media/images/bbq/burger-lp/seezn_bargar_01.webp','/media/videos/seezn-burger-lp-top.mp4',page_chunk]:
    expect(url,401);_,body,_=expect(url,200,True)
    key=url.lstrip('/') if not url.endswith('/') else url.lstrip('/')+'index.html'
    if body!=base64.b64decode(files[key]):raise RuntimeError('Remote content differs from deployment bundle: '+url)
    checks.append({'url':BASE+url,'unauthenticated':401,'authenticated':200,'contentMatches':True})
# The password file is outside the web root. Ensure no similarly named public file is served.
expect('/'+password_basename,404)
pathlib.Path('/tmp/burger-deploy-result.json').write_text(json.dumps({'status':'success','url':BASE+'/bbq/burger-lp/','sourceCommit':'e584ba9','checks':checks,'files':len(files)},indent=2))
print('PASS: page, images, video, and page JavaScript are protected; authenticated files match the deployment bundle.')
ftp.quit()
