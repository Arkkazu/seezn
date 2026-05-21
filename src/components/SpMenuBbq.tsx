import { useState } from "react";
import Link from "next/link";

export const SpMenuBbq = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-[800]">
      {/* ハンバーガーアイコン */}
      <button className="js-burger focus:outline-none fixed top-16 right-16 flex justify-center items-center w-40 h-40 rounded-4 bg-black z-100 hoverable:cursor-pointer" onClick={() => setIsOpen(!isOpen)} aria-label="メニューを開く">
        <div className="relative w-22 h-[21px]">
          <div className="js-burger-line-1 absolute bg-white w-full h-[3px] duration-500 left-0 top-0"></div>
          <div className="js-burger-line-2 absolute bg-white w-full h-[3px] duration-500 left-0 top-[9px]"></div>
          <div className="js-burger-line-3 absolute bg-white w-full h-[3px] duration-500 left-0 top-[18px]"></div>
        </div>
      </button>

      {/* メニュー本体 */}
      <nav className={`js-sp-menu fixed z-99 top-0 w-200 h-[100dvh] px-16 py-64 bg-white border-l border-black transition-all duration-500 flex justify-center items-center ${isOpen ? "right-0" : "-right-full"}`}>
        <ul className="flex flex-col gap-y-20">
          {[
            { href: "/bbq", label: "ホーム" },
            { href: "/bbq/#service", label: "サービス内容" },
            { href: "/bbq/#plan", label: "プラン" },
            { href: "/bbq/#howTo", label: "ご利用方法" },
            { href: "/bbq/#access", label: "アクセス" },
            { href: "https://lin.ee/hRQWmE7", label: "ご予約", external: true },
            { href: "/bbq/faq", label: "よくあるご質問" },
            { href: "https://www.instagram.com/seezn_rezort/", label: "インスタグラム", external: true },
            { href: "/bbq/use", label: "ご利用上のご注意" },
            { href: "/bbq/recruit", label: "募集要項" },
          ].map(({ href, label, external }) => (
            <li className="flex justify-center" key={label}>
              <Link href={href} target={external ? "_blank" : undefined}>
                <span className="font-bold" onClick={() => setIsOpen(false)}>
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
