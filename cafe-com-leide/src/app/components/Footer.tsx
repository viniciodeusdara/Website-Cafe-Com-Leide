import React from "react";
import Link from "next/link";
import styles from "@/app/styles/components/Footer.module.css";


const Footer = () => {
  return (
    <section className={styles.footer}>
  <h3>&copy;2024 -
    <Link target="_blank" href="https://fgvjr.com/"> Developed by FGV JR</Link>
  </h3>
    </section>
  );
};

export default Footer;