// src/app/components/About.tsx

import React from "react";
import Image from "next/image";
import styles from "../styles/components/About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.content}>

        <div className={styles.imageContainer}>
          <Image
            src="/images/leide.png"
            alt="Imagem da Leide segurando um pão italiano artesanal"
            width={542}
            height={672}
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h2>SOBRE NÓS</h2>
          <h3>Fazendo produtos artesanais desde XXXX</h3>
          <p>
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
