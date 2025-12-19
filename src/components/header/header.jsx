'use client';
import { useState } from 'react';
import styles from './header.module.css';

export default () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <header className={styles.header}>
            <h1 className={styles.logo}>OnionGuild</h1>
            
            <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
            </button>

            <nav className={`${styles.nav} ${menuOpen ? styles.nav_open : ''}`}>
            <a className={styles.link} href="#home">Главная</a>
            <a className={styles.link} href="#services">Услуги</a>
            <a className={styles.link} href="#about">О нас</a>
            <a className={styles.link} href="#contacts">Контакты</a>
            </nav>
            
            <a className={styles.manager} href="https://t.me/OnionGuild">Наш канал</a>
        </header>
        </>
    );
};