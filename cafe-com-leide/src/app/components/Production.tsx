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
          <span>NOSSA PRODUÇÃO</span>
        </h2>

        <p>
          Nossa padaria é dedicada à produção artesanal, onde cada detalhe é cuidadosamente pensado. Usamos ingredientes selecionados e preparamos nossas receitas com amor, para que cada pão, doce e bolo seja mais que um alimento, seja uma experiência. Com carinho em cada etapa do processo, buscamos sempre oferecer produtos frescos, de alta qualidade e que carregam o verdadeiro sabor da tradição artesanal.
        </p>
      </div>
    </section>
  );
};

export default Production;
