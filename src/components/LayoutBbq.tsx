import { MetaHead } from "@/components/MetaHead";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { SpMenuBbq } from "./SpMenuBbq";

export interface LayoutBbqProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  locale?: string;
  twitterCard?: string;
  noindex?: boolean;
  children: ReactNode;
}

export const LayoutBbq = ({ title, description, image = "/ogp.jpg", url, type = "website", siteName = "サイト名", locale = "ja_JP", twitterCard = "summary_large_image", noindex, children }: LayoutBbqProps) => {
  const router = useRouter();
  const baseUrl = url || `https://example.com${router.asPath}`;

  return (
    <>
      <MetaHead title={title} description={description} image={image} url={baseUrl} type={type} siteName={siteName} locale={locale} twitterCard={twitterCard} noindex={noindex} />

      {/* ページ全体構造 */}
      <div className="flex flex-col min-h-screen">
        {/* <Header /> */}
        <main className="flex flex-col flex-grow relative">{children}</main>
        <Footer />
        <SpMenuBbq />
      </div>
    </>
  );
};
