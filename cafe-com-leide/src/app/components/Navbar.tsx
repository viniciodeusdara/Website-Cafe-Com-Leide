"use client";

import { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaTiktok, FaBars } from "react-icons/fa"; // Ícones de redes sociais e ícone de hambúrguer
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/components/Navbar.module.css";




const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detecta o scroll para mudar a cor da navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Alterna a abertura do menu no mobile
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.menu} ${scrolled ? styles.scrolled : ""}`}>
      {/* Logo com link para a página inicial */}
      <Link href="/">
        <Image
          className={styles.logo}
          src="/images/logo_no_bg.png"
          width={75}
          height={75}
          alt="Logo Café Com Leide"
        />
      </Link>

      {/* Links de navegação */}
      <ul className={`${styles.buttons} ${menuOpen ? styles.active : ""}`}>
        <li>
          <Link href="/#about">Sobre</Link>
        </li>
        <li>
          <Link href="/#boulangerie">Boulangerie</Link>
        </li>
        <li>
          <Link href="/#products">Produtos</Link>
        </li>
        <li>
          <Link href="/#production">Produção</Link>
        </li>
        <li>
          <Link href="/#contact">Contato</Link>
        </li>
      </ul>

      {/* Ícones de redes sociais e ícone de menu hambúrguer */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={styles.socials}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/cafecomleide.ubatuba/"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tiktok.com/@cafecomleide.ubatuba"
              aria-label="TikTok"
            >
              <FaTiktok />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/cafecomleide.ubatuba"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
          </div>

          {/* Ícone do menu hambúrguer (apenas no mobile) */}
          <div className={styles.hamburger} onClick={toggleMenu}>
            <FaBars />
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
