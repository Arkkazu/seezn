import { PageTitle } from "@/components/PageTitle";
import type { ReactNode } from "react";

type FaqItem = {
  q: string;
  a: ReactNode;
};

const faqItems: FaqItem[] = [
  {
    q: "持ち込みは自由ですか？",
    a: "持ち込みに関しては原則自由です。",
  },
  {
    q: "醤油、マヨネーズ等はありますか？",
    a: "醤油などの調味料はお客様でご用意いただくようお願いしております。",
  },
  {
    q: "コース料金以外でかかる費用はありますか？",
    a: "コース料金以外でかかる費用はございません。",
  },
  {
    q: "ペットを連れていってもいいですか？",
    a: "ペット用おむつを着けてリードを繋いでいただければ可能です。",
  },
  {
    q: "冷蔵庫はありますか？",
    a: "冷蔵庫はお貸しできませんが、クーラーBOXをお持ちいただければ無料で保冷剤をお貸ししています。",
  },
  {
    q: "電子レンジ、ポットはありますか？",
    a: "電子レンジなどの調理器具は備え付けておりません。",
  },
  {
    q: "駐車場は何台停められますか？",
    a: "15～20台停めることが可能です。",
  },
  {
    q: "貸し切りはできますか？",
    a: "別途貸切料金を頂戴しております。",
  },
  {
    q: "クレジットカードは使えますか？",
    a: (
      <>
        クレジットカードのご利用可能です。
        <br />
        (VISA / JCB / AMEX / Master / Diners /Discover)
      </>
    ),
  },
  {
    q: "花火はできますか？",
    a: "隣のBBQスペースと近く、他のお客様に危害が及ぶ可能性がございますので禁止にさせて頂いております。",
  },
  {
    q: "タクシーや代行は呼んでもらえますか？",
    a: "飲食店とのサービスにおける差別化を図るため、手配を致しかねます。タクシーや代行の手配はお客様ご自身で手配いただくようお願いしております。",
  },
  {
    q: "駐車場に車を置いていってもいいですか？",
    a: "トラブルを避けるためにご遠慮頂いております。",
  },
];

export const FaqCont = () => {
  return (
    <section className="px-20 pc:px-160">
      <div className="mx-auto max-w-1200">
        <PageTitle en="FAQ" ja="よくある質問" tag="h1" />

        <div className="mt-24 pc:mt-40">
          <ol className="grid gap-y-16 pc:gap-y-24">
            {faqItems.map((item) => (
              <li key={item.q} className="bg-white px-16 pc:px-40 py-12 pc:py-24 flex max-md:flex-col gap-y-8">
                <div className="md:w-1/2 flex items-center gap-x-16">
                  <span className="u-text-22 font-semibold font-noto-serif">Q.</span>
                  <p className="u-text-16 pt-[0.2em]">{item.q}</p>
                </div>
                <div className="h-[1px] md:h-full md:w-[1px] bg-black" />
                <div className="md:w-1/2 md:pl-40 flex items-center gap-x-16">
                  <span className="u-text-22 font-semibold font-noto-serif">A.</span>
                  <p className="u-text-16 pt-[0.2em]">{item.a}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
