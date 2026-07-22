"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageToggle } from "@/components/LanguageToggle";
import { MobileNav } from "@/components/MobileNav";
import { navItems } from "@/lib/site";
import { useCart } from "@/lib/cart";
import { useLanguage } from "@/lib/language";

export function Header() {
  const { t } = useLanguage();
  const { itemCount, openCart } = useCart();
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname === `${href}/` || pathname?.startsWith(`${href}/`);

  return (
    <header className="site-header">
      <div className="container flex items-center justify-between gap-5">
        <Link href="/" className="site-brand" aria-label="Chazen home">
          <span className="site-brand-en">Chazen</span>
          <span className="site-brand-zh" lang="zh-Hant">茶禪</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label={t("Primary", "主導覽")}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`site-nav-link${isActive(item.href) ? " is-active" : ""}`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {t(item.label, item.labelZh)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Link href="/tea-test" className="header-inquire button-light hidden sm:inline-flex">
            {t("Start Tea Test", "開始茶測試")}
          </Link>
          <button
            type="button"
            className="header-cart-button"
            onClick={openCart}
            aria-label={t("Open cart", "開啟購物車")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L22 8H6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9.5" cy="21" r="1.4" />
              <circle cx="18" cy="21" r="1.4" />
            </svg>
            {itemCount > 0 ? <span className="header-cart-badge">{itemCount}</span> : null}
          </button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
