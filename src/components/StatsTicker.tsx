"use client";

const tickerItems = [
  "🏆 NIRF Ranked University",
  "✅ UGC Section 2(f) Recognized",
  "🎓 6,000+ Students",
  "📚 100+ Programs",
  "🏢 500+ Industry Partners",
  "⭐ 4.4 Google Rating",
  "🔬 Research University",
  "🌏 Global Alumni Network",
  "🚀 Innovation Hub & Incubator",
  "📍 Mohali, Punjab",
];

export default function StatsTicker() {
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div className="stats-bar">
      <div className="stats-ticker">
        {doubled.map((item, i) => (
          <div key={i} className="ticker-item">
            <span className="ticker-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
