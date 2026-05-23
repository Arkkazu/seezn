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
import { SectionTitle } from "@/components/SectionTitle";
import { BannerReservation } from "@/components/bbq/BannerReservation";
import { BannerBusiness } from "@/components/bbq/BannerBusiness";

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

const usageFlowItems = [
  {
    title: "ご入場",
    dayTime: "11:45",
    nightTime: "16:45",
    body: (
      <>
        <p>・開始時間 15 分前よりご入場いただけます</p> <p>・ご代表者様のお名前をスタッフまでお伝えください</p> <p>・火起こしなど、BBQ の準備は整っております</p>{" "}
      </>
    ),
  },
  {
    title: "BBQ開始",
    dayTime: "12:00",
    nightTime: "17:00",
    body: (
      <>
        <p>開始前にスタッフよりご利用方法の説明をさせていただきます</p> <p>※ご利用時間中の外出可能</p>{" "}
      </>
    ),
  },
  { title: "お会計", dayTime: "14:30", nightTime: "19:30", body: <p>スタッフからお声掛けさせていただきます</p> },
  {
    title: "お帰りの準備",
    dayTime: "14:50",
    nightTime: "19:50",
    body: (
      <>
        <p>ゴミの分別・お帰りのご準備</p> <p>※洗い物、ゴミの処理はこちらで行います</p>{" "}
      </>
    ),
  },
  { title: "終了", dayTime: "15:00", nightTime: "20:00", body: <p>忘れ物に気を付けてお帰りください</p> },
];

const planItems = [
  {
    number: "01",
    name: "Standard",
    kana: "スタンダード",
    image: "/media/images/bbq/plan-001.webp",
    alt: "スタンダード",
    description: "ハンバーグ(150g)/ハーブチキン(150g)",
    price: "¥3,800",
    campaignPrice: "¥3,300",
  },
  {
    number: "02",
    name: "Standard Plus",
    kana: "スタンダードプラス",
    image: "/media/images/bbq/plan-002.webp",
    alt: "スタンダードプラス",
    description: "牛ステーキ(150g)/ハーブチキン(150g)",
    price: "¥4,000",
  },
  {
    number: "03",
    name: "Wagyu",
    kana: "和牛",
    image: "/media/images/bbq/plan-003.webp",
    alt: "和牛",
    description: "A4黒毛和牛ステーキ(150g)",
    price: "¥4,000",
  },
  {
    number: "04",
    name: "Seafood",
    kana: "シーフード",
    image: "/media/images/bbq/plan-004.webp",
    alt: "シーフード",
    description: "ハーブチキン(150g)/海鮮串/エビ/ホタテ",
    price: "¥4,000",
  },
  {
    number: "05",
    name: "Premium",
    kana: "プレミアム",
    image: "/media/images/bbq/plan-005.webp",
    alt: "プレミアム",
    description: "A4黒毛和牛ステーキ(150g)/ハーブチキン(150g)",
    price: "¥4,500",
  },
  {
    number: "06",
    name: "Executive",
    kana: "エグゼクティブ",
    image: "/media/images/bbq/plan-006.webp",
    alt: "エグゼクティブ",
    description: "A4黒毛和牛ステーキ(150g)/海鮮串/エビ/ホタテ",
    price: "¥5,500",
  },
  {
    number: "07",
    name: "Kids",
    kana: "キッズ（小学生）",
    image: "/media/images/bbq/plan-007.webp",
    alt: "キッズ",
    description: "ハーブチキン(150g)",
    price: "¥2,000",
    variant: "gray",
  },
  {
    number: "08",
    name: "Youth",
    kana: "ユース（中・高校生）",
    image: "/media/images/bbq/plan-008.webp",
    alt: "ユース",
    description: "ハンバーグ(150g)/ハーブチキン(150g)",
    price: "¥2,800",
    variant: "green",
  },
  {
    number: "09",
    name: "Preschool",
    kana: "未就学児（小学校入学前）",
    image: "",
    alt: "",
    description: "",
    price: "¥0",
    variant: "gray",
  },
];

