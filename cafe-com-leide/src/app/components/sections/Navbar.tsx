"use client";

import { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/components/sections/Navbar.module.css";

export default function Navbar() {

    // Adicionando efeito de mudança ao fazer o scroll da página
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50; 
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    // Estrutura da página
    return (
        <nav className={`${styles.menu} ${scrolled ? styles.scrolled : ""}`}>
            <Link href="/">
                <Image className={styles.logo} src="/images/logo.png" width={75} height={75} alt="Logo Café Com Leide" />
            </Link>
            <ul className={`${styles.buttons} ${scrolled ? styles.scrolled : ""}`}>
                <li><Link href="/#Sobre">Sobre</Link></li>
                <li><Link href="/#Boulangerie">Boulangerie</Link></li>
                <li><Link href="/#Produtos">Produtos</Link></li>
                <li><Link href="/#Contato">Contato</Link></li>
            </ul>

            <div className={`${styles.socials} ${scrolled ? styles.scrolled : ""}`}>
                <Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/cafecomleide.ubatuba/" aria-label="Instagram">
                    <FaInstagram className={styles.iconInsta} />
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@cafecomleide.ubatuba" aria-label="TikTok">
                    <FaTiktok className={styles.iconInsta} />
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/" aria-label="Facebook">
                    <FaFacebook className={styles.iconFace} />
                </Link>
            </div>
        </nav>
    );
}
