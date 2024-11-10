"use client";

import { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa"; // Ícones de redes sociais
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/components/Navbar.module.css";

// Componente Navbar que exibe a barra de navegação do site com links para seções (para facilitar a locomoção pelo site) e para redes sociais
const Navbar = () => {

    // Estado `scrolled` para aplicar efeitos quando a página é rolada
    const [scrolled, setScrolled] = useState(false);

    // `useEffect` que adiciona um efeito para atualizar `scrolled` conforme o usuário rola a página, no caso o efeito é que a navbar acompanha o usuário durante toda a sua visita ao site
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50; // Verifica se a rolagem é maior que 50 pixels
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll); // Adiciona o evento de rolagem ao carregar o componente
        return () => {
            window.removeEventListener("scroll", handleScroll); 
        };
    }, []);

    // Estrutura da Navbar com links internos e links para redes sociais
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

            {/* Links de navegação para seções do site */}
            <ul className={`${styles.buttons} ${scrolled ? styles.scrolled : ""}`}>
                <li><Link href="/#about">Sobre</Link></li>
                <li><Link href="/#boulangerie">Boulangerie</Link></li>
                <li><Link href="/#products">Produtos</Link></li>
                <li><Link href="/#production">Produção</Link></li>
                <li><Link href="/#contact">Contato</Link></li>
            </ul>

            {/* Links para redes sociais com ícones personalizados */}
            <div className={`${styles.socials} ${scrolled ? styles.scrolled : ""}`}>
                <Link 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://www.instagram.com/cafecomleide.ubatuba/" 
                    aria-label="Instagram"
                >
                    <FaInstagram className={styles.iconInsta} />
                </Link>
                <Link 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://www.tiktok.com/@cafecomleide.ubatuba" 
                    aria-label="TikTok"
                >
                    <FaTiktok className={styles.iconInsta} />
                </Link>
                <Link 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://www.facebook.com/cafecomleide.ubatuba" 
                    aria-label="Facebook"
                >
                    <FaFacebook className={styles.iconFace} />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
