import styles from "../styles/components/Boulangerie.module.css";
// import Carrousel from "@/app/patterns/Carousel" // Linha comentada para um possível carrossel no futuro
import Image from "next/image";

// Componente Boulangerie que exibe uma seção de produtos de padaria
const Boulangerie = () => {
    return (
      <section id="boulangerie" className={styles.products_carousel}>
        
        {/* Container de texto com uma descrição da boulangerie */}
        <div className={styles.textContainer}>
            <h2>
              <span>BOULANGERIE</span>  {/* Título da seção */}
            </h2>
            <a>
              {/* Descrição da boulangerie, que destaca a tradição e a qualidade dos produtos */}
              Nossa boulangerie é um encontro de tradição e paixão. Cada pão nasce das mãos habilidosas de quem ama o que faz, transformando ingredientes frescos em uma sinfonia de aromas e sabores. Aqui, o tempo é nosso aliado, e o carinho é o segredo. Venha descobrir pães que contam histórias e aquecem o coração.
            </a>
        </div>

        {/* Container para exibir imagens dos produtos com legendas */}
        <div className={styles.images}>
          
          {/* Primeiro conjunto de imagens para o efeito de carrossel */}
          <div className={styles.images_slide}>
            <div className={styles.image_container}>
              <img src="/images/croissant.png" alt="Imagem Croissant"/>
              <p className={styles.caption}>Croissant</p> {/* Legenda do produto */}
            </div>
            <div className={styles.image_container}>
              <img src="/images/pao-integral-com-uvas-passas-e-canela.png" alt="Imagem Pão integral com uvas passas e canela"/>
              <p className={styles.caption}>Pão Integral com Uvas Passas</p> {/* Legenda do produto */}
            </div>
            <div className={styles.image_container}>
              <img src="/images/panettone-com-nozes.png" alt="Imagem Panettone com Nozes"/>
              <p className={styles.caption}>Panettone com Nozes</p> {/* Legenda do produto */}
            </div>
            <div className={styles.image_container}>
              <img src="/images/pao-italiano.png" alt="Imagem Pão Italiano Artesanal"/>
              <p className={styles.caption}>Pão Italiano Artesanal</p> {/* Legenda do produto */}
            </div>
            <div className={styles.image_container}>
              <img src="/images/ciabatta.png" alt="Imagem Ciabatta"/>
              <p className={styles.caption}>Ciabatta</p> {/* Legenda do produto */}
            </div>
          </div>

          {/* Segundo conjunto de imagens para o efeito de carrossel */}
          <div className={styles.images_slide}>
            <div className={styles.image_container}>
              <img src="/images/croissant.png" alt="Imagem Croissant"/>
              <p className={styles.caption}>Croissant</p> {/* Legenda do produto */}
            </div>
            <div className={styles.image_container}>
              <img src="/images/pao-integral-com-uvas-passas-e-canela.png" alt="Imagem Pão integral com uvas passas e canela"/>
              <p className={styles.caption}>Pão Integral com Uvas Passas</p> {/* Legenda do produto */}
            </div>
            <div className={styles.image_container}>
              <img src="/images/panettone-com-nozes.png" alt="Imagem Panettone com Nozes"/>
              <p className={styles.caption}>Panettone com Nozes</p> {/* Legenda do produto */}
            </div>
            <div className={styles.image_container}>
              <img src="/images/pao-italiano.png" alt="Imagem Pão Italiano Artesanal"/>
              <p className={styles.caption}>Pão Italiano Artesanal</p> {/* Legenda do produto */}
            </div>
            <div className={styles.image_container}>
              <img src="/images/ciabatta.png" alt="Imagem Ciabatta"/>
              <p className={styles.caption}>Ciabatta</p> {/* Legenda do produto */}
            </div>
          </div>

        </div>
        
      </section>
    );
}

export default Boulangerie;
