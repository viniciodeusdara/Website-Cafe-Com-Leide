import React from "react";
import styles from "../styles/components/Contacts.module.css";

const Contacts = () => {
    return (
      <section>
        <div>
          <h1 className={styles.titulo}>Contact</h1>
        </div>

        <div className={styles.container}>
        
        <div className={styles.map}>
          <iframe className={styles.iframe}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4641.633374081745!2d-45.0725782062709!3d-23.433983882229374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd538f36d0e96d%3A0xc2e03b7f16c699a5!2sCaf%C3%A9%20com%20Leide%20-%20Padaria%20Artesanal!5e0!3m2!1spt-BR!2sbr!4v1730728888014!5m2!1spt-BR!2sbr">
          </iframe>
        </div>
        

        
        <div className={styles.contact_info}>
            <div className={styles.social_links}>
            <h1>Redes sociais: </h1>
                <p><img src="/images/ciabatta.png" alt="Instagram"/> @cafecomleide.ubatuba</p>
                <p><img src="/images/ciabatta.png" alt="TikTok"/> @cafecomleide.ubatuba</p>
                <p><img src="/images/ciabatta.png" alt="Facebook"/> @cafecomleide.ubatuba</p>
            </div>
            <div className={styles.address}>
              <h1>Endereço: </h1>
                <p>Av. Iperoig, nº 166 - Shopping</p>
              <h1>Telefone: </h1>
                <p>(12) 99748-4775</p>
            </div>
        </div>
        </div>
      </section>
    );
  };

export default Contacts;