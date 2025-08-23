import { useEffect, useState } from "react";

const LS_KEY = "theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem(LS_KEY) || "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem(LS_KEY, theme);
  }, [theme]);

  return (
    <div className="theme-controls">
      <label htmlFor="theme-select">Choose Theme:</label>
      <select
        id="theme-select"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}