"use client";
import { LayoutBbq } from "@/components/LayoutBbq";
import Image from "next/image";
import Link from "next/link";
import { CardPlan } from "@/components/CardPlan";
import { BbqItem } from "@/components/BbqItem";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useState } from "react";
import type SplideCore from "@splidejs/splide";
import { useIsomorphicLayoutEffect } from "@/lib/useGsapClient";

const bannerItems = [
  {
    src: "/media/images/bbq/gallery08.webp",
    alt: "ちょっと贅沢な休日",
  },
  {
    src: "/media/images/bbq/gallery01.webp",
    alt: "集まる理由になる",
  },
  {
    src: "/media/images/bbq/gallery07.webp",
    alt: "日常から少し離れる夜",
  },
  {
    src: "/media/images/bbq/gallery05.webp",
    alt: "BBQは、特別な日にも似合う",
  },
  // {
  //   src: "/media/images/bbq/gallery04.webp",
  //   alt: "少人数がちょうどいい",
  // },
  // {
  //   src: "/media/images/bbq/gallery06.webp",
  //   alt: "子供も楽しい場所",
  // },
  {
    src: "/media/images/bbq/gallery03.webp",
    alt: "ママも安心のベビールーム",
  },
];

/* =========================================================
   KvBackground
   ========================================================= */
type BgItem = {
  key: "ABOUT" | "SERVICE" | "PLAN" | "USE" | "ACCESS";
  pcSrc: string;
  spSrc: string;
  alt: string;
};

const BG_ITEMS: BgItem[] = [
  {
    key: "ABOUT",
    pcSrc: "/media/images/bbq/1.webp",
    spSrc: "/media/images/bbq/1-sp.webp",
    alt: "ABOUT",
  },
  {
    key: "SERVICE",
    pcSrc: "/media/images/bbq/2.webp",
    spSrc: "/media/images/bbq/2-sp.webp",
    alt: "SERVICE",
  },
  {
    key: "PLAN",
    pcSrc: "/media/images/bbq/3.webp",
    spSrc: "/media/images/bbq/3-sp.webp",
    alt: "PLAN",
  },
  {
    key: "USE",
    pcSrc: "/media/images/bbq/4.webp",
    spSrc: "/media/images/bbq/4-sp.webp",
    alt: "USE",
  },
  {
    key: "ACCESS",
    pcSrc: "/media/images/bbq/5.webp",
    spSrc: "/media/images/bbq/5-sp.webp",
    alt: "ACCESS",
  },
];

const TITLES = [
  { key: "ABOUT", label: "ABOUT" },
  { key: "SERVICE", label: "SERVICE" },
  { key: "PLAN", label: "PLAN" },
  { key: "USE", label: "HOW TO USE" },
  { key: "ACCESS", label: "ACCESS" },
] as const;

