"use client";

import { useState, useRef } from "react";
import { Trophy, ChevronLeft, ChevronRight } from "lucide-react";

const cases = [
  { id: 1, client: "Pure Self Salon", location: "Markham", result: "Ranked #1 on Google", color: "#059669", image: "/assets/images/case-studies/pure-self-growth.webp" },
  { id: 2, client: "Towing Service", location: "Kenner", result: "First Rank Achieved", color: "#EA580C", image: "/assets/images/case-studies/towing.webp" },
  { id: 3, client: "Property Buyers London", location: "London", result: "Position #1 Google SEO",  color: "#7C3AED", image: "/assets/images/case-studies/property-buyers-in-london-result.webp" },
  { id: 4, client: "Roy Cleeves", location: "Canada", result: "Ranked #1 Google Maps", color: "#002168", image: "/assets/images/case-studies/roy-cleeves.webp" },
  { id: 5, client: "Dentru Gurgaon", location: " India", result: "Rank #1 in 45 Days", color: "#D97706", image: "/assets/images/case-studies/dentru-gurgaon.webp" },
  { id: 6, client: "Studio 7rk", location: "India", result: "Top 3 Google Search",  color: "#DB2777", image: "/assets/images/case-studies/studio-7rk.webp" },
  { id: 7, client: "Shingle Roofing Experts", location: "Los Angeles", result: "Ranked #1 on Google",  color: "#0891B2", image: "/assets/images/case-studies/shingle-roofing-experts-los-angeles-result.webp" },
  { id: 8, client: "Dentru", location: "New Gurgaon", result: "First Page Google", result: "Ranked #1 on Google",color: "rgba(121, 9, 9, 0.84)",  image: "/assets/images/case-studies/dentru.webp" },
  { id: 9, client: "Real Estate Coach", location: "Toronto", result: "Ranked #1 on Google",  color: "#5b00b1", image: "/assets/images/case-studies/realestate-coach.webp" },
];

