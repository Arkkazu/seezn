import Image from "next/image";

// components/BbqItem.tsx（例）
export interface BbqItemProps {
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const BbqItem = ({ title, description, imageSrc, imageAlt }: BbqItemProps) => {
  return (
    <div className="relative flex">
      <div className="grow bg-silver-gray p-16 pc:p-32 flex-1 flex flex-col justify-center">
        <p className="text-16 pc:text-20 font-noto-serif font-bold">{title}</p>
        <div className="mt-12">
          <p className="text-12 pc:text-16 font-noto-serif font-medium">{description}</p>
        </div>
      </div>
      <div className="relative w-160 pc:w-320">
        <Image src={imageSrc} alt={imageAlt} loading="lazy" fill sizes="(min-width: 768px) 320px, 160px" className="object-cover" />
      </div>
    </div>
  );
};
