import { useState } from "react";
import Link from "next/link";

export default function SpMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {/* ハンバーガーアイコン */}
      <button className="js-burger focus:outline-none fixed top-16 right-16 flex justify-center items-center w-40 h-40 rounded-4 bg-black z-100 hoverable:cursor-pointer" onClick={() => setIsOpen(!isOpen)} aria-label="メニューを開く">
        <div className="relative w-22 h-[21px]">
          <div className="js-burger-line-1 absolute bg-white w-full h-[3px] duration-500 left-0 top-0"></div>
          <div className="js-burger-line-2 absolute bg-white w-full h-[3px] duration-500 left-0 top-[9px]"></div>
          <div className="js-burger-line-3 absolute bg-white w-full h-[3px] duration-500 left-0 top-[18px]"></div>
        </div>
      </button>

      {/* メニュー本体 */}
      {/* {isOpen && ( */}
      <nav
        className={`js-sp-menu fixed z-99 top-0 w-200 h-[100dvh] px-16 py-64 bg-white border-l border-black transition-all duration-500 flex justify-center items-center
          ${isOpen ? "right-0" : "-right-full"}
          `}
      >
        <ul className="grid gap-y-40">
          <li className="flex justify-center">
            <Link href="/">
              <span className="font-bold">TOP</span>
            </Link>
          </li>
          <li className="flex justify-center">
            <Link href="/shed">
              <span className="font-bold">GARDEN SHED</span>
            </Link>
          </li>
          <li className="flex justify-center">
            <Link href="/bbq">
              <span className="font-bold">BBQ</span>
            </Link>
          </li>
        </ul>
      </nav>
      {/* )} */}
    </div>
  );
}
