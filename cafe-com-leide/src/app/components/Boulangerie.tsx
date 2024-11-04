import styles from "../styles/components/Boulangerie.module.css";
// import Carrousel from "@/app/patterns/Carousel"
import Image from "next/image";
const Boulangerie = () => {
    return (
      <section className={styles.products_carousel}>


        <div className={styles.textContainer}>
            <h2>
              <span>Boulangerie</span>
            </h2>
            <a>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iure eligendi nostrum eveniet temporibus nemo, totam aspernatur, nihil dolore rerum ipsum repellendus blanditiis laboriosam maiores enim facilis non omnis voluptate.
            </a>
        </div>


        <div className={styles.images}>


          <div className={styles.images_slide}>
            <div className={styles.image_container}>
              <img src="/images/croissant.png" alt="Imagem Croissant"/>
              <p className={styles.caption}>Croissant</p>
            </div>
            <div className={styles.image_container}>
              <img src="/images/pão-integral-com-uvas-passas-e-canela.png" alt="Imagem Pão integral com uvas passas e canela"/>
              <p className={styles.caption}>Pão Integral com Uvas Passas</p>
            </div>
            <div className={styles.image_container}>
              <img src="/images/panettone-com-nozes.png" alt="Imagem Panettone com Nozes"/>
              <p className={styles.caption}>Panettone com Nozes</p>
            </div>
            <div className={styles.image_container}>
              <img src="/images/pão-italiano.png" alt="Imagem Pão Italiano Artesanal"/>
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
              <img src="/images/pão-integral-com-uvas-passas-e-canela.png" alt="Imagem Pão integral com uvas passas e canela"/>
              <p className={styles.caption}>Pão Integral com Uvas Passas</p>
            </div>
            <div className={styles.image_container}>
              <img src="/images/panettone-com-nozes.png" alt="Imagem Panettone com Nozes"/>
              <p className={styles.caption}>Panettone com Nozes</p>
            </div>
            <div className={styles.image_container}>
              <img src="/images/pão-italiano.png" alt="Imagem Pão Italiano Artesanal"/>
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