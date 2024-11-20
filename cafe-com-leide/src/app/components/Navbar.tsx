"use client"; // Indica que este componente é renderizado no cliente (client-side rendering)

import { useState, useEffect } from "react"; // Hooks do React para estado e efeitos
import { FaInstagram, FaFacebook, FaTiktok, FaBars } from "react-icons/fa"; // Ícones de redes sociais e ícone do menu hambúrguer
import Link from "next/link"; // Componente para navegação no Next.js
import Image from "next/image"; // Componente otimizado para imagens no Next.js
import styles from "@/app/styles/components/Navbar.module.css"; // Importa estilos CSS modularizados

// Componente Navbar
const Navbar = () => {
  // Estado para monitorar se o usuário rolou a página
  const [scrolled, setScrolled] = useState(false);
  // Estado para alternar a abertura do menu no mobile
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect para detectar o scroll na página e ajustar a navbar
  useEffect(() => {
    const handleScroll = () => {
      // Define "scrolled" como true se o scrollY for maior que 50
      setScrolled(window.scrollY > 50);
    };

    // Adiciona o evento de scroll
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remove o evento de scroll ao desmontar o componente
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Dependência vazia significa que será executado apenas uma vez no início

  // Alterna o estado de abertura do menu (true/false)
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`${styles.menu} ${
        scrolled || menuOpen ? styles.scrolled : "" // Aplica a classe "scrolled" se o menu estiver aberto ou se houve scroll
      }`}
    >
      {/* Logo da navbar, redireciona para a página inicial */}
      <Link href="/">
        <Image
          className={styles.logo} // Estilos CSS aplicados ao logo
          src="/images/logo_no_bg.png" // Caminho para o arquivo de imagem
          width={75} // Largura da imagem
          height={75} // Altura da imagem
          alt="Logo Café Com Leide" // Texto alternativo para acessibilidade
        />
      </Link>

      {/* Lista de links de navegação */}
      <ul className={`${styles.buttons} ${menuOpen ? styles.active : ""}`}>
        {" "}
        {/* Aplica a classe "active" se o menu estiver aberto */}
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

      {/* Seção de ícones de redes sociais e do menu hambúrguer */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {" "}
        {/* Contêiner flex para alinhamento */}
        {/* Ícones de redes sociais */}
        <div className={styles.socials}>
          <Link
            target="_blank" // Abre o link em uma nova aba
            rel="noopener noreferrer" // Melhoria de segurança para links externos
            href="https://www.instagram.com/cafecomleide.ubatuba/" // URL do Instagram
            aria-label="Instagram" // Acessibilidade: descrição para leitores de tela
          >
            <FaInstagram /> {/* Ícone do Instagram */}
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@cafecomleide.ubatuba" // URL do TikTok
            aria-label="TikTok"
          >
            <FaTiktok /> {/* Ícone do TikTok */}
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/cafecomleide.ubatuba" // URL do Facebook
            aria-label="Facebook"
          >
            <FaFacebook /> {/* Ícone do Facebook */}
          </Link>
        </div>
        {/* Ícone do menu hambúrguer para dispositivos móveis */}
        <div
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`} // Aplica a classe "active" se o menu estiver aberto
          onClick={toggleMenu} // Alterna a abertura do menu ao clicar
        >
          <FaBars /> {/* Ícone do menu hambúrguer */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; // Exporta o componente para ser usado em outras partes do projeto
