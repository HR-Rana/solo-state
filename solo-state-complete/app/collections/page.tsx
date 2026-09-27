'use client';

import Link from 'next/link';
import { ArrowRight, Check, ChevronRight, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const collections = [
  {
    title: 'The Essential Edit',
    eyebrow: 'EVERYDAY · 01',
    description: 'Clean everyday pieces built around comfort, easy styling and dependable quality.',
    image: '/images/tshirt.svg',
    href: '/shop?collection=essential',
    count: '24 pieces',
  },
  {
    title: 'Royal Panjabi',
    eyebrow: 'TRADITION · 02',
    description: 'Modern cuts and refined details for festive days, family gatherings and special moments.',
    image: '/images/panjabi.svg',
    href: '/shop?collection=panjabi',
    count: '16 pieces',
  },
  {
    title: 'Modern Formal',
    eyebrow: 'SMART · 03',
    description: 'Sharp shirts and tailored trousers for a polished look without overdoing it.',
    image: '/images/shirt.svg',
    href: '/shop?collection=formal',
    count: '21 pieces',
  },
  {
    title: 'Weekend Uniform',
    eyebrow: 'RELAXED · 04',
    description: 'Relaxed silhouettes and versatile colours made for easy weekends and casual plans.',
    image: '/images/pants.svg',
    href: '/shop?collection=weekend',
    count: '18 pieces',
  },
  {
    title: 'Statement Layer',
    eyebrow: 'OUTERWEAR · 05',
    description: 'Light layers that add character to simple outfits while keeping the look effortless.',
    image: '/images/jacket.svg',
    href: '/shop?collection=layers',
    count: '12 pieces',
  },
  {
    title: 'The Gift Edit',
    eyebrow: 'CURATED · 06',
    description: 'Easy-to-love pieces selected for birthdays, celebrations and thoughtful gifting.',
    image: '/images/watch.svg',
    href: '/shop?collection=gifts',
    count: '14 pieces',
  },
];

const principles = ['Quality-first selection', 'Wearable modern cuts', 'Fair, customer-friendly pricing', 'Nationwide delivery'];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-[#f4efe5]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#071725] text-white">
        <div className="absolute inset-0 opacity-30">
          <img src="/images/story.svg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#071725] via-[#071725]/95 to-[#071725]/45" />
        <div className="container relative flex min-h-[560px] items-center py-20">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-[#d4af6a]">
              <Sparkles size={16} />
              <span className="text-xs font-semibold tracking-[.32em]">SOLO STATE COLLECTIONS</span>
            </div>
            <h1 className="serif text-6xl leading-[.95] sm:text-7xl lg:text-[100px]">Curated for your attitude.</h1>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Discover our carefully curated collections — from everyday essentials to refined festive and formal looks. Pick a mood, find your pieces, and make it yours.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/shop" className="gold-btn inline-flex items-center gap-3 px-7 py-4 text-xs font-bold tracking-[.13em]">
                SHOP ALL <ArrowRight size={16} />
              </Link>
              <Link href="/new-arrivals" className="outline-btn inline-flex items-center gap-3 px-7 py-4 text-xs font-bold tracking-[.13em]">
                NEW ARRIVALS <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#111418]/10 bg-white">
        <div className="container grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item, i) => (
            <div key={item} className="flex items-center gap-3 border-b border-[#111418]/10 px-2 py-5 text-sm last:border-0 sm:border-r sm:px-6 lg:border-b-0">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#071725] text-[#d4af6a]"><Check size={14} /></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-20 sm:py-24">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold tracking-[.3em] text-[#a18348]">EXPLORE BY MOOD</p>
            <h2 className="serif mt-3 text-4xl sm:text-5xl">Our collections</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-black/55">A collection is more than a category. It is a complete direction for how you want to dress and feel.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((item, index) => (
            <Link key={item.title} href={item.href} className={`group relative overflow-hidden bg-[#071725] text-white ${index === 0 || index === 3 ? 'md:min-h-[520px]' : 'md:min-h-[430px]'}`}>
              <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071725] via-[#071725]/65 to-transparent" />
              <div className="relative flex h-full min-h-[430px] flex-col justify-end p-7 sm:p-9">
                <div className="mb-auto flex justify-between">
                  <span className="border border-[#d4af6a]/50 bg-black/10 px-3 py-2 text-[10px] font-bold tracking-[.22em] text-[#d4af6a]">{item.eyebrow}</span>
                  <span className="text-xs text-white/55">{item.count}</span>
                </div>
                <div>
                  <h3 className="serif text-3xl sm:text-4xl">{item.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">{item.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-[.15em] text-[#d4af6a]">EXPLORE COLLECTION <ArrowRight size={15} className="transition group-hover:translate-x-1" /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#071725] py-20 text-white sm:py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[.3em] text-[#d4af6a]">THE SOLO STATE WAY</p>
            <h2 className="serif mt-4 text-4xl leading-tight sm:text-6xl">Build a wardrobe that feels like you.</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              We keep the selection focused: pieces that are easy to wear, easy to combine and worth reaching for again. No unnecessary noise — just your style, defined your way.
            </p>
            <Link href="/shop" className="gold-btn mt-8 inline-flex items-center gap-3 px-7 py-4 text-xs font-bold tracking-[.13em]">SHOP THE COLLECTIONS <ArrowRight size={16} /></Link>
          </div>
          <div className="relative overflow-hidden border border-white/10 bg-[#102434] p-8 sm:p-10">
            <img src="/images/campaign.svg" alt="Solo State campaign" className="h-[320px] w-full object-cover opacity-80" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border border-white/10 bg-[#071725]/85 px-5 py-4 backdrop-blur">
              <span className="text-xs tracking-[.2em] text-[#d4af6a]">DEFINE YOUR ATTITUDE</span>
              <span className="text-xs text-white/50">EST. SOLO STATE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-20 text-center sm:py-24">
        <p className="text-xs font-bold tracking-[.3em] text-[#a18348]">NOT SURE WHERE TO START?</p>
        <h2 className="serif mt-4 text-4xl sm:text-5xl">Start with what is new.</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-black/55">Fresh arrivals are the easiest way to discover the latest colours, silhouettes and pieces at Solo State.</p>
        <Link href="/new-arrivals" className="gold-btn mt-8 inline-flex items-center gap-3 px-8 py-4 text-xs font-bold tracking-[.13em]">VIEW NEW ARRIVALS <ArrowRight size={16} /></Link>
      </section>

      <Footer />
    </main>
  );
}
