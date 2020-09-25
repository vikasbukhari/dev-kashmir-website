import { useState } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";
import styles from "./navbar.module.scss";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
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
          {/* <Link href="/about"><a className={`navbar-item ${router.pathname === '/about' ? styles.active: ''}`}>About</a></Link> */}
          <Link href="/nominate"><a className={`navbar-item ${router.pathname === '/nominate' ? styles.active: ''}`}>Nominate</a></Link>
        </div>
      </div>
    </nav>
  );
}
