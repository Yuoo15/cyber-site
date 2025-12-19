import styles from './footer.module.css';
import Link from 'next/link';

export default () => {
  return (
    <footer className={styles.footer}id='contacts'>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h2 className={styles.logo}>Onion<span>Guild</span></h2>
            <p className={styles.description}>
              Ваш надежный партнер в мире кибербезопасности. Защищаем то, что вам дорого.
            </p>
          </div>

          <div className={styles.links}>
            <h3>Навигация</h3>
            <ul>
              <li><a href="#home">Главная</a></li>
              <li><a href="#services">Услуги</a></li>
              <li><a href="#about">О нас</a></li>
              <li><a href="https://t.me/OnionGuild">Новости</a></li>
            </ul>
          </div>
          <div className={styles.contacts}>
            <h3>Связь</h3>
            <p>Telegram: @onionguilder</p>
            <p>Email: onionguard@gmail.com</p>
            <a className={styles.contactBtn} href='https://t.me/onionguilder'>Написать нам</a>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>© 2025 OnionGuild. Все права защищены.</p>
          <div className={styles.legal}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};