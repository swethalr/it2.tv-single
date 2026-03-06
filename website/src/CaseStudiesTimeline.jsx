"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const cases = [
  { id: 1, client: "Pure Self Salon", location: "Markham, USA", result: "Ranked #1 on Google", tag: "Local SEO", color: "#059669", image: "/assets/images/case-studies/pure-self-growth.webp" },
  { id: 2, client: "Towing Service", location: "Kenner, USA", result: "First Rank Achieved", tag: "Google Business", color: "#EA580C", image: "/assets/images/case-studies/towing.webp" },
  { id: 3, client: "Property Buyers London", location: "London, UK", result: "Position #1 Google SEO", tag: "SEO Strategy", color: "#7C3AED", image: "/assets/images/case-studies/property-buyers-in-london-result.webp" },
  { id: 4, client: "Roy Cleeves", location: "New Gurgaon, India", result: "Ranked #1 Google Maps", tag: "Maps Ranking", color: "#0284C7", image: "/assets/images/case-studies/roy-cleeves.webp" },
  { id: 5, client: "Dentru Gurgaon", location: "Salem, India", result: "Rank #1 in 45 Days", tag: "Rapid Ranking", color: "#D97706", image: "/assets/images/case-studies/dentru-gurgaon.webp" },
  { id: 6, client: "Studio 7rk", location: "New York, USA", result: "Top 3 Google Search", tag: "Local SEO", color: "#DB2777", image: "/assets/images/case-studies/studio-7rk.webp" },
  { id: 7, client: "Shingle Roofing Experts", location: "Texas, USA", result: "Ranked #1 Locally", tag: "Google Business", color: "#0891B2", image: "/assets/images/case-studies/shingle-roofing-experts-los-angeles-result.webp" },
  { id: 8, client: "Dentru", location: "Dubai, UAE", result: "First Page Google", tag: "SEO Strategy", color: "#65A30D", image: "/assets/images/case-studies/dentru.webp" },
  { id: 9, client: "Real Estate Coach", location: "Melbourne, Australia", result: "Rank #1 Maps & Search", tag: "Maps Ranking", color: "#9333EA", image: "/assets/images/case-studies/realestate-coach.webp" },
];

