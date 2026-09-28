import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function Campaign() {
  return (
    <section className="bg-[#10283b] text-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[380px] lg:min-h-[470px]">
          <img
            src="/images/campaign.svg"
            alt="Signature collection"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center px-7 py-16 sm:px-14 lg:px-20">
          <div>
            <p className="text-[10px] tracking-[.34em] text-[#d4af6a]">
              THE SIGNATURE EDIT
            </p>
            <h2 className="serif mt-4 text-5xl leading-tight sm:text-6xl">
              Quiet Luxury.
              <br />
              Loud Attitude.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
              Refined silhouettes, comfortable fabrics and details designed to
              make everyday dressing feel exceptional.
            </p>
            <Link
              href="/collections/signature"
              className="gold-btn mt-8 inline-flex items-center gap-3 px-7 py-4 text-xs font-bold"
            >
              DISCOVER COLLECTION <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
