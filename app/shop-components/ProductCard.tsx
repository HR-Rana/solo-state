'use client';

import { Heart, Plus, Star } from 'lucide-react';
import { Product } from './shop-data';

type ProductCardProps = {
  product: Product;
  wishlisted: boolean;
  onWishlist: (id: number) => void;
  onQuickAdd: (product: Product) => void;
};

export default function ProductCard({
  product,
  wishlisted,
  onWishlist,
  onQuickAdd,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden bg-white">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#e9e3d8]">
        <button
          type="button"
          onClick={() => onQuickAdd(product)}
          className="block h-full w-full cursor-pointer"
          aria-label={`Quick add ${product.name}`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="image-zoom h-full w-full object-cover"
          />
        </button>

        {product.badge && (
          <span className="absolute left-3 top-3 bg-[#071725] px-2.5 py-1.5 text-[8px] font-bold tracking-[0.12em] text-white">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => onWishlist(product.id)}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full backdrop-blur transition ${
            wishlisted
              ? 'bg-[#071725] text-[#d4af6a]'
              : 'bg-white/90 text-black hover:bg-white'
          }`}
        >
          <Heart size={15} fill={wishlisted ? 'currentColor' : 'none'} />
        </button>

        <button
          type="button"
          onClick={() => onQuickAdd(product)}
          className="absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-center gap-2 bg-[#071725] py-3 text-[10px] font-bold tracking-[0.14em] text-white transition-transform group-hover:translate-y-0"
        >
          <Plus size={14} />
          QUICK ADD
        </button>
      </div>

      <div className="p-4 sm:p-5">
        <p className="text-[9px] uppercase tracking-[0.2em] text-black/35">
          {product.category}
        </p>
        <button
          type="button"
          onClick={() => onQuickAdd(product)}
          className="mt-2 block text-left text-sm font-semibold leading-5 hover:underline"
        >
          {product.name}
        </button>

        <div className="mt-2 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={10}
              fill={index < Math.round(product.rating) ? '#d4af6a' : 'none'}
              color="#d4af6a"
            />
          ))}
          <span className="ml-1 text-[10px] text-black/35">
            ({product.reviews})
          </span>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold">৳ {product.price.toLocaleString()}</span>
          {product.oldPrice && (
            <span className="text-xs text-black/30 line-through">
              ৳ {product.oldPrice.toLocaleString()}
            </span>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex gap-1.5">
            {product.colors.slice(0, 4).map((color) => (
              <span
                key={color}
                title={color}
                className={`h-3 w-3 rounded-full border border-black/15 ${getColorClass(color)}`}
              />
            ))}
          </div>
          <span
            className={`text-[9px] font-semibold uppercase tracking-[0.1em] ${
              product.stock <= 5 ? 'text-[#a44b35]' : 'text-black/35'
            }`}
          >
            {product.stock <= 5 ? `Only ${product.stock} left` : 'In stock'}
          </span>
        </div>
      </div>
    </article>
  );
}

function getColorClass(color: string) {
  switch (color) {
    case 'Black':
      return 'bg-black';
    case 'White':
      return 'bg-white';
    case 'Navy':
      return 'bg-[#132b45]';
    case 'Cream':
      return 'bg-[#e9ddc6]';
    case 'Olive':
      return 'bg-[#68714c]';
    case 'Charcoal':
      return 'bg-[#4c4c4c]';
    case 'Steel':
      return 'bg-[#aeb4b9]';
    case 'Beige':
      return 'bg-[#c8b797]';
    default:
      return 'bg-gray-300';
  }
}
