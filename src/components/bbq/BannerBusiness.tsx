import Link from "next/link";

export const BannerBusiness = () => {
  return (
    <div className="fixed right-0 bottom-0 z-[500]">
      <Link className="flex h-64 pc:h-96 w-full pc:w-320 items-center justify-center bg-[rgba(0,0,0,0.7)] duration-500 pc:hover:opacity-70" href="/bbq_business/">
        <div className="relative pl-24 pr-8 pc:px-32">
          <p className="text-center font-yu-mincho text-12 pc:text-20 font-semibold text-white">
            最大200名様
            <br />
            <span className="relative">
              <span className="absolute top-1/2 -left-4 pc:-left-8 h-0 w-0 -translate-x-full -translate-y-1/2 border-y-6 pc:border-y-10 border-l-6 pc:border-l-10 border-y-transparent border-l-white" />
              企業様・団体様はこちら
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};
