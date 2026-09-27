'use client';

import { Check, Search, ShoppingBag, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import ProductCard from '../shop-components/ProductCard';
import QuickAddModal from '../shop-components/QuickAddModal';
import { Product, products } from '../shop-components/shop-data';

const arrivalProducts: Product[] = products.filter((product) =>
  [1, 2, 7, 8, 9, 11].includes(product.id),
);

type Category = 'All' | Product['category'];
type Sort = 'latest' | 'price-low' | 'price-high' | 'popular';

export default function NewArrivalClient() {
  const [category, setCategory] = useState<Category>('All');
  const [sort, setSort] = useState<Sort>('latest');
  const [query, setQuery] = useState('');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [quickAddProduct, setQuickAddProduct] = useState<Product | null>(null);
  const [cartCount, setCartCount] = useState(0);

  const visibleProducts = useMemo(() => {
    const q = query.trim().toLowerCase();

    const filtered = arrivalProducts.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category;
      const matchesSearch = !q
        ? true
        : `${product.name} ${product.category} ${product.colors.join(' ')}`
            .toLowerCase()
            .includes(q);

      return matchesCategory && matchesSearch;
    });

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      if (sort === 'popular') return b.reviews - a.reviews;
      return b.id - a.id;
    });
  }, [category, query, sort]);

  const toggleWishlist = (id: number) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const handleAddToCart = (product: Product, quantity: number) => {
    setCartCount((current) => current + quantity);
    setQuickAddProduct(null);
    void product;
  };

  const categories: Category[] = [
    'All',
    'T-Shirts',
    'Shirts',
    'Pants',
    'Jackets',
  ];

  return (
    <section id="new-arrivals" className="bg-[#f4efe5] py-10 sm:py-14 lg:py-16">
      <div className="container">
        <div className="grid gap-8 border-b border-black/10 pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#9a7640]">
              The latest drop
            </p>
            <h2 className="serif mt-3 text-4xl text-[#071725] sm:text-5xl">
              New Arrivals
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-black/50">
              Fresh additions to the collection. Find your next everyday
              favorite before it&apos;s gone.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-black/45">
            <ShoppingBag size={15} />
            <span>
              <strong className="text-black">{cartCount}</strong> item{cartCount === 1 ? '' : 's'} in cart
            </span>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.13em] transition ${
                  category === item
                    ? 'border-[#071725] bg-[#071725] text-white'
                    : 'border-black/10 bg-white text-black/55 hover:border-black/30 hover:text-black'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative min-w-0 sm:w-64">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black/30"
              />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search new arrivals..."
                className="h-11 w-full border border-black/10 bg-white pl-10 pr-9 text-xs outline-none focus:border-[#071725]"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-black/35"
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as Sort)}
              className="h-11 border border-black/10 bg-white px-4 text-xs font-semibold outline-none focus:border-[#071725]"
            >
              <option value="latest">Latest first</option>
              <option value="popular">Most popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-xs text-black/45">
            <strong className="text-black">{visibleProducts.length}</strong> new arrival
            {visibleProducts.length === 1 ? '' : 's'}
          </p>
          <p className="hidden text-[10px] font-bold uppercase tracking-[0.16em] text-black/35 sm:block">
            Limited drops · While stocks last
          </p>
        </div>

        {visibleProducts.length ? (
          <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 md:grid-cols-3 xl:grid-cols-4">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                wishlisted={wishlist.includes(product.id)}
                onWishlist={toggleWishlist}
                onQuickAdd={setQuickAddProduct}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 border border-black/10 bg-white px-6 py-20 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#f4efe5] text-black/40">
              <Search size={20} />
            </div>
            <h3 className="serif mt-5 text-3xl text-[#071725]">Nothing found</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-black/45">
              Try another keyword or choose a different category.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setCategory('All');
              }}
              className="mt-6 border border-[#071725] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.15em] transition hover:bg-[#071725] hover:text-white"
            >
              Reset
            </button>
          </div>
        )}

        <div className="mt-16 grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-3">
          {[
            ['Fresh selection', 'Latest styles added regularly.'],
            ['Quality checked', 'Selected with fit and finish in mind.'],
            ['Easy shopping', 'Nationwide delivery and easy exchange.'],
          ].map(([title, text]) => (
            <div key={title} className="bg-white px-5 py-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#071725] text-[#d4af6a]">
                  <Check size={13} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#071725]">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-black/45">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {quickAddProduct && (
        <QuickAddModal
          product={quickAddProduct}
          onClose={() => setQuickAddProduct(null)}
          onAdded={handleAddToCart}
        />
      )}
    </section>
  );
}
