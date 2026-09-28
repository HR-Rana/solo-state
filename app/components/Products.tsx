"use client";
import Link from "next/link";
import { Heart, Star } from "lucide-react";

const products = [
  ["Nebular Print T-Shirt", "T-Shirt", 1490, "/images/tshirt.svg", "NEW", 1],
  ["Oxford Premium Shirt", "Shirt", 2190, "/images/shirt.svg", "NEW", 2],
  ["Twill Formal Pants", "Pants", 2790, "/images/pants.svg", "-20%", 3],
  ["Embroidered Panjabi", "Panjabi", 2990, "/images/panjabi.svg", "POPULAR", 4],
  ["Urban Bomber Jacket", "Jacket", 4990, "/images/jacket.svg", "NEW", 5],
  ["Minimal Steel Watch", "Accessory", 1890, "/images/watch.svg", "BEST", 6],
];

export default function Products() {
  return (
    <section className="bg-[#f4efe5] py-20">
      <div className="container">
        <p className="text-[10px] tracking-[.34em] text-[#b58d49]">
          JUST DROPPED
        </p>
        <div className="flex items-end justify-between">
          <h2 className="serif mt-3 text-4xl sm:text-5xl">New Arrivals</h2>
          <Link href="/new-arrivals" className="hidden text-xs sm:block">
            VIEW ALL →
          </Link>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          The latest pieces, made for your next move.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-6">
          {products.map(([n, c, p, img, b, id]) => (
            <article key={n} className="group bg-white">
              <Link href={`/product/${id}`} className="block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={String(img)}
                    alt={String(n)}
                    className="image-zoom h-full w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 bg-[#071725] px-2 py-1 text-[8px] font-bold text-white">
                    {String(b)}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90"
                  >
                    <Heart size={14} />
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-[9px] uppercase tracking-[.2em] text-gray-400">
                    {String(c)}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold">{String(n)}</h3>
                  <div className="mt-2 flex gap-1">
                    {[1, 2, 3, 4, 5].map((x) => (
                      <Star key={x} size={10} fill="#d4af6a" color="#d4af6a" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm font-bold">
                    ৳ {Number(p).toLocaleString()}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-24 bg-[#071725] py-20 text-white">
        <div className="container">
          <p className="text-[10px] tracking-[.34em] text-[#d4af6a]">
            MOST LOVED
          </p>
          <div className="flex items-end justify-between">
            <h2 className="serif mt-3 text-4xl sm:text-5xl">Best Sellers</h2>
            <Link href="/shop?sort=popular" className="text-xs text-[#d4af6a]">
              VIEW ALL →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {products.slice(0, 4).map(([n, c, p, img, , id]) => (
              <Link
                href={`/product/${id}`}
                key={n}
                className="group overflow-hidden bg-[#0d263b]"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={String(img)}
                    alt={String(n)}
                    className="image-zoom h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[9px] text-white/40">{String(c)}</p>
                  <h3 className="mt-2 text-sm">{String(n)}</h3>
                  <p className="mt-2 text-sm text-[#d4af6a]">
                    ৳ {Number(p).toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
