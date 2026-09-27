"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  Heart,
  Minus,
  Plus,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";

const products = [
  {
    id: "nebular-black",
    name: "Nebular Drop Shoulder T-Shirt",
    category: "T-Shirts",
    price: 890,
    oldPrice: 1050,
    rating: 4.8,
    reviews: 42,
    image: "/images/tshirt.svg",
    colors: ["Black", "Navy", "White"],
    sizes: ["M", "L", "XL"],
    description:
      "A relaxed drop-shoulder silhouette designed for everyday comfort with a clean premium finish.",
    details: ["180 GSM premium fabric", "Drop shoulder fit", "Soft breathable finish", "Made for everyday styling"],
  },
  {
    id: "royal-shirt",
    name: "Royal Oxford Casual Shirt",
    category: "Shirts",
    price: 1290,
    oldPrice: 1490,
    rating: 4.9,
    reviews: 31,
    image: "/images/shirt.svg",
    colors: ["White", "Navy", "Olive"],
    sizes: ["M", "L", "XL"],
    description: "A versatile Oxford-inspired shirt with a polished look for smart casual days.",
    details: ["Premium twill cotton", "Regular comfortable fit", "Easy-care fabric", "Smart casual styling"],
  },
  {
    id: "essential-pants",
    name: "Essential Twill Pants",
    category: "Pants",
    price: 1190,
    oldPrice: 1390,
    rating: 4.7,
    reviews: 28,
    image: "/images/pants.svg",
    colors: ["Black", "Beige", "Charcoal"],
    sizes: ["30", "32", "34", "36"],
    description: "Clean-cut twill pants built for a sharp everyday wardrobe.",
    details: ["Durable twill fabric", "Straight modern fit", "Comfort waistband", "Easy everyday styling"],
  },
];

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const product = useMemo(
    () => products.find((item) => item.id === params.id) ?? products[0],
    [params.id]
  );

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const addToCart = () => {
    const item = {
      ...product,
      size: selectedSize,
      color: selectedColor,
      quantity,
    };

    const current = JSON.parse(localStorage.getItem("solo-cart") || "[]");
    localStorage.setItem("solo-cart", JSON.stringify([...current, item]));
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#071725]">
      <div className="mx-auto max-w-[1320px] px-4 py-6 sm:px-6 lg:px-8">
        <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-[#071725]/60 transition hover:text-[#071725]">
          <ArrowLeft size={16} /> Back to Shop
        </Link>

        <div className="mt-7 grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <section>
            <div className="relative overflow-hidden bg-white">
              <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
              <span className="absolute left-5 top-5 bg-[#d4af6a] px-3 py-1.5 text-[10px] font-bold tracking-[0.18em]">NEW ARRIVAL</span>
              <button
                onClick={() => setLiked(!liked)}
                aria-label="Wishlist"
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm"
              >
                <Heart size={19} fill={liked ? "currentColor" : "none"} />
              </button>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {[product.image, product.image, product.image, product.image].map((image, index) => (
                <div key={index} className={`overflow-hidden bg-white ${index === 0 ? "ring-2 ring-[#d4af6a]" : ""}`}>
                  <img src={image} alt="" className="aspect-square w-full object-cover" />
                </div>
              ))}
            </div>
          </section>

          <section className="lg:pt-3">
            <p className="text-[11px] font-bold tracking-[0.28em] text-[#8b6f35]">{product.category.toUpperCase()}</p>
            <h1 className="mt-3 text-3xl font-medium leading-tight sm:text-4xl">{product.name}</h1>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              <span className="tracking-widest">★★★★★</span>
              <span className="font-medium">{product.rating}</span>
              <span className="text-[#071725]/45">({product.reviews} reviews)</span>
            </div>

            <div className="mt-6 flex items-end gap-3">
              <span className="text-2xl font-semibold">৳{product.price.toLocaleString()}</span>
              <span className="text-sm text-[#071725]/40 line-through">৳{product.oldPrice.toLocaleString()}</span>
              <span className="bg-[#e9d9b6] px-2 py-1 text-[10px] font-bold">SAVE ৳{(product.oldPrice - product.price).toLocaleString()}</span>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#071725]/65">{product.description}</p>

            <div className="my-7 h-px bg-[#071725]/10" />

            <div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold tracking-[0.16em]">COLOR: {selectedColor.toUpperCase()}</p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button key={color} onClick={() => setSelectedColor(color)} className={`border px-4 py-2 text-xs ${selectedColor === color ? "border-[#071725] bg-[#071725] text-white" : "border-[#071725]/15 bg-white"}`}>
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold tracking-[0.16em]">SIZE</p>
                <button onClick={() => document.getElementById("size-guide")?.scrollIntoView({ behavior: "smooth" })} className="text-xs underline underline-offset-4">Size Guide</button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={`min-w-14 border px-4 py-2.5 text-xs font-semibold ${selectedSize === size ? "border-[#071725] bg-[#071725] text-white" : "border-[#071725]/15 bg-white"}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <div className="flex h-12 items-center border border-[#071725]/15 bg-white">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3"><Minus size={15} /></button>
                <span className="w-9 text-center text-sm">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-3"><Plus size={15} /></button>
              </div>
              <button onClick={addToCart} className="flex h-12 flex-1 items-center justify-center gap-2 bg-[#071725] text-xs font-bold tracking-[0.14em] text-white transition hover:bg-[#132b3d]">
                {added ? <><Check size={17} /> ADDED TO CART</> : <><ShoppingBag size={17} /> ADD TO CART</>}
              </button>
            </div>

            <Link href="/cart" onClick={addToCart} className="mt-3 flex h-12 w-full items-center justify-center border border-[#071725] text-xs font-bold tracking-[0.14em]">BUY IT NOW</Link>

            <div className="mt-7 grid gap-3 border-y border-[#071725]/10 py-5 sm:grid-cols-3">
              <div className="flex gap-3"><Truck size={19} /><div><p className="text-xs font-bold">Nationwide Delivery</p><p className="mt-1 text-[11px] text-[#071725]/50">Available across Bangladesh</p></div></div>
              <div className="flex gap-3"><RotateCcw size={19} /><div><p className="text-xs font-bold">Easy Exchange</p><p className="mt-1 text-[11px] text-[#071725]/50">Simple exchange support</p></div></div>
              <div className="flex gap-3"><ShieldCheck size={19} /><div><p className="text-xs font-bold">Secure Checkout</p><p className="mt-1 text-[11px] text-[#071725]/50">Safe & reliable payment</p></div></div>
            </div>
          </section>
        </div>

        <section className="mt-16 border-t border-[#071725]/10 pt-8">
          <div className="flex flex-wrap gap-7 border-b border-[#071725]/10">
            {["description", "details", "shipping"].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-4 text-xs font-bold tracking-[0.14em] ${activeTab === tab ? "border-b-2 border-[#071725]" : "text-[#071725]/45"}`}>
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="max-w-3xl py-7 text-sm leading-7 text-[#071725]/65">
            {activeTab === "description" && <p>{product.description} Designed around the Solo State philosophy: clean details, comfortable wear and a confident everyday attitude.</p>}
            {activeTab === "details" && <ul className="grid gap-2 sm:grid-cols-2">{product.details.map((detail) => <li key={detail} className="flex items-center gap-2"><Check size={15} /> {detail}</li>)}</ul>}
            {activeTab === "shipping" && <p>Orders are prepared with care and delivered nationwide. Delivery time and charge can vary by location. You can confirm the final delivery details during checkout.</p>}
          </div>
        </section>

        <section id="size-guide" className="mt-8 bg-white p-6 sm:p-8">
          <div className="flex items-center gap-2"><p className="text-sm font-bold tracking-[0.14em]">SIZE GUIDE</p><ChevronDown size={16} /></div>
          <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[500px] border-collapse text-left text-xs"><thead><tr className="border-b"><th className="p-3">SIZE</th><th className="p-3">CHEST</th><th className="p-3">LENGTH</th><th className="p-3">FIT</th></tr></thead><tbody>{[["M","40\"","27\"","Regular"],["L","42\"","28\"","Regular"],["XL","44\"","29\"","Relaxed"]].map((row) => <tr key={row[0]} className="border-b border-[#071725]/5"><td className="p-3 font-semibold">{row[0]}</td><td className="p-3">{row[1]}</td><td className="p-3">{row[2]}</td><td className="p-3">{row[3]}</td></tr>)}</tbody></table></div>
        </section>

        <section className="mt-16 pb-16">
          <div className="mb-6 flex items-end justify-between"><div><p className="text-[10px] font-bold tracking-[0.3em] text-[#8b6f35]">COMPLETE THE LOOK</p><h2 className="mt-2 text-2xl sm:text-3xl">You may also like</h2></div><Link href="/shop" className="text-xs font-bold underline underline-offset-4">View all</Link></div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">{products.filter((item) => item.id !== product.id).map((item) => <Link key={item.id} href={`/product/${item.id}`} className="group bg-white"><div className="overflow-hidden"><img src={item.image} alt={item.name} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-4"><p className="text-[10px] tracking-widest text-[#071725]/45">{item.category.toUpperCase()}</p><p className="mt-2 text-sm font-medium">{item.name}</p><p className="mt-2 text-sm font-semibold">৳{item.price.toLocaleString()}</p></div></Link>)}</div>
        </section>
      </div>
    </main>
  );
}