const serviceInfoItems = [
  {
    title: "BBQ道具一式",
    text: "炭 / 網 / トング / 皿 / プラコップ / ペーパータオル / 割りばし / キッチンはさみ / 包丁 / まな板 / 使い捨て鉄板（焼きそば用）/ タレ / 塩コショウ / 調理用油 / ゴミ袋",
    className: "max-pc:order-1 col-span-6 pc:col-span-2 bg-white",
  },
  {
    title: "会場設営完備",
    text: "イス / テーブル / グリル / タープテント 設置します",
    className: "max-pc:order-6 max-pc:col-span-3 bg-[#c9c9c9]",
  },
  {
    title: "各ブースに\nシンク・調理台完備",
    className: "max-pc:order-2 max-pc:col-span-2 bg-[#c9c9c9]",
  },
  {
    title: "お持ち込み自由",
    className: "max-pc:order-3 max-pc:col-span-2 bg-[#595757] text-white",
  },
  {
    title: (
      <>
        クーラー
        <br className="pc:hidden" />
        ボックス
        <br />
        保冷剤貸出
      </>
    ),
    note: "※数に限りがございます",
    className: "max-pc:order-4 max-pc:col-span-2 bg-white",
  },
  {
    title: "ベビールームあり",
    text: "授乳・おむつ替えなどの一時利用は無料でご利用いただけます",
    className: "max-pc:order-5 max-pc:col-span-3 bg-white",
  },
  {
    title: "火起こし準備不要・ゴミ持ち帰り不要",
    text: "グリル火起こし / 洗い物 / ゴミの処理はスタッフにおまかせ",
    note: "※ゴミの分別のみお客様にお願いしています",
    className: "max-pc:order-7 col-span-6 pc:col-span-2 bg-white pc:bg-[#c9c9c9]",
  },
];

const optionItems = [
  {
    label: "ビール",
    text: "1本（3ℓ：10杯分）※サーバーレンタル無料",
    pricePrefix: "",
    price: "¥5,000",
  },
  {
    label: "貸切（30名以上）",
    text: (
      <>
        ※50名以上でのご利用の場合は無料
        <br />
        ※GW、お盆期間は、50名以下の貸切不可
      </>
    ),
    pricePrefix: "平日",
    price: "¥15,000",
    priceSubPrefix: "土日祝",
    priceSub: "¥50,000",
  },
  {
    label: "延長",
    text: (
      <>
        ※1時間単位
        <br />
        ※貸し切りの場合は、4ブース分
      </>
    ),
    pricePrefix: (
      <>
        11:00~17:00
        <br />
        1ブースにつき
      </>
    ),
    price: "¥5,000",
    priceSubPrefix: (
      <>
        17:00~21:00
        <br />
        1ブースにつき
      </>
    ),
    priceSub: "¥10,000",
  },
  {
    label: "小屋利用",
    text: "※貸切の場合は無料",
    pricePrefix: "1棟につき",
    price: "¥11,000",
  },
];

const facilityInfoItems = [
  {
    label: "利用人数",
    body: "大人4名様〜200名様（中高生のみの場合6名様〜）",
  },
  {
    label: "ご利用可能時間",
    body: (
      <div className="flex flex-wrap items-center gap-x-8 gap-y-8">
        <span>各３時間制</span>
        <div className="flex items-center gap-2 pc:gap-8">
          <span className="border border-[#999] bg-white px-4 pc:px-8 py-4 u-text-12 leading-none">昼の部</span>
          <span>12:00〜15:00</span>
        </div>
        <div className="flex items-center gap-2 pc:gap-8">
          <span className="border border-[#999] bg-white px-4 pc:px-8 py-4 u-text-12 leading-none">夜の部</span>
          <span>17:00〜20:00</span>
        </div>
      </div>
    ),
  },
  {
    label: "ご利用期間",
    body: "一年中",
  },
  {
    label: "ご予約方法",
    body: (
      <>
        <p>「.SEEZN」LINE公式アカウントよりご利用日の2日前までに</p>
        <p>ご予約ください（対応時間 9:00〜19:00）</p>
      </>
    ),
  },
  {
    label: "お支払い方法",
    body: "・現金　・各種クレジットカード　・PayPay",
  },
];

