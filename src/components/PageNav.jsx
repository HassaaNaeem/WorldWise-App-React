import React from "react";

import { Link, NavLink } from "react-router-dom";
import styles from "../components/PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo></Logo>
      <ul>
        <li>
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {/* <Link to="/pricing">Pricing</Link> */}
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          {/* <Link to="/product">Product</Link> */}
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          {/* <Link to="/product">Product</Link> */}
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
