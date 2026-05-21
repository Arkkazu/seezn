import { LayoutBbqBusiness } from "@/components/LayoutBbqBusiness";
import { Use } from "@/components/Use";
import { ReservationBtn } from "@/components/ReservationBtn";

export default function faq() {
  return (
    <LayoutBbqBusiness title=".SEEZN (ドット シーズン)" description="群馬県高崎市の完全予約制アウトドアBBQ施設「.SEEZN（ドットシーズン）」公式ページ。準備・火起こし・片付け不要の手ぶらBBQプラン、各種肉コース、設備概要、利用方法と料金情報を掲載しています。ご家族・友人・団体利用まで対応可能な屋外バーベキューサービスの詳細はこちら。">
      <Use />
      <ReservationBtn />
    </LayoutBbqBusiness>
  );
}
