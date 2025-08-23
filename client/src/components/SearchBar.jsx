import { useState } from "react";

/**
 * Props:
 * - onSearch: (query: string) => void
 * - defaultValue?: string
 */
export default function SearchBar({ onSearch, defaultValue = "" }) {
  const [query, setQuery] = useState(defaultValue);

  const submit = (e) => {
    e.preventDefault();
    const word = query.trim();
    if (!word) return;
    onSearch(word);
  };

  return (
    <form className="class-search" onSubmit={submit}>
      <div className="class-search-bar">
        <input
          id="dict-input" // keep id if your CSS relies on it; otherwise #search-bar in CSS should be updated
          aria-autocomplete="list"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          placeholder="Search a word"
          spellCheck="false"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="class-search-button" data-type="button" aria-label="Search">
          <img src="/Images/search.jpg" alt="Search Icon" />
        </button>
      </div>
    </form>
  );
}