import "@/styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const reservation = document.getElementById("js_reservation");
    const wanted = document.querySelector(".js-wanted");

    //// footerタグが見えたら #js_reservation をフェードアウト
    const targets = [reservation, wanted].filter((el): el is HTMLElement => el !== null);

    const footer = document.querySelector("footer");
    let observer: IntersectionObserver | null = null;

    if (footer && targets.length > 0) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            targets.forEach((el) => {
              el.style.transition = "opacity 0.3s ease";
              el.style.opacity = entry.isIntersecting ? "0" : "1";
              el.style.pointerEvents = entry.isIntersecting ? "none" : "auto";
            });
          });
        },
        {
          root: null,
          threshold: 0,
        }
      );
      observer.observe(footer);
    }

    //// クリーンアップ
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return <Component {...pageProps} />;
}
