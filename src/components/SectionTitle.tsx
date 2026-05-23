type SectionTitleProps = {
  title: string;
  subTitle: string;
};

export const SectionTitle = ({ title, subTitle }: SectionTitleProps) => {
  return (
    <div className="flex flex-col gap-12 pc:gap-16 text-center">
      <div className="flex items-center justify-center gap-x-16">
        <span className="h-px flex-1 bg-black" aria-hidden="true" />
        <h2 className="shrink-0 font-noto-serif u-text-24 font-medium leading-none">{title}</h2>
        <span className="h-px flex-1 bg-black" aria-hidden="true" />
      </div>

      <p className="u-text-14 font-medium leading-none">{subTitle}</p>
    </div>
  );
};
