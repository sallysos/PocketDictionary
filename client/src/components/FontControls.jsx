import { useEffect, useState } from "react";

const LS_FONT = "fontSize";
const DEFAULT = 16;

export default function FontControls() {
  const [size, setSize] = useState(() => {
    const saved = parseInt(localStorage.getItem(LS_FONT), 10);
    return Number.isFinite(saved) ? saved : DEFAULT;
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${size}px`;
    localStorage.setItem(LS_FONT, String(size));
  }, [size]);

  const increase = () => setSize((s) => s + 2);
  const decrease = () => setSize((s) => (s > 10 ? s - 2 : s));

  return (
    <div className="font-controls">
      <button id="increase-font" onClick={increase} aria-label="Increase font size" title="Increase font size">
        Aa+
      </button>
      <button id="decrease-font" onClick={decrease} aria-label="Decrease font size" title="Decrease font size">
        Aa−
      </button>
    </div>
  );
}