// src/app/components/Banner.tsx

import React from "react";
import styles from "../styles/components/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}></div>{" "}
      {/* Overlay para escurecer a imagem */}
      <div className={styles.content}>
        <h1>O seu pão de cada dia sempre fresquinho</h1>
        <button className={styles.button}>Nossos pães</button>
      </div>
    </div>
  );
};

export default Banner;
