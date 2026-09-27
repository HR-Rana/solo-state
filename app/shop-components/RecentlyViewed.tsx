"use client";

import Link from "next/link";
import { Product } from "./shop-data";

type RecentlyViewedProps = {
  products: Product[];
  onProductClick: (product: Product) => void;
};

export default function RecentlyViewed({
  products,
  onProductClick,
}: RecentlyViewedProps) {
  if (!products.length) {
    return null;
  }

  return (
    <section className="border-t border-black/10 bg-white py-16">
      <div className="container">
        <p className="text-[10px] font-semibold tracking-[0.3em] text-[#b58d49]">
          KEEP EXPLORING
        </p>
        <div className="mt-3 flex items-end justify-between gap-5">
          <h2 className="serif text-3xl sm:text-4xl">Recently Viewed</h2>
          <Link
            href="/shop"
            className="text-[10px] font-bold tracking-[0.16em]"
          >
            VIEW ALL →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => onProductClick(product)}
              className="group grid grid-cols-[72px_1fr] gap-3 bg-[#f4efe5] p-3 text-left"
            >
              <div className="aspect-square overflow-hidden bg-[#e9e3d8]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="image-zoom h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 self-center">
                <p className="text-[9px] uppercase tracking-[0.12em] text-black/35">
                  {product.category}
                </p>
                <h3 className="mt-1 truncate text-xs font-semibold">
                  {product.name}
                </h3>
                <p className="mt-2 text-xs font-bold">
                  ৳ {product.price.toLocaleString()}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
