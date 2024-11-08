// src/app/components/Banner.tsx

import Link from "next/link";
import React from "react";
import styles from "../styles/components/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}></div>{" "}
      {/* Overlay para escurecer a imagem */}
      <div className={styles.content}>
        <h1>O seu pão de cada dia sempre fresquinho</h1>
        <button className={styles.button}><Link href="/#boulangerie">Nossos Pães</Link></button>
      </div>
    </div>
  );
};

export default Banner;
