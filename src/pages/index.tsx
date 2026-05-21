import { Layout } from "@/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout title=".SEEZN (ドット シーズン)" description="群馬県高崎市の完全予約制アウトドアBBQ施設「.SEEZN（ドットシーズン）」公式ページ。準備・火起こし・片付け不要の手ぶらBBQプラン、各種肉コース、設備概要、利用方法と料金情報を掲載しています。ご家族・友人・団体利用まで対応可能な屋外バーベキューサービスの詳細はこちら。">
      <div className="abs-center flex flex-col gap-y-24">
        <h1>
          <Image className="w-240" src="/media/images/home/seezn_HP_TOP_outline.png" alt="「成長し続ける」」をコンセプトとしたリゾート施設 | .SEEZN（ドット シーズン）" width={1000} height={1111} />
        </h1>
        {/* <p className="text-20 text-center">テキスト</p>
        <div className="space-x-4">
          <Button primary label="プライマリ" size="medium" />
          <Button label="セカンダリ" size="medium" />
          <Button label="カスタム色" size="medium" backgroundColor="#4ade80" />
        </div> */}
      </div>
    </Layout>
  );
}
