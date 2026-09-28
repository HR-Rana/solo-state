"use client";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
const faqs = [
  [
    "How long does delivery take?",
    "Inside Feni and nearby areas, delivery usually takes 1–2 working days. Nationwide delivery generally takes 2–5 working days.",
  ],
  [
    "Do you offer Cash on Delivery?",
    "Yes. Cash on Delivery is available for eligible delivery locations across Bangladesh.",
  ],
  [
    "Can I exchange the size?",
    "Yes. Eligible products can be exchanged according to our size-exchange policy.",
  ],
  [
    "What is your return policy?",
    "Eligible items can be returned within the stated return period if unused and in original condition.",
  ],
  [
    "How can I track my order?",
    "Once your order is confirmed, use your order information or contact our support team for tracking assistance.",
  ],
];
export default function FAQ() {
  const [a, setA] = useState<number | null>(0);
  return (
    <section className="bg-[#f4efe5] py-20">
      <div className="container grid gap-12 lg:grid-cols-[.75fr_1.4fr]">
        <div>
          <p className="text-[10px] tracking-[.34em] text-[#b58d49]">
            HELP CENTER
          </p>
          <h2 className="serif mt-4 text-5xl">
            Questions?
            <br />
            We’ve Got You.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-gray-500">
            Everything you need to know before and after your order.
          </p>
        </div>
        <div className="border-t border-gray-300">
          {faqs.map(([q, ans], i) => {
            const o = a === i;
            return (
              <div key={q} className="border-b border-gray-300">
                <button
                  onClick={() => setA(o ? null : i)}
                  className="flex w-full items-center justify-between gap-5 py-6 text-left text-sm font-semibold"
                >
                  {q}
                  {o ? <Minus size={17} /> : <Plus size={17} />}
                </button>
                {o && (
                  <p className="pb-6 pr-8 text-sm leading-7 text-gray-500">
                    {ans}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
