import React from "react";
import styles from "../styles/components/Production.module.css";

// Componente Production que exibe uma seção com um vídeo de produção e uma descrição do processo
const Production = () => {
  return (
    <section id="production" className={styles.production}>
      
      {/* Container do vídeo que mostra o processo de produção */}
      <div className={styles.videoContainer}>
        <video className={styles.video} autoPlay loop muted> {/* Vídeo com reprodução automática, em loop e sem som */}
          <source src="/videos/production-video-2.mp4" type="video/mp4" />
          {/* Texto alternativo caso o navegador não suporte o elemento de vídeo */}
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
      
      {/* Container para o texto descritivo da produção */}
      <div className={styles.textContainer}>
        <h2>
          <span>NOSSA PRODUÇÃO</span>  {/* Título da seção */}
        </h2>

        <p>
          {/* Texto explicativo sobre o processo de produção artesanal */}
          Nossa padaria é dedicada à produção artesanal, onde cada detalhe é cuidadosamente pensado. Usamos ingredientes selecionados e preparamos nossas receitas com amor, para que cada pão, doce e bolo seja mais que um alimento, seja uma experiência. Com carinho em cada etapa do processo, buscamos sempre oferecer produtos frescos, de alta qualidade e que carregam o verdadeiro sabor da tradição artesanal.
        </p>
      </div>
      
    </section>
  );
};

export default Production;
