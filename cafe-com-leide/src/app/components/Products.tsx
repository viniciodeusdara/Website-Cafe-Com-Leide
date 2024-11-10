import React from "react";
import styles from "../styles/components/Products.module.css";

// Componente Products que exibe uma galeria dos produtos da padaria
const Products = () => {
    return (
      <section id="products"> {/* Seção com id "products" para navegação interna */}
        <div>
          <div className={styles.container}>
            
            {/* Cabeçalho da seção com título e descrição dos produtos */}
            <div className={styles.header}>
                <h1>NOSSOS PRODUTOS</h1> {/* Título da seção */}
                <p>
                  {/* Descrição dos produtos destacando os ingredientes selecionados e o toque artesanal */}
                  Descubra nossas delícias artesanais, feitas com ingredientes selecionados e muito carinho. São doces, bolos, tortas e sobremesas, criados para oferecer uma experiência única em cada mordida. Seja para uma ocasião especial ou para adoçar seu dia, nossos produtos trazem tradição e qualidade. Surpreenda-se com o sabor inigualável do artesanal!
                </p>
            </div>

            {/* Galeria de produtos com imagens e nomes dos itens */}
            <div className={styles.gallery}>
                
                {/* Cada produto é representado como um item da galeria com uma imagem e uma legenda */}
                
                <div className={styles.item}>
                    <img src="/images/italianinho.png" alt="Italianinho"/> {/* Imagem */}
                    <span>Italianinho</span> {/* Nome do Produto */}
                </div>
                
                <div className={styles.item}>
                    <img src="/images/bolo_brigadeiro_gourmet.png" alt="Bolo de Brigadeiro Gourmet"/> {/* Imagem */}
                    <span>Bolo de Brigadeiro Gourmet</span> {/* Nome do Produto */}
                </div>
                
                <div className={styles.item}>
                    <img src="/images/bolo_de_chocolate.png" alt="Bolo de chocolate"/> {/* Imagem */}
                    <span>Bolo de chocolate</span> {/* Nome do Produto */}
                </div>
                
                <div className={styles.item}>
                    <img src="/images/torta_merengue_com_morangos.png" alt="Torta Merengue com morangos"/> {/* Imagem */}
                    <span>Torta Merengue com morangos</span> {/* Nome do Produto */}
                </div>
                
                <div className={styles.item}>
                    <img src="/images/mini_naked_cake.png" alt="Mini Naked Cake"/> {/* Imagem */}
                    <span>Mini Naked Cake</span> {/* Nome do Produto */}
                </div>
                
                <div className={styles.item}>
                    <img src="/images/rocambole_de_frutas_vermelhas.png" alt="Rocambole de frutas vermelhas"/> {/* Imagem */}
                    <span>Rocambole de frutas vermelhas</span> {/* Nome do Produto */}
                </div>
                
                <div className={styles.item}>
                    <img src="/images/macarons.png" alt="Macarons"/> {/* Imagem */}
                    <span>Macarons</span> {/* Nome do Produto */}
                </div>
                
                <div className={styles.item}>
                    <img src="/images/caneles.png" alt="Canelés"/> {/* Imagem */}
                    <span>Canelés</span> {/* Nome do Produto */}
                </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Products;
