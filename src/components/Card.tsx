import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  href: string;
}

export default function Card({ title, description, imageSrc, imageAlt = "", href }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg">
      <a href={href} className="block">
        <div className="relative w-full aspect-[16/9]">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="100vw" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <p className="mt-8 text-gray-600">{description}</p>
          <span className="mt-8 inline-block text-12 pc:text-14 text-blue-600 hover:underline">詳細を見る →</span>
        </div>
      </a>
    </div>
  );
}
