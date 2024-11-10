// Importa o Link do Next.js para navegação interna e React para construir o componente
import Link from "next/link";
import React from "react";
import styles from "../styles/components/Banner.module.css";

// Componente Banner que exibe uma imagem de fundo com uma mensagem e um botão de navegação
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}></div> 
      {/* Overlay para escurecer a imagem de fundo e destacar o conteúdo do banner */}
      
      <div className={styles.content}>

        {/* Título principal do banner */}
        <h1>O seu pão de cada dia sempre fresquinho</h1> 
        
        {/* Botão com link para a seção "Boulangerie" da página */}
        <button className={styles.button}>
          <Link href="/#boulangerie">Nossos Pães</Link>
        </button>
      </div>
    </div>
  );
};

// Exporta o componente Banner para ser utilizado em outras partes do site
export default Banner;
