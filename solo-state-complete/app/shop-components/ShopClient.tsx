'use client';

import { Filter, Search, SlidersHorizontal, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import CategoryTabs from './CategoryTabs';
import FilterPanel, { Filters } from './FilterPanel';
import ProductCard from './ProductCard';
import QuickAddModal from './QuickAddModal';
import RecentlyViewed from './RecentlyViewed';
import SizeGuide from './SizeGuide';
import { Product, products } from './shop-data';

type SortOption = 'recommended' | 'newest' | 'price-low' | 'price-high' | 'popular';

const defaultFilters: Filters = {
  category: 'All',
  sizes: [],
  colors: [],
  minPrice: 500,
  maxPrice: 5000,
  inStock: false,
};

export default function ShopClient() {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortOption>('recommended');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [quickAddProduct, setQuickAddProduct] = useState<Product | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const result = products.filter((product) => {
      const matchesQuery = normalizedQuery
        ? `${product.name} ${product.category} ${product.colors.join(' ')}`
            .toLowerCase()
            .includes(normalizedQuery)
        : true;

      const matchesCategory =
        filters.category === 'All' || product.category === filters.category;

      const matchesSize =
        !filters.sizes.length ||
        filters.sizes.some((size) => product.sizes.includes(size));

      const matchesColor =
        !filters.colors.length ||
        filters.colors.some((color) => product.colors.includes(color));

      const matchesPrice =
        product.price >= filters.minPrice && product.price <= filters.maxPrice;

      const matchesStock = !filters.inStock || product.stock > 0;

      return (
        matchesQuery &&
        matchesCategory &&
        matchesSize &&
        matchesColor &&
        matchesPrice &&
        matchesStock
      );
    });

    return [...result].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      if (sort === 'popular') return b.reviews - a.reviews;
      if (sort === 'newest') return b.id - a.id;
      return a.id - b.id;
    });
  }, [filters, query, sort]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleCategoryChange = (category: Filters['category']) => {
    setFilters((current) => ({ ...current, category }));
    setVisibleCount(8);
  };

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

  const resetFilters = () => {
    setFilters(defaultFilters);
    setQuery('');
    setSort('recommended');
    setVisibleCount(8);
  };

  const activeFilterCount =
    filters.sizes.length +
    filters.colors.length +
    (filters.category !== 'All' ? 1 : 0) +
    (filters.inStock ? 1 : 0) +
    (filters.minPrice !== 500 || filters.maxPrice !== 5000 ? 1 : 0);

  return (
    <>
      <CategoryTabs active={filters.category} onChange={handleCategoryChange} />

      <section className="bg-[#f4efe5] py-7 sm:py-10">
        <div className="container">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-black/35"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setVisibleCount(8);
                }}
                placeholder="Search products, categories, colors..."
                className="h-12 w-full border border-black/10 bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-black/30 focus:border-[#071725]"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-black/40"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="flex gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setFilterOpen(true)}
                className="flex h-12 flex-1 items-center justify-center gap-2 border border-black/10 bg-white text-xs font-bold uppercase tracking-[0.12em]"
              >
                <Filter size={15} />
                Filter
                {activeFilterCount > 0 && (
                  <span className="grid h-5 min-w-5 place-items-center rounded-full bg-[#071725] px-1 text-[9px] text-white">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              <SortSelect sort={sort} setSort={setSort} mobile />
            </div>
          </div>

          <div className="mt-7 flex items-center justify-between gap-4">
            <p className="text-xs text-black/45">
              <span className="font-semibold text-black">{filteredProducts.length}</span>{' '}
              {filteredProducts.length === 1 ? 'product' : 'products'}
              {query && (
                <>
                  {' '}for <span className="font-semibold text-black">&quot;{query}&quot;</span>
                </>
              )}
            </p>

            <div className="hidden items-center gap-3 lg:flex">
              <button
                type="button"
                onClick={() => setSizeGuideOpen(true)}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-black/50 hover:text-black"
              >
                <SlidersHorizontal size={14} />
                Size Guide
              </button>
              <SortSelect sort={sort} setSort={setSort} />
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[230px_1fr] xl:grid-cols-[250px_1fr]">
            <FilterPanel filters={filters} setFilters={setFilters} />

            <div>
              {activeFilterCount > 0 && (
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/35">
                    Active:
                  </span>
                  {filters.category !== 'All' && <FilterChip label={filters.category} />}
                  {filters.sizes.map((size) => (
                    <FilterChip key={size} label={size} />
                  ))}
                  {filters.colors.map((color) => (
                    <FilterChip key={color} label={color} />
                  ))}
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="ml-1 text-[10px] font-bold uppercase tracking-[0.12em] underline"
                  >
                    Clear all
                  </button>
                </div>
              )}

              {visibleProducts.length ? (
                <>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:gap-x-5 md:grid-cols-3 xl:grid-cols-4">
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

                  {visibleCount < filteredProducts.length && (
                    <div className="mt-12 flex justify-center">
                      <button
                        type="button"
                        onClick={() => setVisibleCount((current) => current + 8)}
                        className="border border-[#071725] px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.16em] transition hover:bg-[#071725] hover:text-white"
                      >
                        Load More
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <EmptyState query={query} onReset={resetFilters} />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#071725] py-14 text-white sm:py-16">
        <div className="container grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.3em] text-[#d4af6a]">
              NEED HELP FINDING YOUR FIT?
            </p>
            <h2 className="serif mt-3 text-3xl sm:text-4xl">Not sure about your size?</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
              Check our simple size guide before ordering. You can also contact Solo State for product and fit support.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setSizeGuideOpen(true)}
            className="w-fit border border-[#d4af6a] px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#d4af6a] transition hover:bg-[#d4af6a] hover:text-black"
          >
            Open Size Guide
          </button>
        </div>
      </section>

      <RecentlyViewed
        products={products.slice(0, 4)}
        onProductClick={setQuickAddProduct}
      />

      <QuickAddModal
        product={quickAddProduct}
        onClose={() => setQuickAddProduct(null)}
        onAdded={handleAddToCart}
      />
      <SizeGuide open={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />

      {cartCount > 0 && (
        <div className="fixed bottom-5 right-5 z-50 rounded-full bg-[#071725] px-5 py-3 text-xs font-semibold text-white shadow-2xl">
          {cartCount} item{cartCount > 1 ? 's' : ''} ready for cart
        </div>
      )}

      {filterOpen && (
        <div className="fixed inset-0 z-[70] bg-black/50 lg:hidden">
          <div className="absolute inset-y-0 right-0 w-[90%] max-w-sm overflow-y-auto bg-[#f4efe5] p-5 shadow-2xl">
            <FilterPanel
              filters={filters}
              setFilters={setFilters}
              mobile
              onClose={() => setFilterOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}

function SortSelect({
  sort,
  setSort,
  mobile = false,
}: {
  sort: SortOption;
  setSort: (value: SortOption) => void;
  mobile?: boolean;
}) {
  return (
    <label
      className={`flex items-center gap-2 border border-black/10 bg-white px-3 ${
        mobile ? 'h-12 flex-1' : 'h-10'
      }`}
    >
      <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.12em] text-black/35">
        Sort
      </span>
      <select
        value={sort}
        onChange={(event) => setSort(event.target.value as SortOption)}
        className="min-w-0 bg-transparent text-xs outline-none"
      >
        <option value="recommended">Recommended</option>
        <option value="newest">Newest</option>
        <option value="price-low">Price: Low → High</option>
        <option value="price-high">Price: High → Low</option>
        <option value="popular">Most Popular</option>
      </select>
    </label>
  );
}

function FilterChip({ label }: { label: string }) {
  return (
    <span className="bg-white px-3 py-1.5 text-[10px] font-medium text-black/60">
      {label}
    </span>
  );
}

function EmptyState({ query, onReset }: { query: string; onReset: () => void }) {
  return (
    <div className="border border-black/10 bg-white px-6 py-16 text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#f4efe5]">
        <Search size={20} className="text-black/40" />
      </div>
      <h2 className="serif mt-5 text-3xl">No products found</h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-black/45">
        {query
          ? `We couldn't find anything matching “${query}”. Try another search or browse all products.`
          : 'Try changing your filters to discover more products.'}
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-7 bg-[#071725] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white"
      >
        View All Products
      </button>
    </div>
  );
}
