'use client';

import { Category, categories } from './shop-data';

type CategoryTabsProps = {
  active: Category;
  onChange: (category: Category) => void;
};

export default function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="overflow-x-auto border-b border-black/10 bg-[#f4efe5] [scrollbar-width:none]">
      <div className="container flex min-w-max items-center gap-1 py-3">
        {categories.map((category) => {
          const selected = active === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onChange(category)}
              className={`px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition sm:px-5 ${
                selected
                  ? 'bg-[#071725] text-white'
                  : 'text-black/50 hover:bg-black/5 hover:text-black'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
