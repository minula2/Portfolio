import React from 'react';

/**
 * MarqueeTicker — Infinite auto-scrolling horizontal ticker (Relume.ai style).
 * Renders two identical strips side-by-side and uses a CSS keyframe to scroll them
 * seamlessly, creating the illusion of an infinite loop.
 *
 * Props:
 *  items   – array of { label, icon? } objects
 *  speed   – animation duration in seconds (default 30)
 *  reverse – scroll direction (default: false = left)
 *  label   – small caption shown on the left (optional)
 */
export default function MarqueeTicker({ items = [], speed = 30, reverse = false, label }) {
  // Duplicate for seamless loop
  const strip = [...items, ...items];

  return (
    <div className="marquee-wrapper">
      {label && (
        <div className="marquee-label">
          <span>{label}</span>
        </div>
      )}
      <div
        className="marquee-track-outer"
        style={{ '--marquee-duration': `${speed}s`, '--marquee-dir': reverse ? 'reverse' : 'normal' }}
      >
        <div className="marquee-track">
          {strip.map((item, i) => (
            <div key={i} className="marquee-item">
              {item.icon && <span className="marquee-item-icon">{item.icon}</span>}
              <span className="marquee-item-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
