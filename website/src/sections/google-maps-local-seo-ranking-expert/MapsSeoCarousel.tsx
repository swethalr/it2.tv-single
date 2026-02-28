'use client';

const items = [
  {
    title: 'Google Maps Listing Issues',
    desc: 'Fix visibility and listing errors.',
  },
  {
    title: 'Phone Verification Problems',
    desc: 'Resolve phone verification failures.',
  },
  { title: 'Suspended Profiles', desc: 'Recover suspended profiles safely.' },
  { title: 'Number Update Issues', desc: 'Update business numbers correctly.' },
  { title: 'Low Local Rankings', desc: 'Improve Maps ranking positions.' },
  { title: 'Duplicate Listings', desc: 'Remove harmful duplicates.' },
  { title: 'Incorrect Address', desc: 'Fix pin & address mismatches.' },
  { title: 'Profile Optimization', desc: 'Optimize for local dominance.' },
];

export default function PremiumSnapCarousel() {
  return (
    <section className="bg-gradient-to-b from-white via-green-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-semibold text-gray-900 md:text-5xl">
          Google Maps SEO Challenges We Solve
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Swipe horizontally to explore — smooth, calm, and focused.
        </p>
      </div>

      <div className="mt-16">
        <div
          className="
            scrollbar-hide flex touch-pan-x snap-x
            snap-mandatory
            gap-6
            overflow-x-auto scroll-smooth
            px-6
            md:px-16
          "
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="
                min-w-[280px]
                snap-center rounded-3xl border
                border-green-100
                bg-white
                p-8
                shadow-sm transition-all
                duration-300
                hover:shadow-xl
                md:min-w-[360px] lg:min-w-[420px]
              "
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
                {i + 1}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
