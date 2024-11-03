"use client";

import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/components/Navbar.module.css";


export default function Navbar () {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(!isActive);
	}

    return (
        <nav className={styles.menu}>
            <Link href="/"> <Image className="logo" src="/images/logo.png" width="75" height="75" alt="Logo Café Com Leide"/> </Link>
        	<ul className={`${isActive ? styles.active : ""} ${styles.buttons}`}>
                <li><Link href="/#instituicao" onClick={handleClick}>Sobre</Link></li>
                <li><Link href="/#conquistas" onClick={handleClick}>Boulangerie</Link></li>
                <li><Link href="/#transparencia" onClick={handleClick}>Produtos</Link></li>
                <li><Link href="/#contato" onClick={handleClick}>Contato</Link></li>
            </ul>

            <div className={styles.icons}>
				<div className={styles.width}></div>
				<button onClick={handleClick} className={styles.hamburguer}></button>

				<div className={styles.socials}>
					<Link target="_blank" href="https://www.instagram.com/cafecomleide.ubatuba/"><FaInstagram className="icon_insta"/></Link>
					<Link target="_blank" href="https://www.tiktok.com/@cafecomleide.ubatuba"><FaTiktok className="icon_insta"/></Link>
					<Link target="_blank" href="https://www.facebook.com/"><FaFacebook className="icon_face"/></Link>
				</div>
            </div>
        </nav>
    );
}