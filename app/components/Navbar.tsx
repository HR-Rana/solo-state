"use client";
import { useState } from "react";
import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";

const links = [
  ["Home", "/"],
  ["Shop", "/shop"],
  ["New Arrivals", "/new-arrivals"],
  ["Collections", "/collections"],
  ["About", "/about"],
  // ["Favorites", "/favorites"],
  // ["Login", "/login"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071725]/95 text-white backdrop-blur-xl">
      <div className="container flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full border border-[#d4af6a] text-xl text-[#d4af6a]">
            S
          </div>
          <div>
            <div className="text-[17px] tracking-[.24em]">SOLO STATE</div>
            <div className="text-[7px] tracking-[.34em] text-[#d4af6a]">
              DEFINE YOUR ATTITUDE
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([n, h]) => (
            <Link
              key={n}
              href={h}
              className="text-sm text-white/75 hover:text-[#d4af6a]"
            >
              {n}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="hidden sm:block">
            <Search size={18} />
          </button>
          <Link href="/login" className="hidden md:block" aria-label="Login">
            <User size={18} />
          </Link>
          <Link
            href="/favorites"
            className="hidden md:block"
            aria-label="Favorites"
          >
            <Heart size={18} />
          </Link>
          <Link href="/cart" className="relative" aria-label="Shopping cart">
            <ShoppingBag size={19} />
            <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-[#d4af6a] text-[9px] text-black">
              3
            </span>
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-[#071725] lg:hidden">
          <div className="container flex flex-col">
            {links.map(([n, h]) => (
              <Link
                key={n}
                href={h}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-sm"
              >
                {n}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