export default function CaseStudiesTimeline() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [imgError, setImgError] = useState({});
  const trackRef = useRef(null);

  const c = cases[active];
  const total = cases.length;

  const goTo = (index) => setActive((index + total) % total);
  const onDragStart = (clientX) => { setDragging(true); setStartX(clientX); };
  const onDragEnd = (clientX) => {
    if (!dragging) return;
    const diff = startX - clientX;
    if (Math.abs(diff) > 50) diff > 0 ? goTo(active + 1) : goTo(active - 1);
    setDragging(false);
  };

  return (
    <section
      className="relative overflow-hidden px-5 py-20"
      style={{ background: "#f8faff" }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes imgReveal {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .cs-card-animate { animation: fadeSlide 0.45s ease; }
        .cs-nav-btn:hover { opacity: 1 !important; transform: scale(1.1) !important; }
        .cs-dot:hover { transform: scale(1.2); }
        .cs-read-btn:hover { transform: translateY(-2px) !important; }

        /* Image panel */
        .cs-img-wrapper {
          position: relative;
          align-self: stretch;
          min-height: 300px;
          overflow: hidden;
        }
        .cs-img-wrapper img {
          position: absolute;
          inset: 16px;
          width: calc(100% - 32px);
          height: calc(100% - 32px);
          object-fit: contain;
          object-position: center;
          animation: imgReveal 0.45s ease;
        }

        /* Desktop chevrons — visible md+ only */
        .cs-chevron-desktop {
          display: none;
        }
        @media (min-width: 768px) {
          .cs-chevron-desktop {
            display: flex;
          }
          /* Mobile chevrons hidden on desktop */
          .cs-chevron-mobile {
            display: none !important;
          }
        }

        /* Mobile: image stacks on top */
        @media (max-width: 767px) {
          .cs-img-wrapper {
            min-height: 240px;
            order: -1;
          }
          /* Card needs no side overflow space on mobile */
          .cs-card-track {
            padding: 0;
          }
        }
      `}</style>

      {/* BG blobs */}
      <div
        className="pointer-events-none absolute -top-28 -right-28 w-96 h-96 rounded-full transition-all duration-500"
        style={{ background: `${c.color}0D` }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 rounded-full transition-all duration-500"
        style={{ background: `${c.color}08` }}
      />

      <div className="relative z-10 mx-auto" style={{ maxWidth: 1000 }}>

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-5 transition-all duration-500"
            style={{ background: `${c.color}12`, border: `1px solid ${c.color}25` }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full transition-all duration-500"
              style={{ background: c.color }}
            />
          </div>

          <h1
            className="h1 uppercase md:mt-10 md:mb-10"
            style={{ color: "#0f172a", fontWeight: 700, lineHeight: 1.15 }}
          >
            Case Studies
          </h1>

          <h2
            className="h2 tracking-tighter"
            style={{ color: "#033E20", fontWeight: 500, lineHeight: 1.15, margin: "0 0 12px" }}
          >
            We Help Over{" "}
            <span className="italic transition-colors duration-500" style={{ color: c.color }}>170+</span>
            {" "}Customers
          </h2>
        </div>

        {/* ── Timeline Nodes — desktop only ── */}
        <div className="relative mb-12 hidden md:block">
          <div
            className="absolute transition-all duration-500"
            style={{
              top: 24, left: "5%", right: "5%", height: 2,
              background: `linear-gradient(90deg, transparent, ${c.color}20, transparent)`,
            }}
          />
          <div
            className="flex justify-center items-start flex-wrap gap-y-3"
            style={{ gap: "clamp(6px, 2.5vw, 44px)" }}
          >
            {cases.map((cs, i) => {
              const isActive = i === active;
              return (
                <button
                  key={cs.id}
                  onClick={() => setActive(i)}
                  className="flex flex-col items-center gap-2 p-1 bg-transparent border-none cursor-pointer"
                >
                  <div
                    className="flex items-center justify-center rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? 52 : 50,
                      height: isActive ? 52 : 50,
                      background: isActive ? cs.color : "#fff",
                      border: `2px solid ${isActive ? cs.color : "#e2e8f0"}`,
                      boxShadow: isActive
                        ? `0 6px 20px ${cs.color}40, 0 0 0 5px ${cs.color}12`
                        : "0 2px 6px rgba(0,0,0,0.05)",
                    }}
                  >
                    <Trophy
                      size={isActive ? 30 : 24}
                      color={isActive ? "#fff" : "#94a3b8"}
                      strokeWidth={isActive ? 2.2 : 1.8}
                      className="transition-all duration-300"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Card + Desktop Side Chevrons ── */}
        {/*
          On desktop (md+): the track has horizontal padding so the
          absolutely-positioned chevrons hang outside the card edges
          without being clipped by the section's overflow-hidden.
          On mobile: no padding, chevrons appear below instead.
        */}
        <div className="md:px-8">
          <div
            ref={trackRef}
            onMouseDown={(e) => onDragStart(e.clientX)}
            onMouseUp={(e) => onDragEnd(e.clientX)}
            onMouseLeave={(e) => dragging && onDragEnd(e.clientX)}
            onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
            onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
            className={`relative ${dragging ? "cursor-grabbing select-none" : "cursor-grab select-none"}`}
          >
            {/* Card */}
            {cases.map((cs, i) => i === active && (
              <div
                key={cs.id}
                className="cs-card-animate rounded-3xl overflow-hidden"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
                  background: "#fff",
                  boxShadow: `0 24px 64px ${cs.color}18, 0 4px 20px rgba(0,0,0,0.06)`,
                  border: `1px solid ${cs.color}18`,
                }}
              >
                {/* LEFT — Info */}
                <div className="relative flex flex-col justify-between p-7 sm:p-10 md:p-12 box-border">
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ background: `linear-gradient(90deg, ${cs.color}, ${cs.color}50)` }}
                  />
                  <div>
                    <div className="flex flex-wrap gap-2 mt-3 mb-7">
                     
                      <span
                        className="font-mono uppercase rounded-full px-4 py-1.5"
                        style={{ background: "#f8fafc", color: "#191c1f", border: "1px solid #e2e8f0", fontSize: 12, letterSpacing: 2 }}
                      >
                        {cs.location}
                      </span>
                    </div>

                    <h3
                      className="font-normal leading-snug"
                      style={{ color: "#0f172a", fontSize: "clamp(22px, 3vw, 36px)",fontWeight: "600", margin: "0 0 16px" }}
                    >
                      {cs.client}
                    </h3>

                    <div
                      className="rounded-r-xl px-5 py-3.5 mb-8"
                      style={{ background: `${cs.color}08`, borderLeft: `4px solid ${cs.color}` }}
                    >
                      <p className="font-semibold m-0" style={{ color: cs.color, fontSize: "clamp(14px, 1.8vw, 19px)" }}>
                        {cs.result}
                      </p>
                    </div>
                  </div>

                  <button
                    className="cs-read-btn  font-mono uppercase rounded-xl px-6 py-4 font-semibold border-none cursor-pointer transition-all duration-200"
                    style={{ background: cs.color, color: "#fff", fontSize: 11, letterSpacing: 3, boxShadow: `0 8px 24px ${cs.color}40` }}
                  >
                    Read Full Case Study →
                  </button>
                </div>

                {/* RIGHT — Image */}
                <div className="cs-img-wrapper" style={{ background: `${cs.color}07` }}>
                  {!imgError[i] ? (
                    <img
                      key={cs.image}
                      src={cs.image}
                      alt={cs.client}
                      onError={() => setImgError((p) => ({ ...p, [i]: true }))}
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                      style={{ background: `linear-gradient(135deg, ${cs.color}15, ${cs.color}05)` }}
                    >
                      <span className="text-5xl">📷</span>
                      <p className="font-mono uppercase tracking-widest text-xs m-0" style={{ color: cs.color, letterSpacing: 2 }}>
                        ADD IMAGE
                      </p>
                      <p className="font-mono text-xs m-0 text-slate-400">
                        /assets/images/case-studies/case-{i + 1}.webp
                      </p>
                    </div>
                  )}
                  <div
                    className="pointer-events-none absolute bottom-0 left-0 right-0"
                    style={{ height: "20%", background: `linear-gradient(to top, ${cs.color}22, transparent)` }}
                  />
                </div>
              </div>
            ))}

            {/* ── Desktop chevrons — absolute on card edges, hidden on mobile ── */}
            <button
              className="cs-chevron-desktop cs-nav-btn absolute left-0 top-1/2  z-10 w-11 h-11 rounded-full items-center justify-center cursor-pointer transition-all duration-200"
              onClick={() => goTo(active - 1)}
               style={{ background: c.color, color: "#fff", boxShadow: `0 4px 16px ${c.color}50` }}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              className="cs-chevron-desktop cs-nav-btn absolute right-0 top-1/2  z-10 w-11 h-11 rounded-full items-center justify-center cursor-pointer border-none transition-all duration-200"
              onClick={() => goTo(active + 1)}
              style={{ background: c.color, color: "#fff", boxShadow: `0 4px 16px ${c.color}50` }}
            >
              <ChevronRight size={20} />
            </button>

          </div>
        </div>

        {/* ── Bottom row: dots always + mobile chevrons ── */}
        <div className="flex items-center justify-center gap-4 mt-8">

          {/* Left chevron — mobile only */}
          <button
            className="cs-chevron-mobile cs-nav-btn md:hidden w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200"
            onClick={() => goTo(active - 1)}
            style={{ background: "#fff", border: "1px solid #e2e8f0", color: "#64748b", boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex gap-1.5">
            {cases.map((_, i) => (
              <div
                key={i}
                className="cs-dot h-1.5 rounded-full cursor-pointer transition-all duration-300"
                onClick={() => setActive(i)}
                style={{ width: i === active ? 24 : 7, background: i === active ? c.color : "#e2e8f0" }}
              />
            ))}
          </div>

          {/* Right chevron — mobile only */}
          <button
            className="cs-chevron-mobile cs-nav-btn md:hidden w-11 h-11 rounded-full flex items-center justify-center cursor-pointer border-none transition-all duration-200"
            onClick={() => goTo(active + 1)}
            style={{ background: c.color, color: "#fff", boxShadow: `0 4px 16px ${c.color}50` }}
          >
            <ChevronRight size={20} />
          </button>

        </div>

        <p
          className="text-center font-mono uppercase tracking-widest mt-3"
          style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 2 }}
        >
          SWIPE OR CLICK TO NAVIGATE
        </p>

      </div>
    </section>
  );
}
