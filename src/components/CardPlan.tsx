export interface CardPlanProps {
  label: string;
  price: string;
  description: React.ReactNode[];
  variant?: "A" | "B" | "C" | "D";
}

export const CardPlan = ({ price, description, variant }: CardPlanProps) => {
  return (
    <div className="bg-silver-gray p-12 flex gap-x-16">
      <div className="flex items-start gap-x-8">
        <div className="flex items-center justify-center shrink-0 w-24 pc:w-32 aspect-square bg-black">
          <span className="text-16 pc:text-24 font-noto-serif font-medium text-white">{variant}</span>
        </div>
        <span className="mt-4 text-20 pc:text-28 text-right font-noto-serif font-medium leading-[0.8]">
          {price}
          <br />
          <span className="text-10 pc:text-12">（税込）</span>
        </span>
      </div>
      <div className="border-l border-white pl-16 flex flex-col gap-y-8">
        {description.map((item, index) => (
          <p key={index} className="text-14 pc:text-16 font-noto-serif font-medium">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
