import Link from "next/link";
const posts = [
  ["/images/tshirt.svg", "Everyday confidence."],
  ["/images/shirt.svg", "Sharp. Simple. You."],
  ["/images/jacket.svg", "Own your attitude."],
  ["/images/panjabi.svg", "Tradition, redefined."],
  ["/images/pants.svg", "Built for movement."],
  ["/images/watch.svg", "Details matter."],
];
export default function Social() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] tracking-[.34em] text-[#b58d49]">
              FOLLOW THE ATTITUDE
            </p>
            <h2 className="serif mt-3 text-4xl sm:text-5xl">@solostate.bd</h2>
          </div>
          <Link href="https://facebook.com" className="text-xs text-gray-500">
            FOLLOW US →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {posts.map(([img, t]) => (
            <div
              key={t}
              className="group relative aspect-square overflow-hidden"
            >
              <img
                src={img}
                alt={t}
                className="image-zoom h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                <span className="text-xs text-white">{t}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
