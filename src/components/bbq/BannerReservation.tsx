import Image from "next/image";
import Link from "next/link";

export const BannerReservation = () => {
  return (
    <div className="fixed right-0 bottom-72 pc:bottom-104 z-[500]">
      <Link className="w-160 pc:w-220 flex items-center justify-center duration-500 pc:hover:opacity-70" href="https://lin.ee/hRQWmE7" target="_blank" rel="noopener noreferrer">
        <Image src="/media/images/bbq/svg-banner-reservation-2.svg" alt="予約" width={170} height={100} className="h-auto w-full" />
      </Link>
    </div>
  );
};
