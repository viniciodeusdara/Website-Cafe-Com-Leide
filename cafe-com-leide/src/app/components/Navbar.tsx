// src/app/components/Navbar.tsx

import React from "react";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa"; // Importação dos ícones
import styles from "../styles/components/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>LOGO</div>

      <ul className={styles.navLinks}>
        <li>
          <Link href="#about">Sobre</Link>
        </li>
        <li>
          <Link href="#boulangerie">Boulangerie</Link>
        </li>
        <li>
          <Link href="#products">Produtos</Link>
        </li>
        <li>
          <Link href="#contact">Contato</Link>
        </li>
      </ul>

      <div className={styles.socialIcons}>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
