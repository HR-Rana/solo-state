'use client';
import Link from 'next/link';
import { ArrowRight, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const initial = [
  { id: 'nebular-black', name: 'Nebular Drop Shoulder T-Shirt', price: 890, old: 1050, image: '/images/tshirt.svg', meta: 'Black · XL' },
  { id: 'royal-shirt', name: 'Royal Oxford Shirt', price: 1290, old: 1490, image: '/images/shirt.svg', meta: 'Navy · L' },
  { id: 'essential-pants', name: 'Essential Twill Pant', price: 1190, old: 1390, image: '/images/pants.svg', meta: 'Olive · 32' },
  { id: 'heritage-panjabi', name: 'Heritage Panjabi', price: 1790, old: 1990, image: '/images/panjabi.svg', meta: 'Cream · L' },
];

export default function FavoritesPage() {
  const [items, setItems] = useState(initial);
  const remove = (id:string) => setItems(prev=>prev.filter(x=>x.id!==id));
  return <main className="min-h-screen bg-[#f4efe5]"><Navbar /><section className="bg-[#071725] py-20 text-white sm:py-24"><div className="container"><p className="text-xs font-bold tracking-[.3em] text-[#d4af6a]">YOUR COLLECTION</p><h1 className="serif mt-4 text-6xl sm:text-7xl">Favourites.</h1><p className="mt-5 max-w-xl text-sm leading-7 text-white/60">Keep the pieces you love close. Save them now and decide when you&apos;re ready.</p></div></section>
    <section className="container py-16 sm:py-20"><div className="mb-8 flex items-end justify-between gap-4"><div><h2 className="serif text-3xl sm:text-4xl">Saved pieces</h2><p className="mt-2 text-sm text-black/50">{items.length} {items.length===1?'item':'items'} saved</p></div><Link href="/shop" className="hidden items-center gap-2 text-xs font-bold tracking-wide text-[#8b6b35] sm:flex">CONTINUE SHOPPING <ArrowRight size={15}/></Link></div>
      {items.length ? <div className="grid gap-4">{items.map(item=><article key={item.id} className="grid gap-5 border border-black/10 bg-white p-4 sm:grid-cols-[180px_1fr_auto] sm:items-center sm:p-5"><Link href={`/product/${item.id}`} className="overflow-hidden bg-[#eee8dc]"><img src={item.image} alt={item.name} className="h-48 w-full object-cover transition duration-500 hover:scale-105 sm:h-44" /></Link><div><p className="text-[10px] font-bold tracking-[.2em] text-[#a18348]">SOLO STATE</p><Link href={`/product/${item.id}`}><h3 className="serif mt-2 text-2xl hover:text-[#8b6b35]">{item.name}</h3></Link><p className="mt-2 text-sm text-black/45">{item.meta}</p><div className="mt-4 flex items-center gap-3"><span className="font-semibold">৳{item.price.toLocaleString()}</span><span className="text-sm text-black/35 line-through">৳{item.old.toLocaleString()}</span></div></div><div className="flex items-center gap-3 sm:flex-col"><Link href={`/product/${item.id}`} className="inline-flex items-center gap-2 bg-[#071725] px-5 py-3 text-xs font-bold tracking-wide text-white">VIEW <ArrowRight size={14}/></Link><button onClick={()=>remove(item.id)} className="grid h-11 w-11 place-items-center border border-black/10 text-black/45 hover:border-red-200 hover:text-red-500" aria-label="Remove favourite"><Trash2 size={17}/></button></div></article>)}</div> : <div className="border border-black/10 bg-white px-6 py-20 text-center"><Heart size={34} className="mx-auto text-[#a18348]"/><h2 className="serif mt-5 text-3xl">Nothing saved yet.</h2><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-black/50">Tap the heart on products you love and they will appear here.</p><Link href="/shop" className="gold-btn mt-7 inline-flex items-center gap-3 px-7 py-4 text-xs font-bold tracking-[.12em]">EXPLORE SHOP <ArrowRight size={15}/></Link></div>}
      <div className="mt-8 grid gap-3 sm:grid-cols-3"><div className="border border-black/10 bg-white p-5"><Heart size={18} className="text-[#a18348]"/><p className="mt-3 text-sm font-semibold">Save your favourites</p><p className="mt-1 text-xs leading-5 text-black/45">Keep your shortlist ready for later.</p></div><div className="border border-black/10 bg-white p-5"><ShoppingBag size={18} className="text-[#a18348]"/><p className="mt-3 text-sm font-semibold">Easy add to cart</p><p className="mt-1 text-xs leading-5 text-black/45">Choose your size and move from favourite to cart.</p></div><div className="border border-black/10 bg-white p-5"><Heart size={18} className="text-[#a18348]"/><p className="mt-3 text-sm font-semibold">Sign in to sync</p><p className="mt-1 text-xs leading-5 text-black/45">Keep your saved pieces across devices.</p></div></div>
    </section><Footer /></main>;
}
