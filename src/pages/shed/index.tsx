import { Layout } from "@/components/Layout";
import Image from "next/image";

export default function Shed() {
  return (
    <Layout title=".SEEZN (ドット シーズン)" description="群馬県高崎市の完全予約制アウトドアBBQ施設「.SEEZN（ドットシーズン）」公式ページ。準備・火起こし・片付け不要の手ぶらBBQプラン、各種肉コース、設備概要、利用方法と料金情報を掲載しています。ご家族・友人・団体利用まで対応可能な屋外バーベキューサービスの詳細はこちら。">
      <div>
        <div>
          <Image className="w-full max-pc:hidden" src="/media/images/shed/PC_01.jpg" alt="「成長し続ける」」をコンセプトとしたリゾート施設 | .SEEZN（ドット シーズン）" width={1921} height={1147} />
          <Image className="w-full pc:hidden" src="/media/images/shed/SMARTPHONE_01.jpg" alt="「成長し続ける」」をコンセプトとしたリゾート施設 | .SEEZN（ドット シーズン）" width="1125" height="786" />
        </div>
        <div>
          <Image className="w-full max-pc:hidden" src="/media/images/shed/PC_02.jpg" alt="「成長し続ける」」をコンセプトとしたリゾート施設 | .SEEZN（ドット シーズン）" width={1921} height={6339} />
          <Image className="w-full pc:hidden" src="/media/images/shed/SMARTPHONE_02.jpg" alt="「成長し続ける」」をコンセプトとしたリゾート施設 | .SEEZN（ドット シーズン）" width="1125" height="7812" />
        </div>
        <div>
          <Image className="w-full max-pc:hidden" src="/media/images/shed/PC_03.jpg" alt="「成長し続ける」」をコンセプトとしたリゾート施設 | .SEEZN（ドット シーズン）" width={1921} height={7588} />
          <Image className="w-full pc:hidden" src="/media/images/shed/SMARTPHONE_03.jpg" alt="「成長し続ける」」をコンセプトとしたリゾート施設 | .SEEZN（ドット シーズン）" width="1125" height="8329" />
        </div>
        <div>
          <Image className="w-full max-pc:hidden" src="/media/images/shed/PC_04.jpg" alt="「成長し続ける」」をコンセプトとしたリゾート施設 | .SEEZN（ドット シーズン）" width={1921} height={612} />
          <Image className="w-full pc:hidden" src="/media/images/shed/SMARTPHONE_04.jpg" alt="「成長し続ける」」をコンセプトとしたリゾート施設 | .SEEZN（ドット シーズン）" width="1125" height="662" />
        </div>
      </div>
    </Layout>
  );
}
