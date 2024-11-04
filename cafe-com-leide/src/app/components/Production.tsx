// src/app/components/Production.tsx

import React from "react";
import styles from "../styles/components/Production.module.css";

const Production = () => {
  return (
    <section id="production" className={styles.production}>
      <div className={styles.videoContainer}>
        <video className={styles.video} autoPlay loop muted>
          <source src="/videos/production-video-2.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
      <div className={styles.textContainer}>
        <h2>
          <span>Feitos à Mão, Com Amor e Cuidado</span>
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec
          gravida metus. Duis consequat tortor ante. Etiam aliquet semper erat,
          sed iaculis leo malesuada vitae. Sed non aliquam ex, nec vulputate
          turpis. Mauris posuere dui et augue scelerisque, et tempor purus
          bibendum. In mi sapien, elementum at luctus et, porta eu dui.
        </p>
      </div>
    </section>
  );
};

export default Production;
