import Link from 'next/link';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function NewArrivalHeader() {
  return (
    <section className="relative overflow-hidden bg-[#071725] px-4 py-16 text-white sm:py-20 lg:py-24">
      <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full border border-[#d4af6a]/20" />
      <div className="absolute -bottom-36 -left-24 h-80 w-80 rounded-full border border-white/10" />

      <div className="container relative">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.34em] text-[#d4af6a]">
              <Sparkles size={14} />
              Solo State / New Arrivals
            </div>

            <h1 className="serif mt-5 text-5xl leading-[0.95] sm:text-6xl lg:text-8xl">
              Fresh styles.
              <br />
              <span className="text-[#d4af6a]">Just dropped.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              Discover the latest pieces added to Solo State — selected for
              modern men who want everyday comfort with a refined attitude.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#new-arrivals"
                className="inline-flex items-center gap-3 bg-[#d4af6a] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.16em] text-black transition hover:bg-white"
              >
                Explore New Arrivals
                <ArrowDown size={15} />
              </a>
              <Link
                href="/shop"
                className="inline-flex items-center border border-white/20 px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/80 transition hover:border-white hover:text-white"
              >
                View All Products
              </Link>
            </div>
          </div>

          <div className="hidden border-l border-white/10 pl-8 lg:block">
            <p className="text-4xl font-semibold text-[#d4af6a]">NEW</p>
            <p className="mt-2 max-w-[170px] text-xs leading-5 text-white/40">
              Latest drops, fresh colors and new season essentials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
