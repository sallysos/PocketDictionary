import { NavLink } from "react-router-dom";

export default function HeaderTabs() {
  return (
    <header className="class-header-dictionary">
      <nav aria-label="Switch Mode" className="class-nav" role="tablist">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `class-tab${isActive ? " is-active" : ""}`}
          role="tab"
          aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          id="dictionary-tab"
        >
          <div className="class-tab-logo">
            <h1>Dictionary</h1>
          </div>
        </NavLink>

        <NavLink
          to="/my-words"
          className={({ isActive }) => `class-tab${isActive ? " is-active" : ""}`}
          role="tab"
          aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          id="mywords-tab"
        >
          <div className="class-tab-logo">
            <h1>My Words</h1>
          </div>
        </NavLink>
      </nav>
    </header>
  );
}