const infoNavItems = [
  { href: "/bbq/faq/", en: "FAQ", ja: "よくあるご質問" },
  { href: "/bbq/use/", en: "Precautions for use", ja: "ご利用上の注意" },
  { href: "/bbq/use/#cancellation", en: "Cancellation policy", ja: "キャンセルポリシー" },
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
    pcSrc: "/media/images/bbq/1.webp?v=3",
    spSrc: "/media/images/bbq/1-sp.webp?v=3",
    alt: "ABOUT",
  },
  {
    key: "PLAN",
    pcSrc: "/media/images/bbq/2.webp?v=3",
    spSrc: "/media/images/bbq/2-sp.webp?v=3",
    alt: "PLAN",
  },
  {
    key: "SERVICE",
    pcSrc: "/media/images/bbq/3.webp?v=3",
    spSrc: "/media/images/bbq/3-sp.webp?v=3",
    alt: "SERVICE",
  },
  {
    key: "USE",
    pcSrc: "/media/images/bbq/4.webp?v=3",
    spSrc: "/media/images/bbq/4-sp.webp?v=3",
    alt: "USE",
  },
  {
    key: "ACCESS",
    pcSrc: "/media/images/bbq/5.webp?v=3",
    spSrc: "/media/images/bbq/5-sp.webp?v=3",
    alt: "ACCESS",
  },
];

