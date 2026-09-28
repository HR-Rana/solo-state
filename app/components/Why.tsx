import { BadgeCheck, Gem, RefreshCcw, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const data: [LucideIcon, string, string][] = [
  [
    Gem,
    "Premium Quality",
    "Carefully selected fabrics and finishing that feel better in real life.",
  ],
  [
    Sparkles,
    "Customer-First Style",
    "Collections shaped around what modern men actually want to wear.",
  ],
  [
    RefreshCcw,
    "Easy Exchange",
    "A simple size-exchange experience when the fit is not right.",
  ],
  [
    BadgeCheck,
    "Honest Value",
    "Premium-looking fashion without unnecessary premium pricing.",
  ],
];

export default function Why() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] tracking-[.34em] text-[#b58d49]">
            WHY SOLO STATE
          </p>

          <h2 className="serif mt-3 text-4xl sm:text-5xl">
            Made for Your Attitude
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-500">
            Great style should feel premium, personal and accessible.
          </p>
        </div>

        <div className="mt-12 grid border border-gray-200 sm:grid-cols-2 lg:grid-cols-4">
          {data.map(([Icon, title, description], index) => (
            <div key={index} className="flex items-center gap-3 p-6">
              <Icon size={27} className="shrink-0 text-[#b58d49]" />

              <div>
                <h3 className="text-xs font-bold sm:text-sm">{title}</h3>

                <p className="mt-1 text-[10px] text-gray-500">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
