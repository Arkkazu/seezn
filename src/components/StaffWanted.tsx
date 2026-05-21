import Link from "next/link";

export const StaffWanted = () => {
  return (
    <div className="js-wanted fixed bottom-0 right-0 z-10 w-full pc:w-420">
      <Link href="/bbq/recruit/" className="block hover:opacity-60 duration-500">
        <div className="h-54 pc:h-88 bg-[rgba(0,0,0,0.7)] flex justify-center items-center flex-col">
          <p className="text-13 pc:text-15 leading-[1.8] text-white font-notoSansJp tracking-[0.2em]">求人情報</p>
          <p className="text-22 pc:text-28 font-noto-serif text-[#FFFF82] leading-none">STAFF WANTED</p>
        </div>
      </Link>
    </div>
  );
};
