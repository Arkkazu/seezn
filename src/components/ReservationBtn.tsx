import Image from "next/image";
import reservationBanner from "../../public/media/images/bbq/svg-banner-reservation.svg";

export const ReservationBtn = () => {
  return (
    <div className="fixed bottom-64 pc:bottom-98 right-0 z-10" id="js_reservation">
      <a className="block hover:opacity-60 duration-500" href="https://lin.ee/hRQWmE7" target="_blank" rel="noopener noreferrer">
        <Image src={reservationBanner} alt="RESERVATION" className="w-160 pc:w-240" />
        {/* <Image className="w-240" src="/media/images/bbq/svg-banner-reservation.svg" alt="RESERVATION" width="98" height="98" /> */}
        {/* <div className="w-180 pc:w-240 aspect-square rounded-full bg-[rgba(201,151,78,0.9)] pb-20 pc:pb-0 flex justify-center items-center flex-col gap-y-8">
          <Image className="w-32 pc:w-48" src="/media/images/bbq/svg_line-icon.svg" alt="LINEアイコン" width="68" height="68" />
          <p className="text-18 pc:text-24 text-white font-noto-serif tracking-[0.1em] leading-none">RESERVATION</p>
          <div className="flex items-center flex-col">
            <p className="text-12 pc:text-14 font-semibold">お問合せ・ご予約はこちらから</p>
            <p className="text-12 pc:text-14 font-bold">対応時間 9:00～19:00</p>
          </div>
          <Image className="hidden pc:block w-64" src="/media/images/bbq/svg_qr-code.svg" alt="QRコード" width="98" height="98" />
        </div> */}
      </a>
    </div>
  );
};
