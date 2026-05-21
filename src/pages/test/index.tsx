import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";

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
    campaignPrice: undefined,
  },
  {
    number: "03",
    name: "Wagyu",
    kana: "和牛",
    image: "/media/images/bbq/plan-003.webp",
    alt: "和牛",
    description: "A4黒毛和牛ステーキ(150g)",
    price: "¥4,000",
    campaignPrice: undefined,
  },
  {
    number: "04",
    name: "Seafood",
    kana: "シーフード",
    image: "/media/images/bbq/plan-004.webp",
    alt: "シーフード",
    description: "ハーブチキン(150g)/海鮮串/エビ/ホタテ",
    price: "¥4,000",
    campaignPrice: undefined,
  },
  {
    number: "05",
    name: "Premium",
    kana: "プレミアム",
    image: "/media/images/bbq/plan-005.webp",
    alt: "プレミアム",
    description: "A4黒毛和牛ステーキ(150g)/ハーブチキン(150g)",
    price: "¥4,500",
    campaignPrice: undefined,
  },
  {
    number: "06",
    name: "Executive",
    kana: "エグゼクティブ",
    image: "/media/images/bbq/plan-006.webp",
    alt: "エグゼクティブ",
    description: "A4黒毛和牛ステーキ(150g)/海鮮串/エビ/ホタテ",
    price: "¥5,500",
    campaignPrice: undefined,
  },
  {
    number: "07",
    name: "Kids",
    kana: "キッズ（小学生）",
    image: "/media/images/bbq/plan-007.webp",
    alt: "キッズ",
    description: "ハーブチキン(150g)",
    price: "¥2,000",
    campaignPrice: undefined,
  },
  {
    number: "08",
    name: "Youth",
    kana: "ユース（中・高校生）",
    image: "/media/images/bbq/plan-008.webp",
    alt: "ユース",
    description: "ハンバーグ(150g)/ハーブチキン(150g)",
    price: "¥2,800",
    campaignPrice: undefined,
  },
  {
    number: "09",
    name: "Preschool",
    kana: "未就学児（小学校入学前）",
    image: "",
    alt: "",
    description: "",
    price: "¥0",
    campaignPrice: undefined,
  },
];

export default function TestPage() {
  return (
    <div>
      <Image src="/media/images/bbq/BBQ-02_sp.webp" alt="BBQ-02_sp" width={800} height={600} style={{ width: "100%", height: "auto" }} />
      <div className="flex flex-col gap-30 pc:gap-60">
        <SectionTitle title="Plan" subTitle="プランのご案内" />
        <div className="bg-[#e2dfd3] px-12 md:px-40 py-20 md:py-56 flex flex-col gap-12 md:gap-40">
          <p className="text-12 md:text-20 text-center">
            下記よりお一人様１コースご注文ください
            <br />
            <span className="text-8 md:text-16">（同グループでコースは統一いただきますようお願いします）</span>
          </p>
          <div className="grid grid-cols-2 gap-8 md:gap-24">
            {planItems.map((item) => (
              <article key={item.number} className="bg-[#595757] px-6 md:px-12 py-10 md:py-20 text-white">
                <div className="flex items-end gap-x-8 border-b border-white pb-4">
                  <span className="text-8 md:text-20 font-medium leading-none scale-y-[1.3]">{item.number}</span>
                  <h3 className="text-8 md:text-20 font-medium leading-none scale-y-[1.3]">{item.name}</h3>
                  <span className="text-4 md:text-10 font-medium leading-none">{item.kana}</span>
                </div>

                {item.image && <Image className="mt-12 h-auto w-full" src={item.image} alt={item.alt} width={433} height={195} />}

                <p className="mt-8 md:mt-12 text-7 md:text-12 font-medium leading-snug">{item.description}</p>

                <div className="mt-8 md:mt-12 flex items-center gap-x-4 md:gap-x-8">
                  <p className="text-12 md:text-20 font-medium leading-none scale-y-[1.3]">{item.price}</p>

                  {item.campaignPrice && (
                    <>
                      <span className="flex items-center gap-2" aria-hidden="true">
                        <span className="block h-0 w-0 border-y-4 md:border-y-8 border-l-3 md:border-l-6 border-y-transparent border-l-orange" />
                        <span className="block h-0 w-0 border-y-4 md:border-y-8 border-l-3 md:border-l-6 border-y-transparent border-l-orange" />
                      </span>
                      <div className="flex">
                        <div className="bg-orange p-4 flex items-center">
                          <span className="text-8 md:text-14 font-medium leading-none text-white">
                            平日限定
                            <br className="md:hidden" />
                            <span className="text-4 md:text-10">（5/10〜7/10まで）</span>
                          </span>
                        </div>
                        <div className="bg-white self-stretch flex items-center justify-center p-4">
                          <span className="block text-12 md:text-20 text-orange font-semibold leading-none scale-y-[1.3]">{item.campaignPrice}</span>
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
  );
}
