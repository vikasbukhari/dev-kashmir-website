import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      className={"navbar is-spaced"}
      role="navigation"
      aria-label="main navigation"
    >
      <div className={"navbar-brand"}>
        <a className={"navbar-item"} href="/">
          <h1 className={"title"}>kashmiri.dev</h1>
        </a>
        <a
          role="button"
          className={`navbar-burger burger ${menuOpen ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarMenu"
        className={`navbar-menu ${menuOpen ? "is-active" : ""}`}
      >
        <div className={"navbar-end"}>
          <a className={"navbar-item"}>About</a>
          <a className={"navbar-item"}>Nominate</a>
        </div>
      </div>
    </nav>
  );
}
