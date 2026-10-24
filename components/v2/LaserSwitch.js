"use client";
import { useState } from "react";

const rows = [
  ["Sessions", "Fewer, more effective", "More, long term"],
  ["Comfort", "Integrated cooling, virtually painless", "Less comfortable"],
  ["Skin & hair types", "All types and phototypes", "Limited range"],
  ["Power", "4000W, large spot size", "Lower energy"],
];

// Flip between the diode laser and IPL to compare them.
export default function LaserSwitch() {
  const [diode, setDiode] = useState(true);
  return (
    <div className={`switch-card ${diode ? "diode" : "ipl"}`}>
      <div className="toggle" role="group" aria-label="Compare technologies">
        <button type="button" aria-pressed={diode} onClick={() => setDiode(true)}>Eneka PRO diode</button>
        <button type="button" aria-pressed={!diode} onClick={() => setDiode(false)}>IPL</button>
        <span className="knob" aria-hidden="true" />
      </div>
      <dl>
        {rows.map(([k, d, i]) => (
          <div key={k}><dt>{k}</dt><dd>{diode ? d : i}</dd></div>
        ))}
      </dl>
    </div>
  );
}
