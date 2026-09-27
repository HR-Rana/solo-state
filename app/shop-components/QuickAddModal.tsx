'use client';

import { Minus, Plus, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';
import { Product } from './shop-data';

type QuickAddModalProps = {
  product: Product | null;
  onClose: () => void;
  onAdded: (product: Product, quantity: number, size: string) => void;
};

export default function QuickAddModal({ product, onClose, onAdded }: QuickAddModalProps) {
  const [size, setSize] = useState(product?.sizes[0] ?? '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return null;
  }

  const handleClose = () => {
    setQuantity(1);
    setSize(product.sizes[0] ?? '');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-5">
      <div className="w-full max-w-lg bg-[#f4efe5] shadow-2xl">
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <div>
            <p className="text-[9px] font-semibold tracking-[0.25em] text-black/40">
              QUICK ADD
            </p>
            <h2 className="mt-1 text-lg font-semibold">{product.name}</h2>
          </div>
          <button type="button" onClick={handleClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="grid gap-5 p-5 sm:grid-cols-[150px_1fr]">
          <div className="aspect-[4/5] overflow-hidden bg-[#e9e3d8]">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-lg font-bold">৳ {product.price.toLocaleString()}</p>

            <div className="mt-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/45">
                Select Size
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSize(item)}
                    className={`min-w-11 border px-3 py-2 text-xs ${
                      size === item
                        ? 'border-[#071725] bg-[#071725] text-white'
                        : 'border-black/10 bg-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/45">
                Quantity
              </p>
              <div className="flex items-center border border-black/10 bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="grid h-9 w-9 place-items-center"
                >
                  <Minus size={13} />
                </button>
                <span className="w-8 text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => Math.min(product.stock, current + 1))
                  }
                  className="grid h-9 w-9 place-items-center"
                >
                  <Plus size={13} />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                onAdded(product, quantity, size);
                handleClose();
              }}
              className="mt-7 flex w-full items-center justify-center gap-2 bg-[#071725] px-5 py-4 text-xs font-bold tracking-[0.14em] text-white transition hover:bg-[#102c42]"
            >
              <ShoppingBag size={16} />
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
