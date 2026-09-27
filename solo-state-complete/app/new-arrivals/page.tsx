import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewArrivalsClient from './NewArrivalsClient';

export default function NewArrivalsPage(){
  return <><Navbar/><main className="min-h-screen bg-[#f4efe5]"><section className="bg-[#071725] py-20 text-white sm:py-28"><div className="container"><p className="text-xs font-bold tracking-[.32em] text-[#d4af6a]">JUST DROPPED</p><h1 className="serif mt-4 max-w-4xl text-6xl leading-[.95] sm:text-7xl lg:text-[92px]">Fresh styles.<br/><span className="text-[#d4af6a]">Just dropped.</span></h1><p className="mt-7 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">Meet the latest pieces at Solo State — selected to keep your wardrobe current without losing your own attitude.</p></div></section><NewArrivalsClient/></main><Footer/></>;
}
