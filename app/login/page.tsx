'use client';
import Link from 'next/link';
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LoginPage() {
  const [show, setShow] = useState(false);
  return <main className="min-h-screen bg-[#f4efe5]"><Navbar /><section className="container grid min-h-[calc(100vh-72px)] items-center gap-12 py-12 lg:grid-cols-2">
    <div className="hidden overflow-hidden bg-[#071725] lg:block"><img src="/images/hero.svg" alt="Solo State" className="h-[680px] w-full object-cover opacity-85" /></div>
    <div className="mx-auto w-full max-w-md">
      <p className="text-xs font-bold tracking-[.3em] text-[#a18348]">WELCOME BACK</p><h1 className="serif mt-3 text-5xl">Sign in to Solo State.</h1><p className="mt-4 text-sm leading-6 text-black/55">Save favourites, track orders and keep your shopping experience in one place.</p>
      <form className="mt-9 space-y-5" onSubmit={(e)=>e.preventDefault()}>
        <label className="block"><span className="mb-2 block text-xs font-semibold tracking-wide">EMAIL ADDRESS</span><div className="flex items-center border border-black/15 bg-white px-4"><Mail size={17} className="text-black/40" /><input type="email" placeholder="you@example.com" className="w-full bg-transparent px-3 py-4 text-sm outline-none" /></div></label>
        <label className="block"><span className="mb-2 block text-xs font-semibold tracking-wide">PASSWORD</span><div className="flex items-center border border-black/15 bg-white px-4"><LockKeyhole size={17} className="text-black/40" /><input type={show?'text':'password'} placeholder="Your password" className="w-full bg-transparent px-3 py-4 text-sm outline-none" /><button type="button" onClick={()=>setShow(!show)} className="text-black/45">{show?<EyeOff size={17}/>:<Eye size={17}/>}</button></div></label>
        <div className="flex items-center justify-between text-xs"><label className="flex items-center gap-2"><input type="checkbox" /> Remember me</label><button type="button" className="text-[#8b6b35]">Forgot password?</button></div>
        <button className="gold-btn flex w-full items-center justify-center gap-3 px-7 py-4 text-xs font-bold tracking-[.14em]">SIGN IN <ArrowRight size={16}/></button>
      </form>
      <div className="my-7 flex items-center gap-4 text-xs text-black/35"><span className="h-px flex-1 bg-black/10" /> OR <span className="h-px flex-1 bg-black/10" /></div>
      <button className="flex w-full items-center justify-center gap-3 border border-black/15 bg-white px-7 py-4 text-xs font-bold tracking-wide">CONTINUE WITH GOOGLE</button>
      <p className="mt-7 text-center text-sm text-black/55">New to Solo State? <Link href="/login?mode=signup" className="font-semibold text-[#8b6b35]">Create an account</Link></p>
      <div className="mt-8 flex items-center justify-center gap-2 text-xs text-black/40"><ShieldCheck size={15}/> Your account information stays protected.</div>
    </div>
  </section><Footer /></main>;
}
