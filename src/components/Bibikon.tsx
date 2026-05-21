import Image from "next/image";

export const Bibikon = () => {
  return (
    <section className="px-20 pc:px-160">
      <div className="mx-auto max-w-1200">
        <div className="flex items-end gap-x-16">
          <h1 className="u-text-24 font-bold">BBQ婚について</h1>
        </div>

        <div className="mt-24 pc:mt-40">
          <Image className="w-full" src="/media/images/bbq/bibikon.webp" alt="BBQ婚（びびコン）" sizes="(min-width: 1272px) 1200rem, calc(100vw - 40rem)" width={1654} height={2339} loading="lazy" />
          <div className="u-mt-40 flex justify-center">
            <a className="relative u-text-20 font-semibold underline duration-500 pc:hover:opacity-60" href="https://docs.google.com/forms/d/1HR3kYFMSm14T2H7z-78U4KxEAz3XlfolV2YBhKTJqv4/edit" target="_blank" rel="noreferrer">
              お申し込みはこちら
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
