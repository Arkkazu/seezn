import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="relative flex items-center justify-center bg-black h-48 pc:h-80 pt-8 z-[1]">
      <div className="relative w-80 pc:w-160 aspect-[238/60]">
        <Image src="/media/images/common/seezn-logo.svg" alt="seezn" fill className="object-contain" />
      </div>
    </footer>
  );
};