export function KvBackground() {
  return (
    <div data-name="bg-images" className="fixed left-0 top-0 z-[1] h-lvh w-full lg:h-full">
      {/* KV Video */}
      <div
        data-name="kv-video-wrap"
        className="relative z-10 h-full w-full"
        style={{
          opacity: 1,
          visibility: "visible",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          willChange: "opacity",
        }}
      >
        {/* SP */}
        <video data-name="kv-video-sp" className="h-full w-full object-cover" poster="https://www.gorakadan.com/fuji/golf/wp-content/themes/Gorakadan-fuji-golf/dist/img/home/poster-kv-video-sp.webp" preload="auto" loop playsInline muted autoPlay webkit-playsinline="true">
          <source src="/media/images/bbq/BBQnologo_sp.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Background Pictures */}
      <div data-name="wrap-kv-bgs" className="absolute left-0 top-0 z-[15] h-full w-full" style={{ clipPath: "none" }}>
        {BG_ITEMS.map((item, idx) => (
          <div
            key={item.key}
            data-name="bg-fullpicture"
            className="bg-picture absolute left-0 top-0 flex h-full w-full items-center justify-center"
            style={{
              zIndex: 10 + idx,
              clipPath: "inset(100% 0% 0% 0%)",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
              willChange: "clip-path, -webkit-mask-position, -webkit-mask-size",
            }}
          >
            <Image data-name={item.key} alt={item.alt} src={item.spSrc} fill priority={item.key === "ABOUT"} sizes="100vw" className="object-cover lg:hidden" />
            <Image data-name={item.key} alt={item.alt} src={item.pcSrc} fill priority={item.key === "ABOUT"} sizes="100vw" className="hidden object-cover lg:block" />
          </div>
        ))}
      </div>

      {/* Titles */}
      <div data-name="ttls-contents" className="absolute left-1/2 top-1/2 z-20 h-auto w-full -translate-x-1/2 -translate-y-1/2">
        {TITLES.map((t) => (
          <h3 key={t.key} data-name={t.key} className="font-abc absolute left-1/2 top-1/2 z-10 h-auto w-full -translate-x-1/2 text-center text-white text-64 opacity-0" style={{ opacity: 0, visibility: "hidden" }}>
            {t.label}
          </h3>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const splideRef = useRef<{ splide: SplideCore } | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const pageRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    let ctx: { revert: () => void } | undefined;

    const run = async () => {
      const gsapModule = await import("gsap");
      const stModule = await import("gsap/ScrollTrigger");

      const gsap = gsapModule.gsap || gsapModule.default || gsapModule;
      const ScrollTrigger = stModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      if (!pageRef.current) return;

      ctx = gsap.context(() => {
        const root = pageRef.current!;

        const bgWrap = root.querySelector<HTMLElement>('[data-name="wrap-kv-bgs"]');
        const ttlWrap = root.querySelector<HTMLElement>('[data-name="ttls-contents"]');
        const videoWrap = root.querySelector<HTMLElement>('[data-name="kv-video-wrap"]');

        if (!bgWrap || !ttlWrap || !videoWrap) return;

        const orderKeys = BG_ITEMS.map((v) => v.key);

        const getLayer = (key: string) => {
          const img = bgWrap.querySelector<HTMLElement>(`img[data-name="${key}"]`);
          return img?.closest<HTMLElement>(".bg-picture") || null;
        };

        const getTitle = (key: string) => ttlWrap.querySelector<HTMLElement>(`h3[data-name="${key}"]`) || null;

        // =========================================================
        // 0) zoomPanel
        //   - 上端が画面上から 1/3 に来たら scale=1（幅いっぱい）
        //   - 下端が画面下から 1/3（= 画面上から 2/3）に来たら縮小開始
        //   - 縮小が止まるのは要素が画面上から消えてから（bottom <= 0）
        // =========================================================
        const zoomPanels = Array.from(root.querySelectorAll<HTMLElement>("[data-zoom-panel]"));

        if (zoomPanels.length) {
          const MIN = 0.7;
          const MAX = 1.0;

          const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
          const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

          zoomPanels.forEach((panel) => {
            gsap.set(panel, {
              transformOrigin: "50% 50%",
              scale: MIN,
              willChange: "transform",
            });

            const apply = () => {
              const rect = panel.getBoundingClientRect();
              const vh = window.innerHeight || 0;
              if (!vh || rect.height <= 0) return;

              // 上端がここに来たら幅いっぱい（scale=1）
              const FULL_AT_TOP_Y = vh * (1 / 3); // 1/3

              // 下端がここに来たら縮小開始（画面下から1/3 = 画面上から2/3）
              const SHRINK_START_BOTTOM_Y = vh * (2 / 3); // 2/3

              // -----------------------------
              // 入場（拡大）: top が vh -> 1/3vh で MIN -> MAX
              // top >= vh では MIN、top <= 1/3vh では MAX
              // -----------------------------
              const inT = clamp01((vh - rect.top) / (vh - FULL_AT_TOP_Y));
              const scaleIn = lerp(MIN, MAX, inT);

              // -----------------------------
              // 退場（縮小）: bottom が 2/3vh -> 0 で MAX -> MIN
              // bottom >= 2/3vh では MAX、bottom <= 0 では MIN
              // -----------------------------
              const outT = clamp01((SHRINK_START_BOTTOM_Y - rect.bottom) / SHRINK_START_BOTTOM_Y);
              const scaleOut = lerp(MAX, MIN, outT);

              // 入場・退場を同時評価し、縮小が優先されるよう小さい方を採用
              const s = Math.min(scaleIn, scaleOut);

              gsap.set(panel, { scale: s, overwrite: true });
            };

            ScrollTrigger.create({
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
              onUpdate: apply,
              onRefresh: apply,
            });

            apply();
          });
        }

        // =========================================================
        // タイトル制御
        // =========================================================
        const titleEls = Array.from(ttlWrap.querySelectorAll<HTMLElement>("h3"));

        const hideAllTitlesNow = () => {
          gsap.killTweensOf(titleEls);
          gsap.set(titleEls, { autoAlpha: 0, y: 24, filter: "blur(14px)" });
        };

        let activeTitleKey: string | null = null;

        const setTitleActive = (key: string | null) => {
          if (key === activeTitleKey) return;
          activeTitleKey = key;

          hideAllTitlesNow();

          if (!key) return;
          const el = getTitle(key);
          if (!el) return;

          gsap.fromTo(el, { autoAlpha: 0, y: 24, filter: "blur(14px)" }, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.55, ease: "power2.out", overwrite: true });
        };

        hideAllTitlesNow();

        // =========================================================
        // レイヤー初期化
        // =========================================================
        const closeAllLayers = () => {
          orderKeys.forEach((k) => {
            const layer = getLayer(k);
            if (!layer) return;
            gsap.set(layer, { clipPath: "inset(100% 0% 0% 0%)" });
            layer.classList.remove("is-wave");
          });
        };

        // =========================================================
        // 波線（mask）を「遷移中だけ」有効化する
        // =========================================================
        const MASK_ANCHOR = 120; // 波線の基準（px）。必要に応じて調整します

        const enableWave = (layer: HTMLElement) => {
          if (!layer.classList.contains("is-wave")) layer.classList.add("is-wave");
        };

        const disableWave = (layer: HTMLElement) => {
          if (layer.classList.contains("is-wave")) layer.classList.remove("is-wave");
          gsap.set(layer, {
            WebkitMaskPosition: "",
            maskPosition: "",
            WebkitMaskSize: "",
            maskSize: "",
            overwrite: true,
          });
        };

        const syncWaveMaskToTopPct = (layer: HTMLElement, topPct: number) => {
          // 「遷移中だけ」波線を出す（止まって見える状態を作らない）
          if (topPct <= 0 || topPct >= 100) {
            disableWave(layer);
            return;
          }

          enableWave(layer);

          const h = layer.offsetHeight || window.innerHeight || 0;
          if (!h) return;

          const maskH = h * 3; // 300%
          const edgeY = (topPct / 100) * h; // 要素内Y（境界）
          const y = edgeY - MASK_ANCHOR;

          gsap.set(layer, {
            WebkitMaskSize: `100% ${maskH}px`,
            maskSize: `100% ${maskH}px`,
            WebkitMaskPosition: `50% ${y}px`,
            maskPosition: `50% ${y}px`,
            overwrite: true,
          });
        };

        // =========================================================
        // VIDEO 表示モード
        // =========================================================
        const setVideoMode = () => {
          gsap.set(videoWrap, { autoAlpha: 1 });
          closeAllLayers();
          activeTitleKey = null;
          hideAllTitlesNow();
        };

        setVideoMode();

        // =========================================================
        // 1) VIDEO -> ABOUT（scrub）
        // =========================================================
        const videoSection = root.querySelector<HTMLElement>('[data-kvbg="VIDEO"]');
        const golfLayer = getLayer("ABOUT");

        if (videoSection && golfLayer) {
          ScrollTrigger.create({
            trigger: videoSection,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,

            onUpdate: (self) => {
              activeTitleKey = "ABOUT";

              const p = self.progress;
              gsap.set(videoWrap, { autoAlpha: 1 - p });

              const top = (1 - p) * 100;
              gsap.set(golfLayer, { clipPath: `inset(${top}% 0% 0% 0%)` });

              syncWaveMaskToTopPct(golfLayer, top);

              titleEls.forEach((el) => {
                if (el.getAttribute("data-name") !== "ABOUT") {
                  gsap.set(el, { autoAlpha: 0, y: 24, filter: "blur(14px)" });
                }
              });

              const tp = Math.max(0, (p - 0.25) / 0.75);
              const tEl = getTitle("ABOUT");
              if (tEl) {
                gsap.set(tEl, {
                  autoAlpha: tp,
                  filter: `blur(${(1 - tp) * 14}px)`,
                  y: (1 - tp) * 24,
                  overwrite: true,
                });
              }
            },

            onEnter: () => setVideoMode(),
            onEnterBack: () => setVideoMode(),

            onLeave: () => {
              gsap.set(videoWrap, { autoAlpha: 0 });
              gsap.set(golfLayer, { clipPath: "inset(0% 0% 0% 0%)" });
              // top=0 なので波線無効化（止まり防止）
              syncWaveMaskToTopPct(golfLayer, 0);
            },
          });
        }

        // =========================================================
        // 2) 画像 -> 画像
        // =========================================================
        const sections = new Map<string, HTMLElement>();
        orderKeys.forEach((k) => {
          const sec = root.querySelector<HTMLElement>(`[data-kvbg="${k}"]`);
          if (sec) sections.set(k, sec);
        });

        // 初期：ABOUT以外を閉じる
        orderKeys.forEach((k) => {
          if (k === "ABOUT") return;
          const layer = getLayer(k);
          if (!layer) return;
          gsap.set(layer, { clipPath: "inset(100% 0% 0% 0%)" });
          disableWave(layer);
        });

        orderKeys.forEach((key) => {
          const sec = sections.get(key);
          const layer = getLayer(key);
          if (!sec || !layer) return;

          if (key === "ABOUT") {
            return;
          }

          ScrollTrigger.create({
            trigger: sec,
            start: "top bottom",
            end: "top top",
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const p = self.progress;
              const top = gsap.utils.interpolate(100, 0, p);

              gsap.set(layer, {
                clipPath: `inset(${top}% 0% 0% 0%)`,
                overwrite: true,
              });

              syncWaveMaskToTopPct(layer, top);
            },
            onLeave: () => {
              syncWaveMaskToTopPct(layer, 0);
            },
            onLeaveBack: () => {
              syncWaveMaskToTopPct(layer, 100);
            },
          });

          ScrollTrigger.create({
            trigger: sec,
            start: "top 55%",
            end: "bottom 45%",
            onEnter: () => setTitleActive(key),
            onEnterBack: () => setTitleActive(key),
          });
        });

        // =========================================================
        // 3) 画像パララックス
        // =========================================================
        const bgImgs = Array.from(bgWrap.querySelectorAll<HTMLImageElement>(".bg-picture img"));
        bgImgs.forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: 8, scale: 1.1 },
            {
              yPercent: -8,
              scale: 1.2,
              ease: "none",
              scrollTrigger: {
                trigger: document.documentElement,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
              },
            },
          );
        });

        ScrollTrigger.refresh();
      }, pageRef);
    };

    void run();

    return () => {
      try {
        ctx?.revert();
      } catch {
        // noop
      }
    };
  }, []);

  return (
    <LayoutBbq title=".SEEZN (ドット シーズン)" description="群馬県高崎市の完全予約制アウトドアBBQ施設「.SEEZN（ドットシーズン）」公式ページ。準備・火起こし・片付け不要の手ぶらBBQプラン、各種肉コース、設備概要、利用方法と料金情報を掲載しています。ご家族・友人・団体利用まで対応可能な屋外バーベキューサービスの詳細はこちら。">
      <div ref={pageRef} className="">
        <KvBackground />

        {/* 動画区間 */}
        <section data-kvbg="VIDEO" className="relative min-h-screen">
          <h1 className="absolute top-1/2 left-1/2 -translate-1/2 z-1">
            <Image className="w-180 pc:w-424" src="/media/images/bbq/svg_seezn-logo.svg" alt="seezn（シーズン）" loading="lazy" width="424" height="106" />
          </h1>
        </section>

        {/* 画像区間 */}
        <section data-kvbg="ABOUT" className="min-h-screen mt-[100dvh]">
          <div data-zoom-panel className="relative bg-white mx-auto py-80 w-full origin-center z-[500]">
            <div className="relative px-24 pc:px-70 pc:pt-132 pb-48">
              <picture className="absolute top-54 z-10 right-0 w-[57%] hidden pc:block">
                <Image className="w-full" src="/media/images/bbq/pc_02.webp" alt="Flowers" loading="lazy" width="1104" height="537" />
              </picture>
              <div className="hidden pc:flex bg-white w-1/2 py-88 pc:pr-64 flex-col items-center">
                <p className="pc:text-20 font-semibold font-yu-mincho leading-[2.4] text-center">
                  完全予約制のプライベートBBQ場
                  <br />
                  準備不要、後片づけ不要で
                  <br />
                  群馬県高崎市郊外でリゾート気分を味わえる
                  <br />
                  家族や友達、会社の仲間と…
                  <br />
                  様々なシーンで
                  <br />
                  優雅なひと時をお過ごしいただけます
                </p>
                <a className="mt-32 pc:hover:opacity-60 duration-500" href="https://www.instagram.com/seezn_rezort/" target="_blank" rel="noreferrer">
                  <Image className="pc:w-462" src="/media/images/bbq/svg-btn-insta.svg" alt="インスタグラム" loading="lazy" width="464" height="119" />
                </a>
              </div>

              <div className="mt-40 pc:mt-80">
                <div className="flex justify-center">
                  <Link className="bg-[rgba(0,0,0,0.7)] w-full pc:w-968 h-96 pc:h-168 flex justify-center items-center pc:hover:opacity-70 duration-500" href="/bbq_business/">
                    <div className="relative px-32">
                      <p className="text-20 pc:text-28 font-semibold font-yu-mincho text-white text-center">
                        最大200名様
                        <br />
                        <span className="relative">
                          <svg className="absolute top-1/2 -left-8 -translate-x-full -translate-y-1/2 fill-white w-12 pc:w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.28 32.34">
                            <path d="M16.28,16.17L0,32.34V0l16.28,16.17Z" />
                          </svg>
                          企業様・団体様はこちら
                        </span>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-20">
              <div className="mx-auto max-w-1220">
                <Splide
                  ref={splideRef}
                  aria-label="メインバナー"
                  options={{
                    type: "loop",
                    perPage: 3,
                    perMove: 1,
                    gap: "16rem",
                    interval: 5000,
                    arrows: false,
                    pagination: false,
                    breakpoints: {
                      1024: {
                        perPage: 2,
                      },
                      640: {
                        perPage: 1,
                      },
                    },
                  }}
                  onMoved={() => {
                    const instance = splideRef.current?.splide;
                    if (instance) {
                      setActiveIndex(instance.index);
                    }
                  }}
                  onMounted={() => {
                    const instance = splideRef.current?.splide;
                    if (instance) {
                      setActiveIndex(instance.index);
                    }
                  }}
                >
                  {bannerItems.map((item, index) => (
                    <SplideSlide key={index}>
                      <div className="flex flex-col">
                        <Image src={item.src} alt={item.alt} width={800} height={320} className="h-full w-full object-cover" />
                        {/* <p className="mt-12 text-14 pc:text-16 font-noto-serif font-medium text-center leading-[1.3]">{item.alt}</p> */}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>

                <div className="mt-12 flex items-center justify-center gap-40">
                  <button type="button" aria-label="前のスライドへ" onClick={() => splideRef.current?.splide?.go("<")} className="relative shrink-0 w-40 h-40 transition-opacity duration-300 hover:opacity-60 cursor-pointer">
                    <Image className="object-contain scale-x-[-1]" src="/media/images/common/svg-chevron-circle.svg" alt="丸矢印" fill />
                  </button>

                  <div className="flex flex-wrap items-center justify-center gap-12">
                    {bannerItems.map((_, index) => (
                      <button key={index} type="button" aria-label={`スライド ${index + 1}`} onClick={() => splideRef.current?.splide?.go(index)} className={"rounded-full transition-all duration-300 " + (index === activeIndex ? "w-12 h-12 bg-black" : "w-8 h-8 bg-border")} />
                    ))}
                  </div>

                  <button type="button" aria-label="次のスライドへ" onClick={() => splideRef.current?.splide?.go(">")} className="relative shrink-0 w-40 h-40 transition-opacity duration-300 hover:opacity-60 cursor-pointer">
                    <Image className="object-contain" src="/media/images/common/svg-chevron-circle.svg" alt="丸矢印" fill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-kvbg="SERVICE" className="min-h-screen mt-[100dvh]">
          <div data-zoom-panel className="relative bg-white mx-auto py-80 w-full origin-center z-[500]">
            <div className="px-20">
              <div className="mx-auto max-w-1220">
                <div className="flex items-end gap-x-16">
                  <p className="text-28 pc:text-40 font-medium font-noto-serif leading-none">Our service</p>
                  <h2 className="text-15 pc:text-17 font-medium leading-none">サービス内容</h2>
                </div>
                <div className="mt-40 grid grid-cols-2 pc:grid-cols-3 gap-16 pc:gap-32">
                  <div className="bg-white py-16 px-10 pc:p-28 flex justify-between items-center flex-col">
                    <p className="text-16 pc:text-35 font-noto-serif text-light-gray text-center">Empty-handed OK!</p>
                    <Image className="mt-20 w-60 pc:w-131" src="/media/images/bbq/svg_service01.svg" alt="サービス" loading="lazy" width="131" height="119" />
                    <p className="mt-20 text-12 pc:text-20 font-noto-serif font-medium text-center">
                      BBQに必要な道具、消耗品は
                      <br />
                      全て取り揃えてございます
                    </p>
                  </div>
                  <div className="bg-white py-16 px-10 pc:p-28 flex justify-between items-center flex-col">
                    <p className="text-16 pc:text-35 font-noto-serif text-light-gray text-center">
                      Fully equipped
                      <br />
                      facilities
                    </p>
                    <Image className="mt-20 w-100 pc:w-225" src="/media/images/bbq/svg_service02.svg" alt="サービス" loading="lazy" width="225" height="86" />
                    <p className="mt-20 text-12 pc:text-20 font-noto-serif font-medium text-center">
                      各ブース毎に
                      <br />
                      シンク、調理台設置
                    </p>
                  </div>
                  <div className="bg-white py-16 px-10 pc:p-28 flex justify-between items-center flex-col">
                    <p className="text-16 pc:text-35 font-noto-serif text-light-gray text-center">
                      No preparation
                      <br />
                      required
                    </p>
                    <Image className="mt-20 w-50 pc:w-99" src="/media/images/bbq/svg_service03.svg" alt="サービス" loading="lazy" width="99" height="99" />
                    <p className="mt-20 text-12 pc:text-20 font-noto-serif font-medium text-center">
                      準備、火おこしは
                      <br />
                      スタッフが行います
                    </p>
                  </div>
                  <div className="relative bg-white py-16 px-10 pc:p-28 flex justify-between items-center flex-col">
                    <p className="text-16 pc:text-35 font-noto-serif text-light-gray text-center">
                      All courses include
                      <br />a set of meat
                    </p>
                    <Image className="mt-20 w-50 pc:w-104" src="/media/images/bbq/svg_service04.svg" alt="サービス" loading="lazy" width="104" height="99" />
                    <p className="mt-20 text-12 pc:text-20 font-noto-serif font-medium text-center">
                      全てのコースに
                      <br />
                      お肉のセットが含まれています
                    </p>
                    <p className="mt-8 text-10 pc:text-14 font-medium font-noto-serif -indent-[1em] pl-[1em]">※お飲み物、野菜、海鮮、焼きそばなどの 販売は致しておりません。</p>
                  </div>
                  <div className="bg-white py-16 px-10 pc:p-28 flex justify-between items-center flex-col">
                    <p className="text-16 pc:text-35 font-noto-serif text-light-gray text-center">Free to leave</p>
                    <Image className="mt-20 w-60 pc:w-132" src="/media/images/bbq/svg_service05.svg" alt="サービス" loading="lazy" width="132" height="58" />
                    <p className="mt-20 text-12 pc:text-20 font-noto-serif font-medium text-center">
                      BBQ終了後は
                      <br />
                      そのままお帰りいただけます
                    </p>
                  </div>
                  <div className="relative bg-white py-16 px-10 pc:p-28 flex justify-between items-center flex-col">
                    <p className="text-16 pc:text-35 font-noto-serif text-light-gray text-center">
                      No need to take
                      <br />
                      trash home
                    </p>
                    <Image className="mt-20 w-100 pc:w-216" src="/media/images/bbq/svg_service06.svg" alt="サービス" loading="lazy" width="216" height="99" />
                    <p className="mt-20 text-12 pc:text-20 font-noto-serif font-medium text-center">
                      洗い物、ゴミの処理等は
                      <br />
                      スタッフが行います
                    </p>
                    <p className="mt-8 text-10 pc:text-14 font-medium font-noto-serif -indent-[1em] pl-[1em]">※ゴミの分別はお願いしております。</p>
                  </div>
                </div>

                <div className="mt-64 pc:mt-134 bg-white p-24 pc:p-44">
                  <h3 className="text-20 pc:text-25 font-noto-serif font-semibold text-center">無料サービス</h3>
                  <p className="mt-16 pc:mt-24 text-14 pc:text-22 font-noto-serif font-medium">・炭・網・トング・氷（ドリンク用）・皿・プラコップ・ペーパータオル・割りばし・キッチンはさみ・包丁・まな板 ・使い捨て鉄板(焼きそば用) ・タレ・塩コショウ・調理用油・ゴミ袋</p>
                  <p className="mt-16 text-12 pc:text-20 font-medium font-noto-serif -indent-[1em] pl-[1em]">※氷に関して：1日にご用意できる容量が決まっておりますので、それを超える使用量の場合、近隣スーパーで自費での購入をお願いしております。</p>
                </div>

                <Link className="mt-32 pc:mt-64 mx-auto w-320 pc:w-560 h-80 px-24 pc:h-118 bg-off-white border border-solid border-black flex justify-center items-center gap-x-24" href="/bbq/faq/">
                  <div className="flex items-center gap-x-16">
                    <span className="text-26 pc:text-32 font-noto-serif font-medium leading-none">FAQ</span>
                    <span className="mt-8 text-16 pc:text-18 font-medium leading-none">よくあるご質問</span>
                  </div>
                  <Image className="w-16 pc:w-23" src="/media/images/bbq/svg_double-arrow-right.svg" alt="ダブルアロー" loading="lazy" width="23" height="32" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section data-kvbg="PLAN" className="min-h-screen mt-[100dvh]">
          <div data-zoom-panel className="relative bg-white mx-auto py-80 w-full origin-center z-[500]">
            <div className="px-20">
              <div className="mx-auto max-w-1220">
                <div className="flex items-start gap-x-20 pc:gap-x-32">
                  <div className="max-pc:hidden flex-1">
                    <Image className="w-full" src="/media/images/bbq/plan01.webp" alt="プラン" loading="lazy" width="590" height="590" />
                  </div>
                  <div className="w-full pc:w-768">
                    <div className="flex items-end gap-x-16">
                      <p className="text-28 pc:text-40 font-medium font-noto-serif leading-none">PLAN</p>
                      <h2 className="text-15 pc:text-17 font-medium leading-none">プラン</h2>
                    </div>
                    <p className="mt-24 pc:mt-40 text-18 pc:text-24 font-noto-serif font-semibold">
                      【大人用コース】
                      <span className="text-14 pc:text-20">※18歳以上</span>
                    </p>
                    <div className="mt-12 pc:mt-24 grid pc:grid-cols-2 gap-8">
                      <CardPlan label="大人用コース A" price="¥3,800" description={["牛ステーキ 150g", "ハーブチキン 150g"]} variant="A" />
                      <CardPlan label="大人用コース B" price="¥3,800" description={["国産A4和牛ステーキ 150g"]} variant="B" />
                      <CardPlan label="大人用コース C" price="¥4,500" description={["国産A4和牛ステーキ 150g", "ハーブチキン 150g"]} variant="C" />
                      <CardPlan
                        label="大人用コース D"
                        price="¥4,200"
                        description={[
                          "ハーブチキン 150g",
                          <>
                            海鮮串・エビ・ホタテ
                            <br />
                            各1個
                          </>,
                        ]}
                        variant="D"
                      />
                    </div>
                    <p className="mt-8 -indent-[1em] pl-[1em] text-14 pc:text-19 text-red font-noto-serif font-medium">※各コース共に焼きそばや野菜、お飲み物などは含まれておりません。</p>
                    <div className="mt-16 py-32 border-t border-b border-solid border-black">
                      <p className="text-18 pc:text-25 font-noto-serif font-semibold">
                        【子供用コース】
                        <span className="text-14 pc:text-20">※小学生以上高校卒業まで</span>
                      </p>
                      <div className="mt-12 pc:mt-24 bg-silver-gray py-12 px-16 pc:px-64">
                        <div className="flex items-center gap-x-8 pc:gap-x-32">
                          <span className="text-20 pc:text-28 text-right font-noto-serif font-medium leading-[1.2]">
                            ¥2,500
                            <span className="text-10 pc:text-12">（税込）</span>
                          </span>
                          <div className="h-32 pc:h-52 w-[1px] bg-white"></div>
                          <p className="text-14 pc:text-16 font-noto-serif font-medium">牛ステーキ 150g</p>
                        </div>
                      </div>
                      <p className="mt-16 text-14 pc:text-19 font-noto-serif font-medium">未就学児のご利用は無料　※お肉なし</p>
                    </div>
                  </div>
                </div>
                <p className="mt-40 pc:mt-104 text-16 pc:text-20 font-noto-serif font-medium text-center leading-[2.4]">
                  安心してお召し上がりいただけるよう
                  <br />
                  鮮度にこだわり
                  <br />
                  一つ一つ真空パックで個包装
                  <br />
                  BBQでも柔らかく美味しいお肉を
                  <br />
                  召し上がっていただけます
                </p>

                <div className="mt-32 pc:mt-64">
                  <div className="grid md:grid-cols-2 gap-16">
                    <BbqItem title="国産A4和牛ステーキ 150g" description="ほどよい霜降りの希少部位であるランプ・イチボの厚切りステーキ" imageSrc="/media/images/bbq/meat01.webp" imageAlt="肉" />
                    <BbqItem title="牛ステーキ 150g" description="脂身が少なく、柔らかい、年齢問わず大人気の部位" imageSrc="/media/images/bbq/meat02.webp" imageAlt="肉" />
                    <BbqItem title="ハーブチキン 150g" description="オリジナルブレンドのハーブで味付けした自家製のチキン。焼いてそのままお召し上がりいただけます" imageSrc="/media/images/bbq/meat03.webp" imageAlt="肉" />
                    <BbqItem
                      title={
                        <>
                          海鮮串　1串
                          <br />
                          エビ　　1尾
                          <br />
                          ホタテ　1個
                        </>
                      }
                      description="北海道産ホタテ（バター付）、L2サイズエビ、6点刺しの海鮮串でボリューム満点！"
                      imageSrc="/media/images/bbq/kaisen.webp"
                      imageAlt="肉"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-64 px-22">
              <div className="mx-auto max-w-1200">
                <div className="relative pt-32 pc:pt-40 pb-24 pc:pb-32 px-24 pc:px-32 flex flex-col justify-center items-center pc:items-end aspect-[3/4] pc:aspect-[972/378] bg-[url('/media/images/bbq/beer.webp')] bg-cover bg-center">
                  <div className="pc:hidden absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.5)_100%)]"></div>
                  <div className="relative">
                    <h2 className="text-32 pc:text-56 text-white text-center font-noto-serif font-bold drop-shadow-black">
                      ビールサーバー
                      <br className="pc:hidden" />
                      無料貸出
                    </h2>
                  </div>
                  <div className="mt-16">
                    <p className="text-20 pc:text-30 text-white text-center font-bold drop-shadow-black">
                      キリン一番搾り3ℓ
                      <br className="pc:hidden" />
                      <span className="text-18 pc:text-24">（1本）</span>
                      <span className="text-28 pc:text-34 tracking-[0.05em]">¥5,000</span>
                    </p>
                  </div>

                  <div className="relative mt-24">
                    <div className="pc:w-512 border-t border-white pt-24">
                      <ul>
                        <li className="text-15 pc:text-17 text-white -indent-[1em] pl-[1em]">※ご予約時に「生ビール⚪️本」とお申しつけください。</li>
                        <li className="text-15 pc:text-17 text-white -indent-[1em] pl-[1em]">※現地で当日ご購入（追加）いただくことも可能ですが在庫に限りがございます。</li>
                        <li className="text-15 pc:text-17 text-white -indent-[1em] pl-[1em]">※サーバーレンタル料は無料。（1本当たり中ジョッキ約10杯分）</li>
                        <li className="text-15 pc:text-17 text-white -indent-[1em] pl-[1em]">※お客さまご自身にてサーバーより注いでいただきます。</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-kvbg="USE" className="min-h-screen mt-[100dvh] overflow-hidden">
          <div data-zoom-panel className="relative bg-white mx-auto py-80 w-full origin-center z-[500]">
            <div className="px-20">
              <div className="mx-auto pc:max-w-1220">
                <div className="flex items-start flex-col pc:flex-row gap-x-48 gap-y-40">
                  <Image className="-mx-20 w-[calc(100%_+_40rem)] pc:w-590" src="/media/images/bbq/howto01.webp" alt="プラン" loading="lazy" width="589" height="590" />
                  <div className="flex-1">
                    <div className="flex items-end gap-x-16">
                      <p className="text-28 pc:text-40 font-medium font-noto-serif leading-none">How to use</p>
                      <h2 className="text-15 pc:text-17 font-medium leading-none">ご利用方法</h2>
                    </div>
                    <div className="mt-32 bg-white border border-solid border-black p-20 flex justify-center items-center flex-col gap-y-8">
                      <p className="text-16 pc:text-18 font-noto-serif font-medium">準備(火起こし)〜片付けまで弊社で行います</p>
                      <p className="text-14 pc:text-16 font-noto-serif font-medium">※ゴミの分別はお客様にお願いしております。</p>
                    </div>
                    <div className="mt-32 flex flex-col gap-y-24">
                      <dl className="flex gap-x-16">
                        <dt className="w-120 pc:w-180">
                          <span className="text-14 pc:text-16 font-noto-serif font-semibold">【ご利用人数】</span>
                        </dt>
                        <dd className="flex-1">
                          <p className="text-14 pc:text-16 font-noto-serif font-semibold">
                            最低人数：大人4名様〜
                            <br className="pc:hidden" />
                            （就学児のみの場合6名様～）
                          </p>
                          <p className="mt-8 -indent-[1em] pl-[1em] text-14 pc:text-16 font-noto-serif font-medium">※大人と就学児混合の場合はご予約時にご相談ください。</p>
                          <p className="mt-8 text-14 pc:text-16 font-noto-serif font-semibold">最大人数：200名様</p>
                          <p className="mt-8 -indent-[1em] pl-[1em] text-14 pc:text-16 font-noto-serif font-medium">※貸切のご利用については事前にご相談ください。</p>
                        </dd>
                      </dl>
                      <dl className="flex gap-x-16">
                        <dt className="w-120 pc:w-180">
                          <span className="text-14 pc:text-16 font-noto-serif font-semibold">【ご利用可能時間】</span>
                        </dt>
                        <dd className="flex-1">
                          <p className="text-14 pc:text-16 font-noto-serif font-semibold">
                            pm12:00〜15:00／pm17:00〜20:00
                            <br />
                            （１グループ３時間制）
                          </p>
                          <p className="mt-8 -indent-[1em] pl-[1em] text-14 pc:text-16 font-noto-serif font-medium">※利用時間の延長に関しては事前にお問い合わせください。</p>
                        </dd>
                      </dl>
                      <dl className="flex gap-x-16">
                        <dt className="w-120 pc:w-180">
                          <span className="text-14 pc:text-16 font-noto-serif font-semibold">【ご利用期間】</span>
                        </dt>
                        <dd className="flex-1">
                          <p className="text-14 pc:text-16 font-noto-serif font-semibold">年中営業</p>
                          <p className="mt-8 -indent-[1em] pl-[1em] text-14 pc:text-16 font-noto-serif font-medium">※毎月不定期で施設メンテナンスを行います。</p>
                        </dd>
                      </dl>
                      <dl className="flex gap-x-16">
                        <dt className="w-120 pc:w-180">
                          <span className="text-14 pc:text-16 font-noto-serif font-semibold">【ご予約方法】</span>
                        </dt>
                        <dd className="flex-1">
                          <p className="text-14 pc:text-16 font-noto-serif font-semibold">「.SEEZN」LINE公式アカウントよりご利用日の2日前までにご予約ください（対応時間 9:00～19:00）</p>
                          <p className="mt-8 -indent-[1em] pl-[1em] text-14 pc:text-16 font-noto-serif font-medium">※ご予約時、キャンセルポリシー及びご利用上の注意点のご確認を頂きます。</p>
                        </dd>
                      </dl>
                      <dl className="flex gap-x-16">
                        <dt className="w-120 pc:w-180">
                          <span className="text-14 pc:text-16 font-noto-serif font-semibold">【お支払い方法】</span>
                        </dt>
                        <dd className="flex-1">
                          <p className="text-14 pc:text-16 font-noto-serif font-semibold">・現金　・各種クレジットカード　・PayPay</p>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <Link className="mt-64 mx-auto w-320 pc:w-560 h-80 px-16 pc:px-24 pc:h-118 bg-off-white border border-solid border-black flex justify-center items-center gap-x-16 pc:gap-x-24" href="/bbq/use/">
                  <div className="flex items-center gap-x-8 pc:gap-x-16">
                    <span className="text-16 pc:text-32 font-noto-serif font-medium leading-none">Precautions for use</span>
                    <span className="mt-3 pc:mt-8 text-12 pc:text-18 font-medium leading-none">ご利用上の注意</span>
                  </div>
                  <Image className="w-16 pc:w-23" src="/media/images/bbq/svg_double-arrow-right.svg" alt="ダブルアロー" loading="lazy" width="23" height="32" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section data-kvbg="ACCESS" className="min-h-screen mt-[100dvh] overflow-hidden">
          <div data-zoom-panel className="relative bg-white mx-auto py-80 w-full origin-center z-[500]">
            <div className="px-20">
              <div className="mx-auto max-w-1220">
                <div className="flex items-end gap-x-16">
                  <p className="text-28 pc:text-40 font-medium font-noto-serif leading-none">Access</p>
                  <h2 className="text-15 pc:text-17 font-medium leading-none">アクセス</h2>
                </div>
                <div className="mt-32 flex flex-col pc:flex-row gap-x-16 gap-y-16">
                  <p className="shrink-0 text-14 pc:text-20 font-noto-serif font-medium">
                    〒370-0072 群馬県高崎市大八木町605-4
                    <br />
                    TEL 027-329-6563
                  </p>
                  <p className="hidden pc:block text-20 font-noto-serif font-medium">/</p>
                  <p className="hidden pc:block text-20 font-noto-serif font-medium">
                    駐車場：あり（建物西側）・駐車可能台数 15～20台
                    <br />
                    <span className="text-18">※駐車場のご予約は承ることができませんので、乗り合わせでのご来場をお願いいたします。</span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-y-16">
                  <div className="mt-20 relative w-full pc:w-[60%] aspect-video overflow-hidden bg-black">
                    <iframe className="block absolute inset-0 w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d803.2535577151344!2d139.00051819162854!3d36.36043418841604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601e8d6815b66347%3A0x71c9c76e08971014!2sSEEZN!5e0!3m2!1sja!2sjp!4v1680838139644!5m2!1sja!2sjp" width="800" height="600" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="seeznの地図"></iframe>
                  </div>

                  <div className="hidden pc:block flex-1 pl-15 mt-20">
                    <picture className="">
                      <Image className="w-full" src="/media/images/bbq/PC_08.webp" alt="08" loading="lazy" width="545" height="498" />
                    </picture>
                  </div>
                </div>

                <div className="mt-8 pc:hidden">
                  <Image className="w-full" src="/media/images/bbq/sp_08_new.webp" alt="08" loading="lazy" width="969" height="494" />
                </div>
              </div>
            </div>
            <div className="mt-40 pc:mt-120">
              <div className="px-20">
                <div className="mx-auto max-w-1220">
                  <div className="flex justify-center">
                    <div className="max-w-1000">
                      <Image className="w-full" src="/media/images/bbq/slope.webp" alt="" loading="lazy" width="750" height="120" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutBbq>
  );
}
