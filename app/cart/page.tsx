"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2, ArrowLeft, ShieldCheck, Truck, RefreshCcw } from "lucide-react";
import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type CartItem = {
  id: number;
  name: string;
  category: string;
  size: string;
  color: string;
  price: number;
  image: string;
  quantity: number;
};

const initialCart: CartItem[] = [
  {
    id: 1,
    name: "Nebular Drop Shoulder T-Shirt",
    category: "T-Shirt",
    size: "L",
    color: "Black",
    price: 890,
    image: "/images/tshirt.svg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Classic Twill Formal Pant",
    category: "Pants",
    size: "XL",
    color: "Navy",
    price: 1490,
    image: "/images/pants.svg",
    quantity: 1,
  },
  {
    id: 3,
    name: "Premium Oxford Shirt",
    category: "Shirt",
    size: "L",
    color: "White",
    price: 1290,
    image: "/images/shirt.svg",
    quantity: 2,
  },
];

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialCart);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items]
  );

  const delivery = subtotal >= 3000 || subtotal === 0 ? 0 : 80;
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal + delivery - discount;
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const updateQuantity = (id: number, amount: number) => {
    setItems((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + amount) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "SOLO10") {
      setCouponApplied(true);
    } else {
      setCouponApplied(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f4efe5]">
        <section className="border-b border-[#d9cfbe] bg-[#071725] py-14 text-white sm:py-20">
          <div className="container">
            <p className="mb-4 text-[10px] font-semibold tracking-[0.35em] text-[#d4af6a]">
              SOLO STATE / SHOPPING BAG
            </p>
            <h1 className="serif text-5xl leading-none sm:text-6xl">
              Your Cart
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
              Review your selected pieces, update your sizes and quantities,
              then continue to secure checkout.
            </p>
          </div>
        </section>

        <section className="container py-10 sm:py-14">
          {items.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1fr_390px] lg:items-start">
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-[#111418]">
                      Shopping Bag
                    </h2>
                    <p className="mt-1 text-sm text-black/50">
                      {totalItems} {totalItems === 1 ? "item" : "items"}
                    </p>
                  </div>
                  <Link
                    href="/shop"
                    className="hidden items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[#071725] sm:flex"
                  >
                    <ArrowLeft size={15} />
                    CONTINUE SHOPPING
                  </Link>
                </div>

                <div className="space-y-4">
                  {items.map((item) => (
                    <CartItemCard
                      key={item.id}
                      item={item}
                      onIncrease={() => updateQuantity(item.id, 1)}
                      onDecrease={() => {
                        if (item.quantity === 1) {
                          removeItem(item.id);
                        } else {
                          updateQuantity(item.id, -1);
                        }
                      }}
                      onRemove={() => removeItem(item.id)}
                    />
                  ))}
                </div>

                <Link
                  href="/shop"
                  className="mt-6 flex w-fit items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[#071725] sm:hidden"
                >
                  <ArrowLeft size={15} />
                  CONTINUE SHOPPING
                </Link>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <TrustCard
                    icon={<Truck size={19} />}
                    title="Fast Delivery"
                    text="Nationwide delivery"
                  />
                  <TrustCard
                    icon={<RefreshCcw size={19} />}
                    title="Easy Exchange"
                    text="Simple size exchange"
                  />
                  <TrustCard
                    icon={<ShieldCheck size={19} />}
                    title="Secure Checkout"
                    text="Safe & reliable payment"
                  />
                </div>
              </div>

              <aside className="lg:sticky lg:top-24">
                <div className="border border-[#ded5c6] bg-white p-6 sm:p-7">
                  <p className="text-[10px] font-semibold tracking-[0.3em] text-[#806f58]">
                    ORDER SUMMARY
                  </p>

                  <div className="mt-6 space-y-4 text-sm">
                    <SummaryRow label={`Subtotal (${totalItems} items)`} value={`৳${subtotal.toLocaleString()}`} />
                    <SummaryRow
                      label="Delivery"
                      value={delivery === 0 ? "FREE" : `৳${delivery}`}
                      valueClass={delivery === 0 ? "text-green-700" : ""}
                    />
                    {couponApplied && (
                      <SummaryRow
                        label="Coupon discount"
                        value={`-৳${discount.toLocaleString()}`}
                        valueClass="text-green-700"
                      />
                    )}
                  </div>

                  <div className="my-6 border-t border-[#e6dfd4]" />

                  <div className="flex items-end justify-between gap-4">
                    <span className="text-sm font-medium">Total</span>
                    <span className="text-2xl font-semibold text-[#071725]">
                      ৳{total.toLocaleString()}
                    </span>
                  </div>

                  <div className="mt-7">
                    <label className="mb-2 block text-xs font-semibold tracking-[0.08em]">
                      HAVE A COUPON?
                    </label>
                    <div className="flex border border-[#d8d0c4]">
                      <input
                        value={coupon}
                        onChange={(event) => setCoupon(event.target.value)}
                        placeholder="Enter coupon code"
                        className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-black/35"
                      />
                      <button
                        onClick={applyCoupon}
                        className="bg-[#071725] px-4 text-xs font-semibold tracking-[0.08em] text-white transition hover:bg-[#102b40]"
                      >
                        APPLY
                      </button>
                    </div>
                    <p className="mt-2 text-[11px] text-black/40">
                      Try <span className="font-semibold">SOLO10</span> for 10% off.
                    </p>
                  </div>

                  <button className="gold-btn mt-7 flex w-full items-center justify-center gap-2 px-5 py-4 text-xs font-bold tracking-[0.14em]">
                    PROCEED TO CHECKOUT
                    <span aria-hidden="true">→</span>
                  </button>

                  <p className="mt-4 text-center text-[11px] leading-5 text-black/45">
                    Cash on delivery and other payment options are available
                    at checkout.
                  </p>
                </div>
              </aside>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

function CartItemCard({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: {
  item: CartItem;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}) {
  return (
    <article className="border border-[#ded5c6] bg-white p-3 sm:p-4">
      <div className="flex gap-4 sm:gap-5">
        <div className="relative h-28 w-24 shrink-0 overflow-hidden bg-[#eee8dd] sm:h-36 sm:w-32">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 96px, 128px"
            className="object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-black/40">
                  {item.category}
                </p>
                <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-5 text-[#111418] sm:text-base">
                  {item.name}
                </h3>
              </div>
              <button
                onClick={onRemove}
                aria-label={`Remove ${item.name}`}
                className="shrink-0 p-1 text-black/35 transition hover:text-red-600"
              >
                <Trash2 size={17} />
              </button>
            </div>

            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-black/55">
              <span>Size: {item.size}</span>
              <span>Color: {item.color}</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center border border-[#d8d0c4]">
              <button
                onClick={onDecrease}
                className="grid h-8 w-8 place-items-center text-black/60 transition hover:bg-[#f4efe5]"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="grid h-8 min-w-8 place-items-center border-x border-[#d8d0c4] text-xs font-semibold">
                {item.quantity}
              </span>
              <button
                onClick={onIncrease}
                className="grid h-8 w-8 place-items-center text-black/60 transition hover:bg-[#f4efe5]"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>

            <p className="text-base font-semibold text-[#071725]">
              ৳{(item.price * item.quantity).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function SummaryRow({
  label,
  value,
  valueClass = "",
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-black/55">{label}</span>
      <span className={`font-medium ${valueClass}`}>{value}</span>
    </div>
  );
}

function TrustCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 border border-[#ded5c6] bg-white p-4">
      <div className="text-[#9b7738]">{icon}</div>
      <div>
        <p className="text-xs font-semibold">{title}</p>
        <p className="mt-1 text-[11px] text-black/45">{text}</p>
      </div>
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="mx-auto max-w-2xl border border-[#ded5c6] bg-white px-6 py-16 text-center sm:px-10">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#071725] text-[#d4af6a]">
        <ShoppingBag size={26} />
      </div>
      <p className="mt-7 text-[10px] font-semibold tracking-[0.3em] text-[#806f58]">
        YOUR BAG IS EMPTY
      </p>
      <h2 className="serif mt-3 text-4xl text-[#071725]">
        Nothing here yet.
      </h2>
      <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-black/50">
        Discover the latest Solo State pieces and find something that defines
        your attitude.
      </p>
      <Link
        href="/shop"
        className="gold-btn mt-8 inline-flex items-center gap-2 px-7 py-4 text-xs font-bold tracking-[0.12em]"
      >
        EXPLORE SHOP
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
