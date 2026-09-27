'use client';

import { Check, RotateCcw, X } from 'lucide-react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { Category } from './shop-data';

export type Filters = {
  category: Category;
  sizes: string[];
  colors: string[];
  minPrice: number;
  maxPrice: number;
  inStock: boolean;
};

type FilterPanelProps = {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
  mobile?: boolean;
  onClose?: () => void;
};

const sizes = ['S', 'M', 'L', 'XL', 'XXL', '30', '32', '34', '36'];
const colors = ['Black', 'White', 'Navy', 'Cream', 'Olive', 'Charcoal'];

export default function FilterPanel({
  filters,
  setFilters,
  mobile = false,
  onClose,
}: FilterPanelProps) {
  const toggleArrayValue = (
    key: 'sizes' | 'colors',
    value: string,
  ) => {
    setFilters((current) => {
      const exists = current[key].includes(value);
      return {
        ...current,
        [key]: exists
          ? current[key].filter((item) => item !== value)
          : [...current[key], value],
      };
    });
  };

  const reset = () => {
    setFilters({
      category: 'All',
      sizes: [],
      colors: [],
      minPrice: 500,
      maxPrice: 5000,
      inStock: false,
    });
  };

  return (
    <aside className={`${mobile ? 'w-full' : 'hidden lg:block'}`}>
      {mobile && (
        <div className="flex items-center justify-between border-b border-black/10 pb-5">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.25em] text-black/40">
              REFINE
            </p>
            <h2 className="serif mt-1 text-2xl">Filter Products</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close filters">
            <X size={20} />
          </button>
        </div>
      )}

      <div className="space-y-8 pt-6">
        <FilterSection title="Category">
          <div className="space-y-2">
            {(['All', 'T-Shirts', 'Shirts', 'Pants', 'Panjabi', 'Jackets', 'Accessories'] as Category[]).map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setFilters((current) => ({ ...current, category }))
                  }
                  className={`flex w-full items-center justify-between py-1 text-sm ${
                    filters.category === category
                      ? 'font-semibold text-black'
                      : 'text-black/50 hover:text-black'
                  }`}
                >
                  {category}
                  {filters.category === category && <Check size={15} />}
                </button>
              ),
            )}
          </div>
        </FilterSection>

        <FilterSection title="Size">
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => toggleArrayValue('sizes', size)}
                className={`min-w-10 border px-3 py-2 text-xs transition ${
                  filters.sizes.includes(size)
                    ? 'border-[#071725] bg-[#071725] text-white'
                    : 'border-black/10 bg-white text-black/60 hover:border-black/30'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Color">
          <div className="grid grid-cols-2 gap-2">
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => toggleArrayValue('colors', color)}
                className={`flex items-center gap-2 border px-3 py-2 text-left text-xs transition ${
                  filters.colors.includes(color)
                    ? 'border-[#071725] bg-[#071725] text-white'
                    : 'border-black/10 bg-white text-black/60 hover:border-black/30'
                }`}
              >
                <span
                  className={`h-3 w-3 rounded-full border border-black/15 ${
                    color === 'Black'
                      ? 'bg-black'
                      : color === 'White'
                        ? 'bg-white'
                        : color === 'Navy'
                          ? 'bg-[#132b45]'
                          : color === 'Cream'
                            ? 'bg-[#e9ddc6]'
                            : color === 'Olive'
                              ? 'bg-[#68714c]'
                              : 'bg-[#4c4c4c]'
                  }`}
                />
                {color}
              </button>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Price Range">
          <div className="flex items-center gap-2">
            <label className="flex-1">
              <span className="sr-only">Minimum price</span>
              <input
                type="number"
                min={0}
                value={filters.minPrice}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    minPrice: Number(event.target.value),
                  }))
                }
                className="w-full border border-black/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#071725]"
              />
            </label>
            <span className="text-black/30">—</span>
            <label className="flex-1">
              <span className="sr-only">Maximum price</span>
              <input
                type="number"
                min={0}
                value={filters.maxPrice}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    maxPrice: Number(event.target.value),
                  }))
                }
                className="w-full border border-black/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#071725]"
              />
            </label>
          </div>
          <p className="mt-2 text-[10px] text-black/35">৳500 — ৳5,000</p>
        </FilterSection>

        <FilterSection title="Availability">
          <button
            type="button"
            onClick={() =>
              setFilters((current) => ({
                ...current,
                inStock: !current.inStock,
              }))
            }
            className="flex items-center gap-3 text-sm text-black/65"
          >
            <span
              className={`grid h-5 w-5 place-items-center border ${
                filters.inStock
                  ? 'border-[#071725] bg-[#071725] text-white'
                  : 'border-black/20 bg-white'
              }`}
            >
              {filters.inStock && <Check size={13} />}
            </span>
            In stock only
          </button>
        </FilterSection>

        <button
          type="button"
          onClick={reset}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-black/45 hover:text-black"
        >
          <RotateCcw size={14} />
          Reset Filters
        </button>
      </div>
    </aside>
  );
}

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/45">
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}
