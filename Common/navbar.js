import React from "react";
import Link from "next/link";
import Styles from "../styles/Facilities.module.css";

const Navbar = () => {
  return (
    <div className={Styles.navbarpage}>

      <div className="btn-group w-100" role="group" aria-label="Basic example"  >
      <button type="button" class="btn btn-secondary"><Link className={Styles.link} href="/">Home</Link></button>
      <button type="button" class="btn btn-secondary"><Link className={Styles.link} href="/courses">Courses</Link></button>
      <button type="button" class="btn btn-secondary"><Link className={Styles.link} href="/facilities">Facilities</Link></button>
      <button type="button" class="btn btn-secondary"><Link className={Styles.link} href="/contact">Contact</Link></button>
      <button type="button" class="btn btn-secondary"><Link className={Styles.link} href="/about">About</Link></button>
      <button type="button" class="btn btn-secondary"><Link className={Styles.link} href="/batches">Our Products</Link></button>
    </div>
    </div>
  );
};

export default Navbar;
