import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-[#f0e8da]">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="display-title text-2xl text-leaf">{site.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-ink/64">
            One Cup. One Breath. One Return. A modern cultural tea house for ritual,
            stillness, and meaningful gifts.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold text-ink">Explore</p>
          <div className="mt-4 grid gap-2 text-sm text-ink/65">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-leaf">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-ink">Signature Focus</p>
          <p className="mt-4 text-sm leading-7 text-ink/65">
            Chinese tea culture, Song restraint, meditative sound, origin stories,
            and premium gifting shaped as one calm experience.
          </p>
        </div>
      </div>
    </footer>
  );
}
