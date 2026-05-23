type PageTitleProps = {
  en: string;
  ja: string;
  tag?: "h1" | "h2";
};

export const PageTitle = ({ en, ja, tag: Tag = "h1" }: PageTitleProps) => {
  return (
    <div className="flex items-end gap-x-12 pc:gap-x-16">
      <span className="u-text-24 font-semibold font-noto-serif">{en}</span>
      <Tag className="u-text-16 pb-[0.2em]">{ja}</Tag>
    </div>
  );
};
