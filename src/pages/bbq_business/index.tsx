// src/pages/bbq_business/index.tsx
import { LayoutBbqBusiness } from "@/components/LayoutBbqBusiness";
import { ReservationBtn } from "@/components/ReservationBtn";
import Image from "next/image";
import Link from "next/link";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useState } from "react";
import type SplideCore from "@splidejs/splide";

const bannerItems = [
  {
    src: "/media/images/bbq/gallery15.webp",
    alt: "始まる前から盛り上がる。",
  },
  {
    src: "/media/images/bbq/gallery14.webp",
    alt: "イベントも、BBQも。",
  },
  {
    src: "/media/images/bbq/gallery13.webp",
    alt: "自然と会話が生まれる場所。",
  },
  {
    src: "/media/images/bbq/gallery12.webp",
    alt: "この人数でも、ちゃんと回る。",
  },
  {
    src: "/media/images/bbq/gallery11.webp",
    alt: "全員そろって、乾杯。",
  },
];

export default function BbqBusiness() {
  const splideRef = useRef<{ splide: SplideCore } | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <LayoutBbqBusiness title="企業・団体向けBBQ｜.SEEZN（ドット シーズン）" description="歓送迎会・納涼祭・親睦会・チームビルディングなど、企業・団体向けBBQのご案内。準備・火起こし・ゴミ捨て不要、最大200名まで対応。">
      <main className="relative pb-60 pc:pb-160">
        {/* KV */}
        <section className="relative pb-32 pc:pb-168">
          <div className="relative">
            <Image className="w-full" src="/media/images/bbq_business/kv2.webp" alt="キーヴィジュアル" width={1929} height={844} priority />
            {/* フェード白グラデ */}
            {/* <div className="pointer-events-none absolute bottom-115 left-0 right-0 h-120 pc:h-240 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_50%)]" /> */}
            {/* 黒帯コピー */}
            {/* <div className="absolute bottom-[15%] pc:bottom-auto pc:top-[60%] bg-[#000] w-full h-56 pc:h-130 flex justify-center items-center">
              <p className="text-14 pc:text-28 font-bold text-white text-center">
                歓送迎会・納涼祭・親睦会・チームビルディングなど
                <br className="pc:hidden" />
                カジュアルに様々なシーンでご活用いただいております！
              </p>
            </div> */}
          </div>

          <div className="max-pc:hidden max-w-1600 mx-auto">
            <Image className="relative -mt-440 w-full" src="/media/images/bbq_business/bbq_business_pc01.svg" alt="団体限定プラン" width={1929} height={844} priority />
            <Image className="mt-80 ml-60 w-1300" src="/media/images/bbq_business/bbq_business_pc02.webp" alt="団体限定プラン" width={1929} height={844} priority />
            <Image className="mt-32 w-full" src="/media/images/bbq_business/bbq_business_pc02.svg" alt="団体限定プラン" width={1929} height={844} priority />
          </div>

          <div className="pc:hidden">
            <Image className="relative -mt-120 w-full" src="/media/images/bbq_business/bbq_business_sp01.svg" alt="団体限定プラン" width={1929} height={844} priority />
            <Image className="w-full" src="/media/images/bbq_business/bbq_business_sp02.webp" alt="団体限定プラン" width={1929} height={844} priority />
            <Image className="mt-32 w-full" src="/media/images/bbq_business/bbq_business_sp02.svg" alt="団体限定プラン" width={1929} height={844} priority />
          </div>

          {/* 円形ポイント */}
          {/* <div className="-mt-16 pc:mt-0 pc:absolute pc:top-[64%] w-full flex justify-center items-center flex-col pc:flex-row gap-x-40 gap-y-16">
            <div className="relative w-335 pc:w-400 h-96 pc:h-400 bg-[#D7D5B7] pc:rounded-full flex justify-center items-center flex-col">
              <div className="absolute top-1/2 left-1/2 -translate-1/2 w-325 pc:w-360 h-86 pc:h-360 border border-white pc:rounded-full" />
              <div className="text-center">
                <p className="text-18 pc:text-28 font-bold inline bg-[linear-gradient(transparent_70%,#F2B017_70%,#F2B017_90%,transparent_90%)]">
                  幹事様の負担を
                  <br className="hidden pc:block" />
                  最小限に！
                </p>
                <p className="mt-4 pc:mt-24 text-14 pc:text-20 font-medium text-center">
                  準備・火おこし・ゴミ捨て不要！
                  <br />
                  肉セット・消耗品・調理器具
                  <br className="hidden pc:block" />
                  は全てご用意！
                </p>
              </div>
            </div>

            <div className="relative w-335 pc:w-400 h-96 pc:h-400 bg-[#D7D5B7] pc:rounded-full flex justify-center items-center flex-col">
              <div className="absolute top-1/2 left-1/2 -translate-1/2 w-325 pc:w-360 h-86 pc:h-360 border border-white pc:rounded-full" />
              <div className="text-center">
                <p className="text-18 pc:text-28 font-bold inline bg-[linear-gradient(transparent_70%,#F2B017_70%,#F2B017_90%,transparent_90%)]">社員満足度UP！</p>
                <p className="mt-4 pc:mt-40 text-14 pc:text-20 font-medium text-center">
                  開放的な空間でのBBQは
                  <br />
                  質の高いコミュニケーション
                  <br className="hidden pc:block" />
                  の場になります
                </p>
              </div>
            </div>
          </div> */}

          {/* ロゴ */}
          <h1 className="absolute top-24 pc:top-40 left-24 pc:left-40">
            <Image className="w-120 pc:w-286" src="/media/images/bbq/svg_seezn-logo.svg" alt="seezn（シーズン）" width={424} height={106} priority />
          </h1>
        </section>

        <section className="pb-40 pc:pb-80">
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
        </section>

        {/* Services */}
        <section id="service" className="bg-[#E2DFD3] pt-64 pb-40 pc:pb-80">
          <div className="px-20">
            <div className="mx-auto max-w-1220">
              <div className="flex items-end gap-x-16">
                <p className="text-28 pc:text-40 font-medium font-noto-serif leading-none">Our service</p>
                <h2 className="text-15 pc:text-17 font-medium leading-none">サービス内容</h2>
              </div>

              <div className="mt-40 grid grid-cols-2 lg:grid-cols-3 gap-16 pc:gap-32">
                <div className="bg-white py-16 px-10 pc:p-28 flex justify-between items-center flex-col">
                  <p className="text-14 pc:text-32 font-noto-serif text-light-gray text-center">Empty-handed OK!</p>
                  <Image className="mt-20 w-60 pc:w-131" src="/media/images/bbq/svg_service01.svg" alt="BBQに必要な道具、消耗品は全てご用意" width={131} height={119} />
                  <p className="mt-20 text-10 pc:text-18 font-noto-serif font-medium text-center">
                    BBQに必要な道具、消耗品は
                    <br />
                    全て取り揃えてございます
                  </p>
                </div>

                <div className="bg-white py-16 px-10 pc:p-28 flex justify-between items-center flex-col">
                  <p className="text-14 pc:text-32 font-noto-serif text-light-gray text-center">
                    Fully equipped
                    <br />
                    facilities
                  </p>
                  <Image className="mt-20 w-100 pc:w-225" src="/media/images/bbq/svg_service02.svg" alt="各ブース毎にシンク・調理台設置" width={225} height={86} />
                  <p className="mt-20 text-10 pc:text-18 font-noto-serif font-medium text-center">
                    各ブース毎に
                    <br />
                    シンク、調理台設置
                  </p>
                </div>

                <div className="bg-white py-16 px-10 pc:p-28 flex justify-between items-center flex-col">
                  <p className="text-14 pc:text-32 font-noto-serif text-light-gray text-center">
                    No preparation
                    <br />
                    required
                  </p>
                  <Image className="mt-20 w-50 pc:w-99" src="/media/images/bbq/svg_service03.svg" alt="準備・火起こしはスタッフ対応" width={99} height={99} />
                  <p className="mt-20 text-10 pc:text-18 font-noto-serif font-medium text-center">
                    準備、火おこしは
                    <br />
                    スタッフが行います
                  </p>
                </div>

                <div className="relative bg-white py-16 px-10 pc:p-28 flex justify-between items-center flex-col">
                  <p className="text-14 pc:text-32 font-noto-serif text-light-gray text-center">
                    All courses include
                    <br />a set of meat
                  </p>
                  <Image className="mt-20 w-50 pc:w-104" src="/media/images/bbq/svg_service04.svg" alt="お肉のセットが含まれています" width={104} height={99} />
                  <p className="mt-20 text-10 pc:text-18 font-noto-serif font-medium text-center">
                    全てのコースに
                    <br />
                    お肉のセットが含まれています
                  </p>
                  <p className="mt-8 text-10 pc:text-14 font-medium font-noto-serif -indent-[1em] pl-[1em]">※お飲み物、野菜、海鮮、焼きそばなどの 販売は致しておりません。</p>
                </div>

                <div className="bg-white py-16 px-10 pc:p-28 flex justify-between items-center flex-col">
                  <p className="text-14 pc:text-32 font-noto-serif text-light-gray text-center">Free to leave</p>
                  <Image className="mt-20 w-60 pc:w-132" src="/media/images/bbq/svg_service05.svg" alt="終了後はそのまま帰れます" width={132} height={58} />
                  <p className="mt-20 text-10 pc:text-18 font-noto-serif font-medium text-center">
                    BBQ終了後は
                    <br />
                    そのままお帰りいただけます
                  </p>
                </div>

                <div className="relative bg-white py-16 px-10 pc:p-28 flex justify-between items-center flex-col">
                  <p className="text-14 pc:text-32 font-noto-serif text-light-gray text-center">
                    No need to take
                    <br />
                    trash home
                  </p>
                  <Image className="mt-20 w-100 pc:w-216" src="/media/images/bbq/svg_service06.svg" alt="洗い物・ゴミ処理もスタッフ対応" width={216} height={99} />
                  <p className="mt-20 text-10 pc:text-18 font-noto-serif font-medium text-center">
                    洗い物、ゴミの処理等は
                    <br />
                    スタッフが行います
                  </p>
                  <p className="mt-8 text-10 pc:text-14 font-medium font-noto-serif -indent-[1em] pl-[1em]">※ゴミの分別はお願いしております。</p>
                </div>
              </div>

              {/* 無料サービス */}
              <div className="mt-64 pc:mt-134 bg-white p-24 pc:p-44">
                <h3 className="text-20 pc:text-25 font-noto-serif font-semibold text-center">無料サービス</h3>
                <p className="mt-16 pc:mt-24 text-14 pc:text-22 font-noto-serif font-medium">・炭・網・トング・氷（ドリンク用）・皿・プラコップ・ペーパータオル・割りばし・キッチンはさみ・包丁・まな板 ・使い捨て鉄板(焼きそば用) ・タレ・塩コショウ・調理用油・ゴミ袋</p>
                <p className="mt-16 text-10 pc:text-18 font-medium font-noto-serif -indent-[1em] pl-[1em]">※氷に関して：1日にご用意できる容量が決まっておりますので、それを超える使用量の場合、近隣スーパーで自費での購入をお願いしております。</p>
              </div>

              <Link className="mt-32 pc:mt-64 mx-auto w-320 pc:w-560 h-80 px-24 pc:h-118 bg-off-white border border-solid border-black flex justify-center items-center gap-x-24" href="/bbq/faq/">
                <div className="flex items-center gap-x-16">
                  <span className="text-26 pc:text-32 font-noto-serif font-medium leading-none">FAQ</span>
                  <span className="text-16 pc:text-18 font-medium leading-none">よくあるご質問</span>
                </div>
                <Image className="w-16 pc:w-23" src="/media/images/bbq/svg_double-arrow-right.svg" alt="ダブルアロー" width={23} height={32} />
              </Link>
            </div>
          </div>
        </section>

        {/* PLAN */}
        <section className="bg-white pt-40 pc:pt-80" id="plan">
          <div className="px-20">
            <div className="mx-auto max-w-1220">
              <div className="flex gap-x-20 pc:gap-x-32 pc:pt-64">
                <div className="max-pc:hidden flex-1">
                  <Image className="w-full" src="/media/images/bbq/plan01.webp" alt="プラン" width={590} height={590} />
                </div>

                <div className="w-full pc:w-768 relative">
                  <div className="pc:absolute pc:-top-24 pc:-translate-y-full flex items-end gap-x-16">
                    <p className="text-28 pc:text-40 font-medium font-noto-serif leading-none">PLAN</p>
                    <h2 className="text-15 pc:text-17 font-medium leading-none">プラン</h2>
                  </div>

                  <p className="mt-24 pc:mt-0 text-18 pc:text-25 font-noto-serif font-semibold">
                    【大人用コース】
                    <span className="text-14 pc:text-20"> ※18歳以上</span>
                  </p>

                  {/* 大人用 4コース */}
                  <div className="mt-12 pc:mt-24 grid pc:grid-cols-2 gap-8">
                    {/* A */}
                    <div className="flex flex-col">
                      <div className="relative">
                        <div className="absolute pc:relative -top-4 pc:top-auto -left-12 pc:left-auto w-80 pc:w-full h-80 pc:h-48 rounded-full pc:rounded-none bg-orange flex justify-center items-center">
                          <p className="text-16 pc:text-20 text-center text-white font-medium leading-[1.3] pt-[0.1em]">
                            コスパ
                            <br className="pc:hidden" />
                            重視
                          </p>
                        </div>
                        <div className="h-72 pc:h-96 bg-[#FFDC96] pl-80 py-8 pr-12 pc:p-16 flex items-center rounded-tl-16 pc:rounded-tl-none">
                          <p className="text-14 pc:text-16 font-medium leading-[1.3] pt-[0.1em]">最もリーズナブル。お肉は一人前300gで、追加の買い出しが少なく済みます！</p>
                        </div>
                      </div>
                      <div className="flex-1 bg-silver-gray px-12 py-16 pc:p-16  flex pc:flex-col gap-x-8 pc:gap-x-24">
                        <div className="shrink-0 flex items-center gap-x-8 pc:gap-x-16 pr-8 pc:pr-0 border-r pc:border-r-0 pc:border-b border-solid border-white pc:pb-12">
                          <div className="flex items-center justify-center shrink-0 w-24 pc:w-32 aspect-square bg-black">
                            <span className="text-16 pc:text-24 font-noto-serif font-medium text-white">A</span>
                          </div>
                          <span className="text-20 pc:text-32 font-noto-serif font-medium leading-none">
                            ¥3,800<span className="text-10 pc:text-14">（税込）</span>
                          </span>
                        </div>
                        <div className="pc:mt-12 flex flex-col gap-y-4">
                          <p className="text-14 pc:text-16 font-noto-serif font-medium">牛ステーキ 150g</p>
                          <p className="text-14 pc:text-16 font-noto-serif font-medium">ハーブチキン 150g</p>
                        </div>
                      </div>
                    </div>

                    {/* B */}
                    <div className="flex flex-col">
                      <div className="relative">
                        <div className="absolute pc:relative -top-4 pc:top-auto -left-12 pc:left-auto w-80 pc:w-full h-80 pc:h-48 rounded-full pc:rounded-none bg-orange flex justify-center items-center">
                          <p className="text-16 pc:text-20 text-center text-white font-medium leading-[1.3] pt-[0.1em]">
                            自由度
                            <br className="pc:hidden" />
                            重視
                          </p>
                        </div>
                        <div className="h-72 pc:h-96 bg-[#FFDC96] pl-80 py-8 pr-12 pc:p-16 flex items-center rounded-tl-16 pc:rounded-tl-none">
                          <p className="text-14 pc:text-16 font-medium leading-[1.3] pt-[0.1em]">Aコースより牛肉の品質グレードアップ。150gで他食材との組み合わせがしやすい！</p>
                        </div>
                      </div>
                      <div className="flex-1 bg-silver-gray px-12 py-16 pc:p-16  flex pc:flex-col gap-x-8 pc:gap-x-24">
                        <div className="shrink-0 flex items-center gap-x-8 pc:gap-x-16 pr-8 pc:pr-0 border-r pc:border-r-0 pc:border-b border-solid border-white pc:pb-12">
                          <div className="flex items-center justify-center shrink-0 w-24 pc:w-32 aspect-square bg-black">
                            <span className="text-16 pc:text-24 font-noto-serif font-medium text-white">B</span>
                          </div>
                          <span className="text-20 pc:text-32 font-noto-serif font-medium leading-none">
                            ¥3,800<span className="text-10 pc:text-14">（税込）</span>
                          </span>
                        </div>
                        <div className="pc:mt-12 pc:-mx-6 flex items-center gap-x-4">
                          <p className="text-14 pc:text-16 font-noto-serif font-medium">国産A4和牛ステーキ 150g</p>
                        </div>
                      </div>
                    </div>

                    {/* C */}
                    <div className="flex flex-col">
                      <div className="relative">
                        <div className="absolute pc:relative -top-4 pc:top-auto -left-12 pc:left-auto w-80 pc:w-full h-80 pc:h-48 rounded-full pc:rounded-none bg-orange flex justify-center items-center">
                          <p className="text-16 pc:text-20 text-center text-white font-medium leading-[1.3] pt-[0.1em]">
                            満足度
                            <br className="pc:hidden" />
                            重視
                          </p>
                        </div>
                        <div className="h-72 pc:h-96 bg-[#FFDC96] pl-80 py-8 pr-12 pc:p-16 flex items-center rounded-tl-16 pc:rounded-tl-none">
                          <p className="text-14 pc:text-16 font-medium leading-[1.3] pt-[0.1em]">量も品質もアップ。美味しいお肉をたっぷり楽しみたい方に！</p>
                        </div>
                      </div>
                      <div className="flex-1 bg-silver-gray px-12 py-16 pc:p-16  flex pc:flex-col gap-x-8 pc:gap-x-24">
                        <div className="shrink-0 flex items-center gap-x-8 pc:gap-x-16 pr-8 pc:pr-0 border-r pc:border-r-0 pc:border-b border-solid border-white pc:pb-12">
                          <div className="flex items-center justify-center shrink-0 w-24 pc:w-32 aspect-square bg-black">
                            <span className="text-16 pc:text-24 font-noto-serif font-medium text-white">C</span>
                          </div>
                          <span className="text-20 pc:text-32 font-noto-serif font-medium leading-none">
                            ¥4,500<span className="text-10 pc:text-14">（税込）</span>
                          </span>
                        </div>
                        <div className="pc:mt-12 flex flex-col gap-y-4">
                          <div className="pc:-mx-6 flex items-center gap-x-4">
                            <p className="text-14 pc:text-16 font-noto-serif font-medium">国産A4和牛ステーキ 150g</p>
                          </div>
                          <div className="pc:-mx-6 flex items-center gap-x-4">
                            <p className="mt-4 text-14 pc:text-16 font-noto-serif font-medium">ハーブチキン 150g</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* D */}
                    <div className="flex flex-col">
                      <div className="relative">
                        <div className="absolute pc:relative -top-4 pc:top-auto -left-12 pc:left-auto w-80 pc:w-full h-80 pc:h-48 rounded-full pc:rounded-none bg-orange flex justify-center items-center">
                          <p className="text-16 pc:text-20 text-center text-white font-medium leading-[1.3] pt-[0.1em]">
                            充実度
                            <br className="pc:hidden" />
                            重視
                          </p>
                        </div>
                        <div className="h-72 pc:h-96 bg-[#FFDC96] pl-80 py-8 pr-12 pc:p-16 flex items-center rounded-tl-16 pc:rounded-tl-none">
                          <p className="text-14 pc:text-16 font-medium leading-[1.3] pt-[0.1em]">海鮮好きにおすすめ。6点刺し海鮮串＋チキンでボリューム満点！</p>
                        </div>
                      </div>
                      <div className="flex-1 bg-silver-gray px-12 py-16 pc:p-16  flex pc:flex-col gap-x-8 pc:gap-x-24">
                        <div className="shrink-0 flex items-center gap-x-8 pc:gap-x-16 pr-8 pc:pr-0 border-r pc:border-r-0 pc:border-b border-solid border-white pc:pb-12">
                          <div className="flex items-center justify-center shrink-0 w-24 pc:w-32 aspect-square bg-black">
                            <span className="text-16 pc:text-24 font-noto-serif font-medium text-white">D</span>
                          </div>
                          <span className="text-20 pc:text-32 font-noto-serif font-medium leading-none">
                            ¥4,200<span className="text-10 pc:text-14">（税込）</span>
                          </span>
                        </div>
                        <div className="pc:mt-12 flex flex-col gap-y-4">
                          <div className="pc:-mx-6 flex items-center gap-x-4">
                            <p className="text-14 pc:text-16 font-noto-serif font-medium">ハーブチキン 150g</p>
                          </div>
                          <div className="pc:-mx-6 flex items-center gap-x-4">
                            <p className="mt-4 text-14 pc:text-16 font-noto-serif font-medium">海鮮串・エビ・ホタテ 各1個</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-8 -indent-[1em] pl-[1em] text-14 pc:text-19 text-red font-noto-serif font-medium">※各コース共に焼きそばや野菜、お飲み物などは含まれておりません。</p>

                  {/* 子供用コース */}
                  <div className="relative mt-16 py-32 pc:pb-0 border-t border-b pc:border-b-0 border-solid border-black">
                    <p className="text-18 pc:text-25 font-noto-serif font-semibold">
                      【子供用コース】
                      <span className="text-14 pc:text-20"> ※小学生以上高校卒業まで</span>
                    </p>
                    <div className="mt-12 pc:mt-24 bg-silver-gray py-16 pc:py-20 px-16 pc:px-64">
                      <div className="flex items-center gap-x-8 pc:gap-x-32">
                        <span className="text-20 pc:text-32 font-noto-serif font-medium leading-none">
                          ¥2,500<span className="text-10 pc:text-14">（税込）</span>
                        </span>
                        <div className="h-32 pc:h-52 w-[1px] bg-white" />
                        <p className="text-14 pc:text-16 font-noto-serif font-medium">牛ステーキ 150g</p>
                      </div>
                    </div>
                    <p className="mt-16 pc:mt-0 pc:absolute pc:top-38 pc:right-0 text-14 pc:text-19 font-noto-serif font-medium">未就学児のご利用は無料　※お肉なし</p>
                  </div>
                </div>
              </div>

              {/* テキスト */}
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

              {/* 紹介アイテム */}
              <div className="mt-32 pc:mt-64">
                <div className="grid md:grid-cols-2 gap-16">
                  {/* 1 */}
                  <div className="relative flex">
                    <div className="grow bg-silver-gray p-16 pc:p-32 flex-1 flex flex-col justify-center">
                      <p className="text-16 pc:text-20 font-noto-serif font-bold">国産A4和牛ステーキ 150g</p>
                      <div className="mt-12">
                        <p className="text-12 pc:text-16 font-noto-serif font-medium">ほどよい霜降りの希少部位であるランプ・イチボの厚切りステーキ</p>
                      </div>
                    </div>
                    <div className="relative w-160 pc:w-320">
                      <Image className="w-full h-full object-cover" src="/media/images/bbq/meat01.webp" alt="国産A4和牛ステーキ" width={474} height={441} />
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="relative flex">
                    <div className="grow bg-silver-gray p-16 pc:p-32 flex-1 flex flex-col justify-center">
                      <p className="text-16 pc:text-23 font-noto-serif font-bold">牛ステーキ 150g</p>
                      <p className="mt-12 text-12 pc:text-18 font-noto-serif font-medium">脂身が少なく、柔らかい、年齢問わず大人気の部位</p>
                    </div>
                    <div className="relative w-160 pc:w-320">
                      <Image className="w-full h-full object-cover" src="/media/images/bbq/meat02.webp" alt="牛ステーキ" width={474} height={441} />
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="relative flex">
                    <div className="grow bg-silver-gray p-16 pc:p-32 flex-1 flex flex-col justify-center">
                      <p className="text-16 pc:text-23 font-noto-serif font-bold">ハーブチキン 150g</p>
                      <p className="mt-12 text-12 pc:text-18 font-noto-serif font-medium">オリジナルブレンドのハーブで味付けした自家製のチキン。焼いてそのままお召し上がりいただけます</p>
                    </div>
                    <div className="relative w-160 pc:w-320">
                      <Image className="w-full h-full object-cover" src="/media/images/bbq/meat03.webp" alt="ハーブチキン" width={474} height={441} />
                    </div>
                  </div>
                  {/* 4 */}
                  <div className="relative flex">
                    <div className="grow bg-silver-gray p-16 pc:p-32 flex-1 flex flex-col justify-center">
                      <p className="text-16 pc:text-23 font-noto-serif font-bold">
                        海鮮串　1串
                        <br />
                        エビ　　1尾
                        <br />
                        ホタテ　1個
                      </p>
                      <p className="mt-12 text-12 pc:text-18 font-noto-serif font-medium">北海道産ホタテ（バター付）、L2サイズエビ、6点刺しの海鮮串でボリューム満点！</p>
                    </div>
                    <div className="relative w-160 pc:w-320">
                      <Image className="w-full h-full object-cover" src="/media/images/bbq/kaisen.webp" alt="海鮮セット" width={474} height={441} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ビールサーバー */}
        <section className="mt-64 px-22">
          <div className="mx-auto max-w-1200">
            <div className="relative pt-32 pc:pt-40 pb-24 pc:pb-32 px-24 pc:px-32 flex flex-col justify-center items-center pc:items-end aspect-[3/4] pc:aspect-[972/378] bg-[url('/media/images/bbq/beer.webp')] bg-cover bg-center">
              <div className="pc:hidden absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
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
                  <span className="text-18 pc:text-24">（1本）</span> <span className="text-28 pc:text-34 tracking-[0.05em]">¥5,000</span>
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
        </section>

        {/* ご利用方法 */}
        <section className="mt-64 relative" id="howTo">
          <div className="px-20">
            <div className="mx-auto max-w-1220">
              <div className="flex items-start flex-col pc:flex-row gap-x-48 gap-y-40">
                <Image className="-mx-24 max-w-[100vw] w-[calc(100%_+_48rem)] pc:w-590" src="/media/images/bbq/howto01.webp" alt="ご利用方法" width={589} height={590} />
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
                        <p className="text-14 pc:text-16 font-noto-serif font-semibold">最大人数：200名様</p>
                        <p className="mt-8 -indent-[1em] pl-[1em] text-10 pc:text-18 font-noto-serif font-medium">
                          ※40名様以上より貸切可能です。
                          <br />
                          <span className="text-red">ご予約時に申請必須</span>
                          となっております。
                          <br />
                          40名未満の場合、貸切料金が発生いたします。
                          <br />
                          平日￥15,000/土日祝￥30,000
                        </p>
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
                        <p className="mt-8 -indent-[1em] pl-[1em] text-10 pc:text-18 font-noto-serif font-medium">※利用時間の延長に関しては事前にお問い合わせください。</p>
                      </dd>
                    </dl>

                    <dl className="flex gap-x-16">
                      <dt className="w-120 pc:w-180">
                        <span className="text-14 pc:text-16 font-noto-serif font-semibold">【ご利用期間】</span>
                      </dt>
                      <dd className="flex-1">
                        <p className="text-14 pc:text-16 font-noto-serif font-semibold">年中営業</p>
                        <p className="mt-8 -indent-[1em] pl-[1em] text-10 pc:text-18 font-noto-serif font-medium">※毎月不定期で施設メンテナンスを行います。</p>
                      </dd>
                    </dl>

                    <dl className="flex gap-x-16">
                      <dt className="w-120 pc:w-180">
                        <span className="text-14 pc:text-16 font-noto-serif font-semibold">【ご予約方法】</span>
                      </dt>
                      <dd className="flex-1">
                        <p className="text-14 pc:text-16 font-noto-serif font-semibold">「.SEEZN」LINE公式アカウントよりご利用日の2日前までにご予約ください（対応時間 9:00～19:00）</p>
                        <p className="mt-8 -indent-[1em] pl-[1em] text-10 pc:text-18 font-noto-serif font-medium">※ご予約時、キャンセルポリシー及びご利用上の注意点のご確認を頂きます。</p>
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

              <Link className="mt-32 pc:mt-64 mx-auto w-320 pc:w-560 h-80 px-16 pc:px-24 pc:h-118 bg-off-white border border-solid border-black flex justify-center items-center gap-x-16 pc:gap-x-24" href="/bbq/use/">
                <div className="flex items-center gap-x-8 pc:gap-x-16">
                  <span className="text-16 pc:text-32 font-noto-serif font-medium leading-none">Precautions for use</span>
                  <span className="mt-3 pc:mt-8 text-12 pc:text-18 font-medium leading-none">ご利用上の注意</span>
                </div>
                <Image className="w-16 pc:w-23" src="/media/images/bbq/svg_double-arrow-right.svg" alt="ダブルアロー" width={23} height={32} />
              </Link>
            </div>
          </div>
        </section>

        {/* アクセス */}
        <section className="mt-40 pc:mt-80" id="access">
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
                  <iframe className="block absolute inset-0 w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d803.2535577151344!2d139.00051819162854!3d36.36043418841604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601e8d6815b66347%3A0x71c9c76e08971014!2sSEEZN!5e0!3m2!1sja!2sjp!4v1680838139644!5m2!1sja!2sjp" width={800} height={600} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="seeznの地図" />
                </div>

                <div className="hidden pc:block flex-1 pl-15 mt-20">
                  <Image className="w-full" src="/media/images/bbq/PC_08.webp" alt="SEEZN外観" width={545} height={498} />
                </div>
              </div>

              <div className="mt-8 pc:hidden">
                <Image className="w-full" src="/media/images/bbq/sp_08_new.webp" alt="駐車場案内" width={969} height={494} />
              </div>
            </div>
          </div>
        </section>

        {/* スロープ画像（装飾） */}
        <div className="mt-40 pc:mt-120">
          <div className="px-20">
            <div className="mx-auto max-w-1220">
              <div className="flex justify-center">
                <div className="max-w-1000">
                  <Image className="w-full" src="/media/images/bbq/slope.webp" alt="" width={750} height={120} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ReservationBtn />
    </LayoutBbqBusiness>
  );
}
