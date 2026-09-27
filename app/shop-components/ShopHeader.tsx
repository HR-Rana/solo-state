import Link from 'next/link';

export default function ShopHeader() {
  return (
    <section className="bg-[#071725] px-4 py-14 text-white sm:py-20">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold tracking-[0.36em] text-[#d4af6a]">
              SOLO STATE / SHOP
            </p>
            <h1 className="serif mt-4 text-5xl leading-none sm:text-6xl lg:text-7xl">
              Define Your <span className="text-[#d4af6a]">Attitude.</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              Explore our men&apos;s collection — everyday essentials, elevated
              classics and statement pieces selected for your style.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-white/45">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/80">Shop</span>
          </div>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
          {[
            ['Nationwide Delivery', 'Across Bangladesh'],
            ['Cash on Delivery', 'Easy & familiar checkout'],
            ['Easy Exchange', 'Support when you need it'],
          ].map(([title, text]) => (
            <div key={title} className="bg-[#0b2031] px-5 py-5">
              <p className="text-sm font-semibold">{title}</p>
              <p className="mt-1 text-xs text-white/45">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
