import Head from "next/head";

type MetaHeadProps = {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  siteName?: string;
  locale?: string;
  type?: string;
  twitterCard?: string;
  noindex?: boolean;
};

export const MetaHead = ({ title, description, image = "/default-ogp.jpg", url = "https://example.com", siteName = ".SEEZN", locale = "ja_JP", type = "website", twitterCard = "summary_large_image", noindex }: MetaHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      {noindex && <meta name="robots" content="noindex" />}
      {description && <meta name="description" content={description} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
  );
};
