type SectionTitleProps = {
  title: string;
  subTitle: string;
};

export const SectionTitle = ({ title, subTitle }: SectionTitleProps) => {
  return (
    <div className="flex flex-col gap-16 pc:gap-24 text-center">
      <div className="flex items-center justify-center gap-x-16">
        <span className="h-px flex-1 bg-black" aria-hidden="true" />
        <h2 className="shrink-0 font-noto-serif text-24 pc:text-36 font-medium leading-none">{title}</h2>
        <span className="h-px flex-1 bg-black" aria-hidden="true" />
      </div>

      <p className="text-12 pc:text-16 font-medium leading-none">{subTitle}</p>
    </div>
  );
};
