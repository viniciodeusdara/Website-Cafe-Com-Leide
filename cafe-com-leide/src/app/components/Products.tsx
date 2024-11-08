import React from "react";
import styles from "../styles/components/Products.module.css";

const Products = () => {
    return (
      <section id="products">
        <div>
          <div className={styles.container}>
        <div className={styles.header}>
            <h1>NOSSOS PRODUTOS</h1>
            <p>Descubra nossas delícias artesanais, feitas com ingredientes selecionados e muito carinho. São doces, bolos, tortas e sobremesas, criados para oferecer uma experiência única em cada mordida. Seja para uma ocasião especial ou para adoçar seu dia, nossos produtos trazem tradição e qualidade. Surpreenda-se com o sabor inigualável do artesanal!</p>
        </div>
        <div className={styles.gallery}>
            <div className={styles.item}>
                <img src="/images/italianinho.png" alt="Italianinho"/>
                <span>Italianinho</span>
            </div>
            <div className={styles.item}>
                <img src="/images/bolo_brigadeiro_gourmet.png" alt="Bolo de Brigadeiro Gourmet"/>
                <span>Bolo de Brigadeiro Gourmet</span>
            </div>
            <div className={styles.item}>
                <img src="/images/bolo_de_chocolate.png" alt="Bolo de chocolate"/>
                <span>Bolo de chocolate</span>
            </div>
            <div className={styles.item}>
                <img src="/images/torta_merengue_com_morangos.png" alt="Torta Merengue com morangos"/>
                <span>Torta Merengue com morangos</span>
            </div>
            <div className={styles.item}>
                <img src="/images/mini_naked_cake.png" alt="Mini Naked Cake"/>
                <span>Mini Naked Cake</span>
            </div>
            <div className={styles.item}>
                <img src="/images/rocambole_de_frutas_vermelhas.png" alt="Rocambole de frutas vermelhas"/>
                <span>Rocambole de frutas vermelhas</span>
            </div>
            <div className={styles.item}>
                <img src="/images/macarons.png" alt="Macarons"/>
                <span>Macarons</span>
            </div>
            <div className={styles.item}>
                <img src="/images/caneles.png" alt="Canelés"/>
                <span>Canelés</span>
            </div>
        </div>
      </div>
    </div>
      </section>
    );
  };

export default Products