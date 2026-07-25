import { Layout } from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import bbq from "@/assets/home/bbq.svg";
import gardenShed from "@/assets/home/gardenshed.svg";

export default function Home() {
  return (
    <Layout title=".SEEZN (ドット シーズン)" description="群馬県高崎市の完全予約制アウトドアBBQ施設「.SEEZN（ドットシーズン）」公式ページ。準備・火起こし・片付け不要の手ぶらBBQプラン、各種肉コース、設備概要、利用方法と料金情報を掲載しています。ご家族・友人・団体利用まで対応可能な屋外バーベキューサービスの詳細はこちら。">
      <div className="abs-center flex flex-col">
        <h1>
          <Image className="mx-auto w-200" src="/media/images/common/logo.svg" alt="「成長し続ける」」をコンセプトとしたリゾート施設 | .SEEZN（ドット シーズン）" width={1000} height={1111} />
        </h1>
        <p className="mt-32 text-14 text-center leading-[1.8]">
          Whre Every Visit
          <br />
          Becomes Something New
        </p>

        <div className="mt-80 flex gap-16">
          <Link className="hoverable:hover:opacity-50 transition-opacity duration-300" href="/shed">
            <Image className="h-32 w-auto" src={gardenShed} alt="GARDEN SHED" />
          </Link>
          <Link className="hoverable:hover:opacity-50 transition-opacity duration-300" href="/bbq">
            <Image className="h-32 w-auto" src={bbq} alt="BBQ" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
