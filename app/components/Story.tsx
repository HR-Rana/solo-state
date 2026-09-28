import Link from "next/link";
export default function Story() {
  return (
    <section className="bg-[#071725] text-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[480px] lg:min-h-[600px]">
          <img
            src="/images/story.svg"
            alt="Solo State story"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center px-7 py-20 sm:px-14 lg:px-20">
          <div className="max-w-xl">
            <p className="text-[10px] tracking-[.34em] text-[#d4af6a]">
              THE SOLO STATE PHILOSOPHY
            </p>
            <h2 className="serif mt-4 text-5xl leading-tight sm:text-6xl">
              More Than
              <br />
              Just Fashion.
            </h2>
            <div className="mt-7 h-0.5 w-14 bg-[#d4af6a]" />
            <p className="mt-7 text-sm leading-8 text-white/55">
              Solo State was built around a simple belief: style is personal. It
              is the way you walk into a room, the way you express yourself and
              the way you define your own identity.
            </p>
            <p className="mt-5 text-sm leading-8 text-white/55">
              Modern men’s wear with a premium attitude — while keeping the
              value honest and accessible.
            </p>
            <Link
              href="/about"
              className="gold-btn mt-8 inline-block px-7 py-4 text-xs font-bold"
            >
              OUR STORY →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
