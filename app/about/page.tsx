"use client";

import Link from "next/link";
import { ArrowRight, Award, Check, Heart, MapPin, Quote, ShieldCheck, Sparkles, Truck, Users, X } from "lucide-react";
import { useState } from "react";

const values = [
  { icon: Sparkles, title: "Style with Purpose", text: "We select pieces that feel modern, wearable and confident—not just trendy for a moment." },
  { icon: ShieldCheck, title: "Quality First", text: "Every collection is chosen with fabric feel, finishing, fit and everyday durability in mind." },
  { icon: Heart, title: "Customer Comes First", text: "We listen to what customers actually want and build our collection around real needs." },
  { icon: Award, title: "Honest Value", text: "Our goal is premium-looking style at a price that makes sense for everyday Bangladesh." },
];

const milestones = [
  ["01", "The idea", "Solo State started with a simple belief: looking good should not have to feel complicated or overpriced."],
  ["02", "Finding our style", "We shaped a clean, masculine visual identity around modern cuts, versatile colors and refined details."],
  ["03", "Growing with customers", "Customer feedback became part of how we choose products, sizes, colors and new arrivals."],
  ["04", "The next chapter", "From a local showroom to a stronger online experience, we are building Solo State step by step."],
];

export default function AboutPage() {
  const [showStory, setShowStory] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7f3eb] text-[#071725]">
      <section className="relative overflow-hidden bg-[#071725] text-white">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(212,175,106,.45), transparent 30%), radial-gradient(circle at 85% 70%, rgba(255,255,255,.08), transparent 28%)" }} />
        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div>
            <p className="mb-5 text-xs font-bold tracking-[.35em] text-[#d4af6a]">THE STORY BEHIND SOLO STATE</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[.98] sm:text-7xl">More than clothes.<br /><span className="text-[#d4af6a]">A state of mind.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">Solo State is a men&apos;s fashion brand built around one idea: your clothes should reflect the attitude you already carry.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button onClick={() => setShowStory(true)} className="inline-flex items-center gap-2 bg-[#d4af6a] px-6 py-4 text-sm font-bold text-[#071725]">OUR STORY <ArrowRight size={17} /></button>
              <Link href="/shop" className="inline-flex items-center gap-2 border border-white/30 px-6 py-4 text-sm font-bold">EXPLORE COLLECTION</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="aspect-[4/5] overflow-hidden border border-white/10 bg-gradient-to-br from-[#d4af6a]/20 via-white/5 to-transparent p-3 shadow-2xl">
              <div className="flex h-full flex-col justify-between border border-white/10 p-7 sm:p-10">
                <div className="flex items-center justify-between text-xs tracking-[.25em] text-white/50"><span>SOLO STATE</span><span>EST. 2024</span></div>
                <div><p className="text-6xl font-semibold leading-none sm:text-8xl">SS</p><p className="mt-4 text-sm tracking-[.35em] text-[#d4af6a]">DEFINE YOUR ATTITUDE</p></div>
                <div className="flex items-end justify-between"><span className="text-sm text-white/50">MEN&apos;S FASHION</span><span className="h-16 w-16 rounded-full border border-[#d4af6a]/50" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="text-xs font-bold tracking-[.3em] text-[#9b7940]">WHY WE EXIST</p><h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Fashion should feel <span className="text-[#9b7940]">personal.</span></h2></div>
          <div className="space-y-6 text-base leading-8 text-[#53606b] sm:text-lg"><p>We believe great style is not about wearing the loudest thing in the room. It is about finding the right fit, the right detail and the confidence to make it your own.</p><p>That is why Solo State focuses on practical men&apos;s fashion with a refined edge—pieces that can move from everyday life to the moments that matter.</p><p>We are building a brand where customers can discover good-looking products without feeling pressured, confused or priced out.</p></div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl"><p className="text-xs font-bold tracking-[.3em] text-[#9b7940]">WHAT DRIVES US</p><h2 className="mt-4 text-4xl font-semibold sm:text-5xl">The Solo State standard.</h2></div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => <article key={title} className="border border-[#e8e1d5] p-7 transition hover:-translate-y-1 hover:shadow-xl"><Icon className="text-[#a9864a]" size={25} /><h3 className="mt-6 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-[#68737c]">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#071725] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
            <div><p className="text-xs font-bold tracking-[.3em] text-[#d4af6a]">OUR JOURNEY</p><h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Built step<br />by step.</h2></div>
            <div className="divide-y divide-white/10">{milestones.map(([num, title, text]) => <div key={num} className="grid gap-5 py-7 sm:grid-cols-[70px_180px_1fr]"><span className="text-sm font-bold text-[#d4af6a]">{num}</span><h3 className="text-xl font-semibold">{title}</h3><p className="text-sm leading-7 text-white/60">{text}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 border border-[#ded5c7] bg-white p-8 sm:p-12"><Quote className="text-[#d4af6a]" size={38} /><p className="mt-7 max-w-3xl text-2xl font-medium leading-10 sm:text-4xl">“We don&apos;t want to tell you who to be. We want to make clothes that help you show who you already are.”</p><p className="mt-7 text-sm font-bold tracking-[.2em] text-[#8f6e39]">SOLO STATE · DEFINE YOUR ATTITUDE</p></div>
          <div className="bg-[#d4af6a] p-8 sm:p-10"><MapPin size={28} /><h3 className="mt-10 text-2xl font-semibold">From Sonagazi, built for everywhere.</h3><p className="mt-4 text-sm leading-7 text-[#25303a]">Our roots are local. Our ambition is to make Solo State accessible to customers across Bangladesh through a better online shopping experience.</p><Link href="/shop" className="mt-8 inline-flex items-center gap-2 border-b-2 border-[#071725] pb-2 text-sm font-bold">SHOP ONLINE <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-3 lg:px-8">
          {[[Users,"Customer-led","Collections shaped by real customer needs."],[Truck,"Delivery-ready","Built for a smooth online shopping experience."],[Check,"Easy to understand","Clear products, pricing and essential details."]].map(([Icon,title,text]) => <div key={title as string} className="flex gap-4 border border-[#ebe5da] p-6"><Icon as any size={25} className="mt-1 text-[#9b7940]" /><div><h3 className="font-semibold">{title as string}</h3><p className="mt-1 text-sm leading-6 text-[#68737c]">{text as string}</p></div></div>)}
        </div>
      </section>

      <section className="bg-[#071725] px-5 py-20 text-center text-white">
        <p className="text-xs font-bold tracking-[.35em] text-[#d4af6a]">YOUR STYLE. YOUR STATE.</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold sm:text-6xl">Ready to define your attitude?</h2>
        <Link href="/shop" className="mt-8 inline-flex items-center gap-2 bg-[#d4af6a] px-7 py-4 text-sm font-bold text-[#071725]">EXPLORE THE COLLECTION <ArrowRight size={17} /></Link>
      </section>

      {showStory && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5" onClick={() => setShowStory(false)}><div className="max-h-[85vh] w-full max-w-2xl overflow-auto bg-[#f7f3eb] p-7 text-[#071725] sm:p-10" onClick={e => e.stopPropagation()}><div className="flex items-center justify-between"><p className="text-xs font-bold tracking-[.3em] text-[#9b7940]">OUR STORY</p><button onClick={() => setShowStory(false)} aria-label="Close"><X /></button></div><h3 className="mt-5 text-3xl font-semibold">A local idea with a bigger ambition.</h3><p className="mt-5 leading-8 text-[#59656e]">Solo State was shaped around a simple observation: men want clothes that look good, feel good and make sense for their budget. Instead of chasing every trend, we focus on useful pieces, refined styling and an experience that respects the customer.</p><p className="mt-5 leading-8 text-[#59656e]">As we grow, the goal is simple—keep listening, keep improving and make it easier for people to find their own style.</p><Link href="/shop" onClick={() => setShowStory(false)} className="mt-7 inline-flex items-center gap-2 bg-[#071725] px-6 py-3 text-sm font-bold text-white">EXPLORE PRODUCTS <ArrowRight size={16} /></Link></div></div>}
    </main>
  );
}
