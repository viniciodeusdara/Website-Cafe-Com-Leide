import styles from "../styles/components/Boulangerie.module.css";
// import Carrousel from "@/app/patterns/Carousel"
import Image from "next/image";
const Boulangerie = () => {
    return (
      <section id="boulangerie" className={styles.products_carousel}>


        <div className={styles.textContainer}>
            <h2>
              <span>BOULANGERIE</span>
            </h2>
            <a>
              Nossa boulangerie é um encontro de tradição e paixão. Cada pão nasce das mãos habilidosas de quem ama o que faz, transformando ingredientes frescos em uma sinfonia de aromas e sabores. Aqui, o tempo é nosso aliado, e o carinho é o segredo. Venha descobrir pães que contam histórias e aquecem o coração.
            </a>
        </div>


        <div className={styles.images}>


          <div className={styles.images_slide}>
            <div className={styles.image_container}>
              <img src="/images/croissant.png" alt="Imagem Croissant"/>
              <p className={styles.caption}>Croissant</p>
            </div>
            <div className={styles.image_container}>
              <img src="/images/pao-integral-com-uvas-passas-e-canela.png" alt="Imagem Pão integral com uvas passas e canela"/>
              <p className={styles.caption}>Pão Integral com Uvas Passas</p>
            </div>
            <div className={styles.image_container}>
              <img src="/images/panettone-com-nozes.png" alt="Imagem Panettone com Nozes"/>
              <p className={styles.caption}>Panettone com Nozes</p>
            </div>
            <div className={styles.image_container}>
              <img src="/images/pao-italiano.png" alt="Imagem Pão Italiano Artesanal"/>
              <p className={styles.caption}>Pão Italiano Artesanal</p>
            </div>
            <div className={styles.image_container}>
              <img src="/images/ciabatta.png" alt="Imagem Ciabatta"/>
              <p className={styles.caption}>Ciabatta</p>
            </div>
          </div>


          <div className={styles.images_slide}>
            <div className={styles.image_container}>
              <img src="/images/croissant.png" alt="Imagem Croissant"/>
              <p className={styles.caption}>Croissant</p>
            </div>
            <div className={styles.image_container}>
              <img src="/images/pao-integral-com-uvas-passas-e-canela.png" alt="Imagem Pão integral com uvas passas e canela"/>
              <p className={styles.caption}>Pão Integral com Uvas Passas</p>
            </div>
            <div className={styles.image_container}>
              <img src="/images/panettone-com-nozes.png" alt="Imagem Panettone com Nozes"/>
              <p className={styles.caption}>Panettone com Nozes</p>
            </div>
            <div className={styles.image_container}>
              <img src="/images/pao-italiano.png" alt="Imagem Pão Italiano Artesanal"/>
              <p className={styles.caption}>Pão Italiano Artesanal</p>
            </div>
            <div className={styles.image_container}>
              <img src="/images/ciabatta.png" alt="Imagem Ciabatta"/>
              <p className={styles.caption}>Ciabatta</p>
            </div>
          </div>


        </div>
        
      </section>
    );
  }

export default Boulangerie;