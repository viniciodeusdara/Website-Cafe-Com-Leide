// Importando elementos do React e CSS
import React from "react";
import Image from "next/image";
import styles from "../styles/components/About.module.css";

// Componente About que exibe uma seção de "Sobre Nós" com imagem e texto
const About = () => {
  return (
    // Define uma seção HTML com um id para navegação e aplica estilos específicos da seção "about"
    <section id="about" className={styles.about}>
      <div className={styles.content}>
        
        {/* Definição da Imagem */}
        <div className={styles.imageContainer}>
          <Image
            src="/images/leide.png"  // Caminho da imagem
            alt="Imagem da Leide segurando um pão italiano artesanal"  // Descrição da imagem para acessibilidade
            width={542}  // Largura da imagem
            height={672}  // Altura da imagem
            className={styles.image}  // CSS aplicado à imagem
          />
        </div>
        
        {/* Definição do Texto */}
        <div className={styles.textContainer}>
          <h2>SOBRE NÓS</h2>  {/* Título principal da seção */}
          <h3>Fazendo produtos artesanais desde XXXX</h3>  {/* Subtítulo com o ano de início da produção */}
          <p>
            {/* Parágrafo explicativo, com informações sobre a empresa */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            laoreet sapien ut neque finibus commodo. Nunc tempus justo eu sem
            dignissim, quis tincidunt nisl tincidunt. Integer scelerisque enim
            vel sodales mollis. Mauris efficitur tortor et turpis facilisis
            volutpat. Donec nec massa ex. Donec sit amet lorem accumsan, pretium
            mi non, pellentesque nisl. Mauris ultrices purus lacus, ut mattis
            arcu tincidunt vel.
          </p>
        </div>
      </div>
    </section>
  );
};


export default About;
