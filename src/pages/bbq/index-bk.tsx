import { LayoutBbq } from "@/components/LayoutBbq";
import { StaffWanted } from "@/components/StaffWanted";
import { ReservationBtn } from "@/components/ReservationBtn";
import Image from "next/image";
import Link from "next/link";
import { CardPlan } from "@/components/CardPlan";
import { BbqItem } from "@/components/BbqItem";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useState } from "react";
import type SplideCore from "@splidejs/splide";

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

export default function Home() {
  const splideRef = useRef<{ splide: SplideCore } | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <LayoutBbq title=".SEEZN (ドット シーズン)" description="群馬県高崎市の完全予約制アウトドアBBQ施設「.SEEZN（ドットシーズン）」公式ページ。準備・火起こし・片付け不要の手ぶらBBQプラン、各種肉コース、設備概要、利用方法と料金情報を掲載しています。ご家族・友人・団体利用まで対応可能な屋外バーベキューサービスの詳細はこちら。">
      <div className=" pb-60 pc:pb-160">
        <div className="relative pt-70">
          <div className="absolute inset-0">
            <Image className="w-full h-full object-cover" src="/media/images/bbq/bg.webp" alt="雲" loading="lazy" fill sizes="(min-width: 768px) 100vw, 100vw" />
          </div>

          <div className="relative">
            <picture className="hidden pc:block bbq-img">
              <Image className="w-full" src="/media/images/bbq/pc_01_new.webp" alt="キーヴィジュアル" loading="lazy" width="1929" height="844" />
            </picture>
            <video className="pc:hidden w-full" autoPlay loop muted playsInline>
              <source src="/media/images/bbq/BBQnologo_sp.mp4" type="video/mp4" />
            </video>
            <h1 className="absolute top-1/2 left-1/2 -translate-1/2">
              <Image className="w-180 pc:w-424" src="/media/images/bbq/svg_seezn-logo.svg" alt="seezn（シーズン）" loading="lazy" width="424" height="106" />
            </h1>
          </div>

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

            {/* <div className="u-mt-80">
              <Link className="relative block mx-auto w-full pc:w-968 aspect-[1957/497] pc:aspect-[1959/402] duration-500 pc:hover:opacity-60" href="/bbq/bibikon/" target="_blank" rel="noreferrer">
                <Image className="max-pc:hidden object-contain" src="/media/images/bbq/konkatu_pc.webp" alt="BBQ婚（びびコン）" fill sizes="(min-width: 1272px) 100vw, 100vw" loading="lazy" />
                <Image className="pc:hidden object-contain" src="/media/images/bbq/konkatu_sp.webp" alt="BBQ婚（びびコン）" fill sizes="100vw" loading="lazy" />
              </Link>
            </div> */}

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
        </div>

        <section className="py-40 pc:py-80">
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

        <div className="relative" id="service">
          <div className="bg-[#E2DFD3] pt-64 pb-40 pc:pb-80">
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
        </div>

        <div className="pc:hidden">
          <video className="w-full" autoPlay loop muted playsInline>
            <source src="/media/images/bbq/BBQ_img.mp4" type="video/mp4" />
          </video>
        </div>

        <section className="bg-white pt-40 pc:pt-80" id="plan">
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
        </section>

        <section className="mt-64 px-22">
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
        </section>

        <section className="mt-64 relative" id="howTo">
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
        </section>

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
        </section>

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

      <ReservationBtn />
      <StaffWanted />
    </LayoutBbq>
  );
}
