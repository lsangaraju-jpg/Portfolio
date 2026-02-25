import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar({ navBackground, navShadow }) {
  return (
    <nav
      className={styles.navbar}
      style={{ background: navBackground, boxShadow: navShadow }}
    >
      <Link to="/" className={styles.logo} style={{ textDecoration: "none" }}>
        🏠 LVS
      </Link>

      <div className={styles.navLinks}>
        <NavLink
          to="/about"
          className={styles.navItem}
          style={{ textDecoration: "none" }}
        >
          About
        </NavLink>

        <NavLink
          to="/experience"
          className={styles.navItem}
          style={{ textDecoration: "none" }}
        >
          Experience
        </NavLink>

        <NavLink
          to="/education"
          className={styles.navItem}
          style={{ textDecoration: "none" }}
        >
          Education
        </NavLink>

        <NavLink
          to="/project"
          className={styles.navItem}
          style={{ textDecoration: "none" }}
        >
          Project
        </NavLink>

        <NavLink
          to="/certificates"
          className={styles.navItem}
          style={{ textDecoration: "none" }}
        >
          Certificates
        </NavLink>

        <a
          href="https://drive.google.com/file/d/1S4qw5qiojNQUKPilruLPaKzoyfRAs747/view?usp=sharing"
          className={styles.navItem}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}