const TITLES = [
  { key: "ABOUT", label: "USAGE FLOW" },
  { key: "PLAN", label: "PLAN" },
  { key: "SERVICE", label: "SERVICE" },
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
              willChange: "clip-path, mask-position, -webkit-mask-position",
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
          <h3 key={t.key} data-name={t.key} className="font-noto-serif absolute left-1/2 top-1/2 z-10 h-auto w-full -translate-x-1/2 text-center text-white u-text-56 opacity-0 [text-shadow:0_2px_8px_rgba(0,0,0,0.8),0_0_16px_rgba(0,0,0,0.5)]" style={{ opacity: 0, visibility: "hidden" }}>
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
    let lenis: import("lenis").default | undefined;
    let scrollFallback: (() => void) | undefined;

    const run = async () => {
      const gsapModule = await import("gsap");
      const stModule = await import("gsap/ScrollTrigger");
      const { default: Lenis } = await import("lenis");

      const gsap = gsapModule.gsap || gsapModule.default || gsapModule;
      const ScrollTrigger = stModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.config({ ignoreMobileResize: true });

      lenis = new Lenis({ duration: 1.2 });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis!.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      if (!pageRef.current) return;

      ctx = gsap.context(() => {
        const root = pageRef.current!;

        const bgWrap = root.querySelector<HTMLElement>('[data-name="wrap-kv-bgs"]');
        const ttlWrap = root.querySelector<HTMLElement>('[data-name="ttls-contents"]');
        const videoWrap = root.querySelector<HTMLElement>('[data-name="kv-video-wrap"]');

        if (!bgWrap || !ttlWrap || !videoWrap) return;

        const canBlur = !/iPhone|iPad|iPod/.test(navigator.userAgent);

        const orderKeys = BG_ITEMS.map((v) => v.key);

        const getLayer = (key: string) => {
          const img = bgWrap.querySelector<HTMLElement>(`img[data-name="${key}"]`);
          return img?.closest<HTMLElement>(".bg-picture") || null;
        };

        const getTitle = (key: string) => ttlWrap.querySelector<HTMLElement>(`h3[data-name="${key}"]`) || null;

        // =========================================================
        // 0) zoomPanel
        //   - 入場時: 上端が画面下から 1/3 まで来る間に scale=0.7 -> 1
        //   - 退場時: 下端が画面下から 1/3（= 画面上から 2/3）を越えたら scale=1 -> 0.7
        //   - 退場時の縮小は、下端が画面上に抜けるまで継続
        // =========================================================

        const zoomPanels = Array.from(root.querySelectorAll<HTMLElement>("[data-zoom-panel]"));

        if (zoomPanels.length) {
          const MIN = 0.7;
          const MAX = 1.0;

          const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
          const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

          const zoomPanelStates = zoomPanels.map((panel) => {
            const wrap = panel.closest<HTMLElement>("[data-zoom-panel-wrap]") || panel.parentElement || panel;

            // GSAP のトランスフォームキャッシュが React StrictMode の2回実行で
            // stale になる問題を避けるため、CSS を直接書き込む
            panel.style.transformOrigin = "50% 0%";
            panel.style.transform = `scale(${MIN})`;
            panel.style.willChange = "transform";

            return { panel, wrap, currentScale: -1, currentOrigin: "" };
          });

          const updateZoomPanels = () => {
            const vh = window.innerHeight || 1;
            const enterEnd = vh / 3;
            // 仕様: 退場は下端が画面上から 1/3 (= vh/3) を下回った時点から開始
            const leaveStart = vh / 3;

            zoomPanelStates.forEach((state) => {
              const { top, bottom } = state.wrap.getBoundingClientRect();
              let scale: number;
              let transformOrigin: string;

              if (top > enterEnd) {
                // 入場: 上端が画面下 → 画面上から 1/3
                const t = clamp(1 - (top - enterEnd) / (vh - enterEnd), 0, 1);
                scale = lerp(MIN, MAX, t);
                transformOrigin = "50% 0%";
              } else if (bottom > leaveStart) {
                // プラトー
                scale = MAX;
                transformOrigin = "50% 50%";
              } else {
                // 退場: 下端が画面上から 1/3 → 画面上端
                const t = clamp(1 - bottom / leaveStart, 0, 1);
                scale = lerp(MAX, MIN, t);
                transformOrigin = "50% 100%";
              }

              const roundedScale = Math.round(scale * 10000) / 10000;
              if (roundedScale === state.currentScale && transformOrigin === state.currentOrigin) return;

              state.currentScale = roundedScale;
              state.currentOrigin = transformOrigin;
              state.panel.style.transformOrigin = transformOrigin;
              state.panel.style.transform = `scale(${roundedScale})`;
            });
          };

          updateZoomPanels();

          ScrollTrigger.create({
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            invalidateOnRefresh: true,
            onUpdate: updateZoomPanels,
            onRefresh: updateZoomPanels,
          });

          // iOS Safari はネイティブ momentum scroll 中に ScrollTrigger が
          // 更新されないため、native scroll イベントでフォールバック
          scrollFallback = updateZoomPanels;
          window.addEventListener("scroll", scrollFallback, { passive: true });
        }

        // =========================================================
        // タイトル制御
        // =========================================================
        const titleEls = Array.from(ttlWrap.querySelectorAll<HTMLElement>("h3"));

        const hideAllTitlesNow = () => {
          gsap.killTweensOf(titleEls);
          gsap.set(titleEls, { autoAlpha: 0, y: 24, ...(canBlur && { filter: "blur(14px)" }) });
        };

        let activeTitleKey: string | null = null;

        const setTitleActive = (key: string | null) => {
          if (key === activeTitleKey) return;
          activeTitleKey = key;

          hideAllTitlesNow();

          if (!key) return;
          const el = getTitle(key);
          if (!el) return;

          gsap.fromTo(el, { autoAlpha: 0, y: 24, ...(canBlur && { filter: "blur(14px)" }) }, { autoAlpha: 1, y: 0, ...(canBlur && { filter: "blur(0px)" }), duration: 0.55, ease: "power2.out", overwrite: true });
        };

        hideAllTitlesNow();

        // =========================================================
        // 境目ぼかし（mask-03.webpは使用しない）
        // =========================================================
        const EDGE_BLUR = 72;

        const clearSoftEdge = (layer: HTMLElement) => {
          gsap.set(layer, {
            WebkitMaskImage: "",
            maskImage: "",
            WebkitMaskSize: "",
            maskSize: "",
            WebkitMaskPosition: "",
            maskPosition: "",
            WebkitMaskRepeat: "",
            maskRepeat: "",
            overwrite: true,
          });
        };

        const syncSoftEdgeToTopPct = (layer: HTMLElement, topPct: number) => {
          if (topPct <= 0 || topPct >= 100) {
            clearSoftEdge(layer);
            return;
          }

          const h = layer.offsetHeight || window.innerHeight || 0;
          if (!h) return;

          const edgeY = (topPct / 100) * h;

          gsap.set(layer, {
            WebkitMaskImage: `linear-gradient(to bottom, transparent 0px, #000 ${EDGE_BLUR}px, #000 100%)`,
            maskImage: `linear-gradient(to bottom, transparent 0px, #000 ${EDGE_BLUR}px, #000 100%)`,
            WebkitMaskSize: `100% ${h + EDGE_BLUR}px`,
            maskSize: `100% ${h + EDGE_BLUR}px`,
            WebkitMaskPosition: `0px ${edgeY}px`,
            maskPosition: `0px ${edgeY}px`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            overwrite: true,
          });
        };

        // =========================================================
        // レイヤー初期化
        // =========================================================
        const closeAllLayers = () => {
          orderKeys.forEach((k) => {
            const layer = getLayer(k);
            if (!layer) return;
            gsap.set(layer, { clipPath: "inset(100% 0% 0% 0%)" });
            clearSoftEdge(layer);
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
            scrub: 0.5,
            invalidateOnRefresh: true,

            onUpdate: (self) => {
              activeTitleKey = "ABOUT";

              const p = self.progress;
              gsap.set(videoWrap, { autoAlpha: 1 - p });

              const top = (1 - p) * 100;
              gsap.set(golfLayer, { clipPath: `inset(${top}% 0% 0% 0%)` });
              syncSoftEdgeToTopPct(golfLayer, top);

              titleEls.forEach((el) => {
                if (el.getAttribute("data-name") !== "ABOUT") {
                  gsap.set(el, { autoAlpha: 0, y: 24, ...(canBlur && { filter: "blur(14px)" }) });
                }
              });

              const tp = Math.max(0, (p - 0.25) / 0.75);
              const tEl = getTitle("ABOUT");
              if (tEl) {
                gsap.set(tEl, {
                  autoAlpha: tp,
                  ...(canBlur && { filter: `blur(${(1 - tp) * 14}px)` }),
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
              clearSoftEdge(golfLayer);
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
        });

        orderKeys.forEach((key, index) => {
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
            scrub: 0.5,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const p = self.progress;
              const top = gsap.utils.interpolate(100, 0, p);

              gsap.set(layer, {
                clipPath: `inset(${top}% 0% 0% 0%)`,
                overwrite: true,
              });
              syncSoftEdgeToTopPct(layer, top);
            },
          });

          ScrollTrigger.create({
            trigger: sec,
            start: "top 55%",
            end: "bottom 45%",
            invalidateOnRefresh: true,
            onEnter: () => setTitleActive(key),
            onLeaveBack: () => {
              const prevKey = orderKeys[index - 1] || null;
              setTitleActive(prevKey);
            },
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
                scrub: 0.5,
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
        lenis?.destroy();
        if (scrollFallback) window.removeEventListener("scroll", scrollFallback);
      } catch {
        // noop
      }
    };
  }, []);

  return (
    <LayoutBbq noindex title=".SEEZN (ドット シーズン)" description="群馬県高崎市の完全予約制アウトドアBBQ施設「.SEEZN（ドットシーズン）」公式ページ。準備・火起こし・片付け不要の手ぶらBBQプラン、各種肉コース、設備概要、利用方法と料金情報を掲載しています。ご家族・友人・団体利用まで対応可能な屋外バーベキューサービスの詳細はこちら。">
      <div ref={pageRef} className="">
        <KvBackground />

        {/* 動画区間 */}
        <section data-kvbg="VIDEO" className="relative min-h-screen">
          <h1 className="absolute top-1/2 left-1/2 -translate-1/2 z-1">
            <Image className="w-180 pc:w-424" src="/media/images/bbq/svg_seezn-logo.svg" alt="seezn（シーズン）" loading="lazy" width="424" height="106" />
          </h1>
        </section>

        {/* 画像区間 */}
        <section data-kvbg="ABOUT" className="min-h-screen mt-[100dvh] pt-[40dvh] overflow-x-hidden">
          <div data-zoom-panel-wrap>
            <div data-zoom-panel className="relative bg-white mx-auto px-20 py-80 pc:py-160 w-full origin-center z-[500]">
              <div className="mx-auto max-w-800">
                <div className="flex flex-col gap-80 pc:gap-160">
                  <div className="flex justify-center">
                    <p className="u-text-20 font-semibold font-yu-mincho leading-[2.4] text-center">
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
                  </div>

                  <div className="flex flex-col gap-30 pc:gap-60">
                    <SectionTitle title="Usage flow" subTitle="ご利用の流れ" />
                    <div className="relative bg-[#e2dfd3] px-12 py-20 pc:p-80">
                      <Image src="/media/images/bbq/svg-text.svg" alt="" width={760} height={100} className="absolute -top-32 pc:-top-48 -left-20 pc:-left-40 w-120 pc:w-240" />
                      <div className="mx-auto flex max-w-760 flex-col gap-12 pc:gap-16">
                        {usageFlowItems.map((item, index) => (
                          <div key={item.title} className="relative">
                            <div className="bg-white">
                              <div className="flex items-center justify-between bg-[#595757] px-12 pc:px-18 py-8 pc:py-12 text-white pc:px-24">
                                <h3 className="u-text-18 font-medium leading-none">{item.title}</h3>

                                <div className="flex items-center gap-x-8 u-text-14 leading-none">
                                  <span className="flex items-center gap-x-4">
                                    <Image src="/media/images/bbq/svg-sun.svg" alt="太陽アイコン" width={16} height={16} aria-hidden="true" />
                                    {item.dayTime}
                                  </span>
                                  <span>/</span>
                                  <span className="flex items-center gap-x-4">
                                    <Image src="/media/images/bbq/svg-moon.svg" alt="月アイコン" width={12} height={12} aria-hidden="true" />
                                    {item.nightTime}
                                  </span>
                                </div>
                              </div>

                              <div className="pc:min-h-72 px-12 pc:px-24 py-16 pc:py-28 u-text-16 leading-[1.7]">{item.body}</div>
                            </div>

                            {index !== usageFlowItems.length - 1 && <span aria-hidden="true" className="mx-auto mt-12 block h-0 w-0 border-x-[24px] border-t-[14px] border-x-transparent border-t-[#595757]" />}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-kvbg="PLAN" className="min-h-screen mt-[100dvh] pt-[100dvh]" id="plan">
          <div data-zoom-panel-wrap>
            <div data-zoom-panel className="relative bg-white mx-auto px-20 py-80 pc:py-160 w-full origin-center z-[500]">
              <div className="mx-auto max-w-800">
                <div className="flex flex-col gap-80 pc:gap-160">
                  <div className="flex flex-col gap-40 pc:gap-80">
                    <div className="flex justify-center">
                      <p className="u-text-20 font-semibold font-yu-mincho leading-[2.4] text-center">
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
                    </div>
                    <Image className="w-full" src="/media/images/bbq/img-001.webp" alt="プラン" loading="lazy" width={800} height={360} />
                  </div>
                  <div className="flex flex-col gap-30 pc:gap-60">
                    <SectionTitle title="Plan" subTitle="プランのご案内" />
                    <div className="bg-[#e2dfd3] px-12 pc:px-40 py-20 pc:py-56 flex flex-col gap-12 pc:gap-32">
                      <p className="u-text-18 text-center">
                        下記よりお一人様１コースご注文ください
                        <br />
                        <span className="u-text-14">（同グループでコースは統一いただきますようお願いします）</span>
                      </p>
                      <div className="grid grid-cols-2 gap-8 pc:gap-24">
                        {planItems.map((item) => (
                          <article key={item.number} className="bg-[#595757] px-6 pc:px-12 py-10 pc:py-20 text-white">
                            <div className="flex items-end gap-x-8 border-b border-white pb-4">
                              <span className="u-text-14 font-medium leading-none scale-y-[1.3]">{item.number}</span>
                              <h3 className="u-text-14 font-medium leading-none scale-y-[1.3]">{item.name}</h3>
                              <span className="u-text-12 font-medium leading-none">{item.kana}</span>
                            </div>

                            {item.image && <Image className="mt-12 h-auto w-full" src={item.image} alt={item.alt} width={433} height={195} />}

                            <p className="mt-8 pc:mt-12 u-text-12 font-medium leading-snug">{item.description}</p>

                            <div className="mt-8 pc:mt-12 flex items-center gap-x-4 pc:gap-x-8">
                              <p className="u-text-18 font-medium leading-none scale-y-[1.3]">{item.price}</p>

                              {item.campaignPrice && (
                                <>
                                  <span className="flex items-center gap-2" aria-hidden="true">
                                    <span className="block h-0 w-0 border-y-4 pc:border-y-8 border-l-3 pc:border-l-6 border-y-transparent border-l-orange" />
                                    <span className="block h-0 w-0 border-y-4 pc:border-y-8 border-l-3 pc:border-l-6 border-y-transparent border-l-orange" />
                                  </span>
                                  <div className="flex">
                                    <div className="bg-orange p-4 flex items-center">
                                      <span className="u-text-14 font-medium leading-none text-white">
                                        平日限定
                                        <br className="pc:hidden" />
                                        <span className="u-text-10">（5/10〜7/10まで）</span>
                                      </span>
                                    </div>
                                    <div className="bg-white self-stretch flex items-center justify-center p-4">
                                      <span className="block u-text-18 text-orange font-semibold leading-none scale-y-[1.3]">{item.campaignPrice}</span>
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-kvbg="SERVICE" className="min-h-screen mt-[100dvh] pt-[100dvh]" id="service">
          <div data-zoom-panel-wrap>
            <div data-zoom-panel className="relative bg-white mx-auto px-20 py-80 pc:py-160 w-full origin-center z-[500]">
              <div className="mx-auto max-w-800">
                <div className="flex flex-col gap-80 pc:gap-160">
                  <div className="flex flex-col gap-30 pc:gap-60">
                    <SectionTitle title="Our service" subTitle="サービス内容" />
                    <div className="bg-[#e2dfd3] px-16 pc:px-40 py-32 pc:py-56 flex flex-col gap-56">
                      <div className="flex flex-col gap-16 pc:gap-24">
                        <p className="u-text-20 text-center">
                          無料サービス
                          <br />
                          <span className="u-text-16">（料金に含まれるもの）</span>
                        </p>
                        <div className="bg-[#e2dfd3]">
                          <div className="grid grid-cols-3 max-pc:grid-cols-6 gap-2">
                            {serviceInfoItems.map((item, i) => (
                              <article key={i} className={`flex max-pc:w-full min-h-100 pc:min-h-220 flex-col justify-center p-8 pc:p-24 ${item.className}`}>
                                <h3 className="whitespace-pre-line text-center u-text-16 font-bold leading-[1.5]">{item.title}</h3>

                                {item.text && <p className="mt-12 pc:mt-16 u-text-14 font-medium leading-[1.6]">{item.text}</p>}

                                {item.note && <p className="mt-8 pc:mt-14 u-text-12 font-medium leading-[1.6]">{item.note}</p>}
                              </article>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-12 pc:gap-24">
                        <p className="u-text-20 text-center">
                          有料サービス
                          <br />
                          <span className="u-text-16">（要予約）</span>
                        </p>
                        <div className="px-16 pc:px-40 py-16 pc:py-24 bg-white">
                          <div className="divide-y divide-[#c9c9c9]">
                            {optionItems.map((item) => (
                              <div key={item.label} className="flex flex-col gap-8 py-12 pc:py-20 pc:flex-row pc:items-center pc:justify-between">
                                <div className="shrink-0 flex flex-col gap-4 pc:gap-8">
                                  <p className="u-text-18 font-bold leading-none">{item.label}</p>
                                  <p className="u-text-14 font-medium leading-[1.2]">{item.text}</p>
                                </div>

                                {item.price && (
                                  <div className="flex flex-col items-end gap-4 pc:flex-row pc:items-baseline pc:gap-8">
                                    <div className="flex items-center gap-4">
                                      {item.pricePrefix && <span className="u-text-14 font-medium leading-none">{item.pricePrefix}</span>}
                                      <span className="inline-block scale-y-[1.3] u-text-18 font-bold leading-none">{item.price}</span>
                                    </div>
                                    {(item.priceSubPrefix || item.priceSub) && (
                                      <div className="flex items-center gap-4">
                                        {item.priceSubPrefix && <span className="u-text-14 font-medium leading-none">{item.priceSubPrefix}</span>}
                                        {item.priceSub && <span className="inline-block scale-y-[1.3] u-text-18 font-bold leading-none">{item.priceSub}</span>}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-kvbg="USE" className="min-h-screen mt-[100dvh] pt-[100dvh] overflow-hidden" id="howTo">
          <div data-zoom-panel-wrap>
            <div data-zoom-panel className="relative bg-white mx-auto px-20 py-80 pc:py-160 w-full origin-center z-[500]">
              <div className="mx-auto max-w-800">
                <div className="flex flex-col gap-80 pc:gap-160">
                  <div className="flex flex-col gap-30 pc:gap-60">
                    <SectionTitle title="How to use" subTitle="ご利用方法" />
                    <div className="bg-[#e2dfd3] px-12 pc:px-20 py-24 pc:py-40 pc:px-56 pc:py-64">
                      <div className="">
                        {facilityInfoItems.map((item) => (
                          <div key={item.label} className="grid grid-cols-[72rem_1fr] pc:grid-cols-[140rem_1fr] gap-8 pc:gap-32 py-10 pc:py-20 items-center border-b border-[#999]">
                            <div className="flex items-center justify-center bg-[#595757] p-8 pc:p-12">
                              <p className="u-text-14 font-bold leading-none text-white">{item.label}</p>
                            </div>

                            <div className="u-text-14 font-medium leading-[1.9]">{item.body}</div>
                          </div>
                        ))}
                      </div>

                      <ul className="mt-24 pc:mt-32 u-text-14 font-medium leading-[1.8]">
                        <li>※大人と就学児混合の場合はご予約時にご相談ください。</li>
                        <li>※貸切のご利用については事前にご相談ください。</li>
                        <li>※利用時間の延長に関しては事前にお問い合わせください。</li>
                        <li>※毎月不定期で施設メンテナンスを行います。</li>
                        <li>※ご予約時、キャンセルポリシー及びご利用上の注意点のご確認を頂きます。</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-kvbg="ACCESS" className="min-h-screen mt-[100dvh] pt-[100dvh] overflow-hidden" id="access">
          <div data-zoom-panel-wrap>
            <div data-zoom-panel className="relative bg-white mx-auto px-20 pt-80 pb-100 pc:py-160 w-full origin-center z-[500]">
              <div className="mx-auto max-w-800">
                <div className="flex flex-col gap-32 pc:gap-64">
                  <SectionTitle title="Access" subTitle="アクセス" />
                  <div className="flex flex-col gap-24">
                    <div className="relative w-full aspect-[21/9] overflow-hidden bg-black">
                      <iframe className="block absolute inset-0 w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d803.2535577151344!2d139.00051819162854!3d36.36043418841604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601e8d6815b66347%3A0x71c9c76e08971014!2sSEEZN!5e0!3m2!1sja!2sjp!4v1680838139644!5m2!1sja!2sjp" width="800" height="600" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="seeznの地図"></iframe>
                    </div>

                    <Image className="w-full" src="/media/images/bbq/svg-map.svg" alt="地図" width={16} height={16} aria-hidden="true" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 pc:gap-24">
                    {infoNavItems.map((item) => (
                      <Link key={item.href} className="h-64 pc:h-80 px-8 pc:px-16 bg-off-white border border-black flex justify-between items-center gap-x-8 pc:gap-x-16" href={item.href}>
                        <div className="flex flex-col gap-8">
                          <span className="u-text-16 font-noto-serif font-medium leading-none">{item.en}</span>
                          <span className="u-text-12 font-medium leading-none">{item.ja}</span>
                        </div>
                        <Image className="w-8 pc:w-12" src="/media/images/bbq/svg_double-arrow-right.svg" alt="ダブルアロー" loading="lazy" width={23} height={32} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BannerReservation />
        <BannerBusiness />
      </div>
    </LayoutBbq>
  );
}
