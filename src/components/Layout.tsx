import Head from "next/head";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { Footer } from "./Footer";
import SpMenu from "./SpMenu";

export interface LayoutProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  locale?: string;
  twitterCard?: string;
  children: ReactNode;
}

export const Layout = ({ title, description, image = "/ogp.jpg", url, type = "website", siteName = "サイト名", locale = "ja_JP", twitterCard = "summary_large_image", children }: LayoutProps) => {
  const router = useRouter();
  const baseUrl = url || `https://example.com${router.asPath}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}

        {/* Open Graph Protocol */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        {description && <meta property="og:description" content={description} />}
        <meta property="og:url" content={baseUrl} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content={locale} />

        {/* Twitter Card */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        {description && <meta name="twitter:description" content={description} />}
        <meta name="twitter:image" content={image} />

        {/* Canonical */}
        <link rel="canonical" href={baseUrl} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      {/* ページ全体構造 */}
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <Footer />
        <SpMenu />
      </div>
    </>
  );
};