export default function CaseStudiesTimeline() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const trackRef = useRef(null);

  const c = cases[active];
  const total = cases.length;

  const goTo = (index) => {
    const wrapped = (index + total) % total;
    setActive(wrapped);
  };

  // Touch/mouse swipe
  const onDragStart = (clientX) => { setDragging(true); setStartX(clientX); };
  const onDragEnd = (clientX) => {
    if (!dragging) return;
    const diff = startX - clientX;
    if (Math.abs(diff) > 50) diff > 0 ? goTo(active + 1) : goTo(active - 1);
    setDragging(false);
  };

  return (
    <section style={{
      background: "#f8faff",
      padding: "80px 20px 60px",
      fontFamily: "'Georgia', serif",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes imgReveal {
          from { opacity: 0; transform: scale(1.04); }
          to { opacity: 1; transform: scale(1); }
        }
        .cs-nav-btn:hover { opacity: 1 !important; transform: scale(1.1) !important; }
        .cs-dot:hover { transform: scale(1.2); }
        .cs-read-btn:hover { transform: translateY(-2px) !important; }
        @media (max-width: 768px) {
          .cs-card-grid { grid-template-columns: 1fr !important; }
          .cs-img-side { min-height: 240px !important; order: -1; }
          .cs-timeline-nodes { gap: 8px !important; }
          .cs-node-label { display: none !important; }
        }
        @media (max-width: 480px) {
          .cs-card-inner { padding: 24px !important; }
        }
      `}</style>

      {/* BG decoration */}
      <div style={{ position: "absolute", top: -120, right: -120, width: 400, height: 400, borderRadius: "50%", background: `${c.color}0D`, transition: "background 0.5s", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -80, left: -80, width: 280, height: 280, borderRadius: "50%", background: `${c.color}08`, transition: "background 0.5s", pointerEvents: "none" }} />

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: `${c.color}12`, border: `1px solid ${c.color}25`,
            borderRadius: 100, padding: "7px 18px", marginBottom: 18, transition: "all 0.4s",
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: c.color, transition: "background 0.4s" }} />
            <span style={{ color: c.color, fontSize: 11, letterSpacing: 4, textTransform: "uppercase", fontFamily: "monospace", transition: "color 0.4s" }}>
              Client Success Stories
            </span>
          </div>
          <h2 style={{ color: "#0f172a", fontSize: "clamp(30px, 5vw, 56px)", fontWeight: 400, lineHeight: 1.15, margin: "0 0 12px" }}>
            We Help Over{" "}
            <span style={{ color: c.color, fontStyle: "italic", transition: "color 0.4s" }}>170+</span>
            {" "}Customers
          </h2>
          <p style={{ color: "#94a3b8", fontSize: 16, margin: 0 }}>Real businesses. Real rankings. Real results.</p>
        </div>

        {/* Timeline Nodes */}
        <div style={{ position: "relative", marginBottom: 48 }}>
          <div style={{
            position: "absolute", top: 24, left: "5%", right: "5%", height: 2,
            background: `linear-gradient(90deg, transparent, ${c.color}20, transparent)`,
            transition: "background 0.5s",
          }} />
          <div className="cs-timeline-nodes" style={{ display: "flex", justifyContent: "center", gap: "clamp(8px, 3vw, 48px)", alignItems: "flex-start" }}>
            {cases.map((cs, i) => (
              <button key={cs.id} onClick={() => setActive(i)} style={{
                background: "none", border: "none", cursor: "pointer",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: 4,
              }}>
                <div style={{
                  width: i === active ? 52 : 38, height: i === active ? 52 : 38,
                  borderRadius: "50%",
                  background: i === active ? cs.color : "#fff",
                  border: `2px solid ${i === active ? cs.color : "#e2e8f0"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: i === active ? 11 : 10,
                  color: i === active ? "#fff" : "#94a3b8",
                  fontFamily: "monospace", fontWeight: 700,
                  transition: "all 0.35s ease",
                  boxShadow: i === active ? `0 6px 20px ${cs.color}40, 0 0 0 5px ${cs.color}12` : "0 2px 6px rgba(0,0,0,0.05)",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="cs-node-label" style={{
                  color: i === active ? cs.color : "#94a3b8",
                  fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase",
                  fontFamily: "monospace", transition: "color 0.3s",
                  textAlign: "center", maxWidth: 64, lineHeight: 1.4,
                  fontWeight: i === active ? 700 : 400,
                }}>
                  {cs.client.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Card with swipe */}
        <div
          ref={trackRef}
          onMouseDown={(e) => onDragStart(e.clientX)}
          onMouseUp={(e) => onDragEnd(e.clientX)}
          onMouseLeave={(e) => dragging && onDragEnd(e.clientX)}
          onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
          onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
          style={{ cursor: dragging ? "grabbing" : "grab", userSelect: "none" }}
        >
          {cases.map((cs, i) => i === active && (
            <div key={cs.id} className="cs-card-grid" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              background: "#fff", borderRadius: 28, overflow: "hidden",
              boxShadow: `0 24px 64px ${cs.color}18, 0 4px 20px rgba(0,0,0,0.06)`,
              border: `1px solid ${cs.color}18`,
              animation: "fadeSlide 0.45s ease",
              minHeight: 360,
              maxHeight: 400,
            }}>

              {/* LEFT — Info */}
              <div className="cs-card-inner" style={{ padding: "clamp(28px, 4vw, 56px)", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${cs.color}, ${cs.color}50)` }} />

                <div>
                  {/* Tag + Location */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28, marginTop: 12 }}>
                    <span style={{
                      background: `${cs.color}12`, color: cs.color,
                      fontSize: 10, letterSpacing: 3, textTransform: "uppercase",
                      padding: "5px 14px", borderRadius: 100, fontFamily: "monospace",
                      border: `1px solid ${cs.color}25`, fontWeight: 600,
                    }}>{cs.tag}</span>
                    <span style={{
                      background: "#f8fafc", color: "#64748b",
                      fontSize: 10, letterSpacing: 2, textTransform: "uppercase",
                      padding: "5px 14px", borderRadius: 100, fontFamily: "monospace",
                      border: "1px solid #e2e8f0",
                    }}>{cs.location}</span>
                  </div>

                  {/* Client Name */}
                  <h3 style={{ color: "#0f172a", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 400, lineHeight: 1.2, margin: "0 0 16px" }}>
                    {cs.client}
                  </h3>

                  {/* Result */}
                  <div style={{
                    background: `${cs.color}08`, borderLeft: `4px solid ${cs.color}`,
                    borderRadius: "0 10px 10px 0", padding: "14px 18px", marginBottom: 32,
                  }}>
                    <p style={{ color: cs.color, fontSize: "clamp(15px, 1.8vw, 20px)", fontWeight: 600, margin: 0 }}>
                      {cs.result}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <button className="cs-read-btn" style={{
                  background: cs.color, border: "none", color: "#fff",
                  fontSize: 11, letterSpacing: 3, textTransform: "uppercase",
                  padding: "16px 24px", borderRadius: 12, cursor: "pointer",
                  fontFamily: "monospace", fontWeight: 600,
                  boxShadow: `0 8px 24px ${cs.color}40`,
                  transition: "all 0.25s ease", alignSelf: "flex-start",
                }}>
                  Read Full Case Study →
                </button>
              </div>

              {/* RIGHT — Image */}
              <div className="cs-img-side" style={{
                position: "relative", minHeight: 360, maxHeight:360, overflow: "hidden",
                background: `${cs.color}08`,
              }}>
                <img
                  src={cs.image}
                  alt={cs.client}
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    display: "block", animation: "imgReveal 0.5s ease",
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback placeholder */}
                <div style={{
                  display: "none", position: "absolute", inset: 0,
                  alignItems: "center", justifyContent: "center",
                  flexDirection: "column", gap: 12,
                  background: `linear-gradient(135deg, ${cs.color}15, ${cs.color}05)`,
                }}>
                  <div style={{ fontSize: 48 }}>📷</div>
                  <p style={{ color: cs.color, fontFamily: "monospace", fontSize: 12, letterSpacing: 2, margin: 0 }}>
                    ADD IMAGE
                  </p>
                  <p style={{ color: "#94a3b8", fontSize: 10, fontFamily: "monospace", margin: 0 }}>
                    /assets/images/case-studies/case-{i + 1}.webp
                  </p>
                </div>

                {/* Overlay gradient */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: `linear-gradient(to top, ${cs.color}30 0%, transparent 50%)`,
                  pointerEvents: "none",
                }} />

                {/* Case number badge */}
                <div style={{
                  position: "absolute", top: 20, right: 20,
                  background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)",
                  borderRadius: 100, padding: "6px 14px",
                  fontFamily: "monospace", fontSize: 11, fontWeight: 700,
                  color: cs.color, letterSpacing: 2,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                }}>
                  {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nav arrows + dots */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 32 }}>
          {/* Prev */}
          <button className="cs-nav-btn" onClick={() => goTo(active - 1)} style={{
            width: 44, height: 44, borderRadius: "50%",
            background: "#fff", border: "1px solid #e2e8f0",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", fontSize: 18, color: "#64748b",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            transition: "all 0.2s", opacity: 0.7,
          }}>←</button>

          {/* Dots */}
          <div style={{ display: "flex", gap: 6 }}>
            {cases.map((cs, i) => (
              <div key={i} className="cs-dot" onClick={() => setActive(i)} style={{
                width: i === active ? 24 : 7, height: 7, borderRadius: 100,
                background: i === active ? c.color : "#e2e8f0",
                cursor: "pointer", transition: "all 0.3s ease",
              }} />
            ))}
          </div>

          {/* Next */}
          <button className="cs-nav-btn" onClick={() => goTo(active + 1)} style={{
            width: 44, height: 44, borderRadius: "50%",
            background: c.color, border: "none",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", fontSize: 18, color: "#fff",
            boxShadow: `0 4px 16px ${c.color}50`,
            transition: "all 0.2s", opacity: 0.9,
          }}>→</button>
        </div>

        <p style={{ textAlign: "center", color: "#94a3b8", fontSize: 11, fontFamily: "monospace", marginTop: 12, letterSpacing: 2 }}>
          SWIPE OR CLICK TO NAVIGATE
        </p>

      </div>
    </section>
  );
}
