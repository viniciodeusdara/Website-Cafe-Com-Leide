import React from "react";
import Link from "next/link";
import styles from "@/app/styles/components/Footer.module.css";

// Componente Footer que exibe o rodapé do site com créditos de desenvolvimento à FGV JR
const Footer = () => {
  return (
    <section className={styles.footer}>
      {/* Texto do rodapé com ano atual e link para o site da FGV JR */}
      <h3>
        &copy;2024 - 
        <Link target="_blank" href="https://fgvjr.com/"> Developed by FGV JR</Link>
      </h3>
    </section>
  );
};

export default Footer;
