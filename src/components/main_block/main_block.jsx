import Header from "../header/header";
import styles from "./main_block.module.css";

export default () => {
    return (
        <>
        <Header />
        <div className={styles.container} id="home">
            <div className={styles.text_block}>
            <div className={styles.title}>
                <h1 className={styles.h1}>OnionGuild технологии <br className={styles.br_desktop} />без поверхности</h1>
                <p className={styles.p}>проект по кибербезопасности с опытной командой, прозрачной работой и удобной связью с клиентами.</p>
            </div>
            <div className={styles.buttons}>
                <a className={styles.order} 
                    href="https://t.me/onionguilder" 
                        target="_blank" 
                        rel="noopener noreferrer">Заказать</a>
                <a className={styles.news} 
                href="https://t.me/onionguilder" 
                target="_blank" 
                rel="noopener noreferrer">Менеджер для заказа</a>
            </div>
            </div>
            <div className={styles.info}>
            
                <div className={`${styles.marquee_track} ${styles.row1}`}>
                    <span>500k активных пользователей • 5k ежедневных инвесторов • 8k коллабораций • </span>
                    <span>500k активных пользователей • 5k ежедневных инвесторов • 8k коллабораций • </span>
                </div>
                
            
                <div className={`${styles.marquee_track} ${styles.row2}`}>
                    <span>Cyber Security • OnionGuild Protection • Safe Data • High Speed • </span>
                    <span>Cyber Security • OnionGuild Protection • Safe Data • High Speed • </span>
                </div>

            
                <div className={`${styles.marquee_track} ${styles.row3}`}>
                    <span>Blockchain Tech • 24/7 Support • Verified Assets • Transparent Work • </span>
                    <span>Blockchain Tech • 24/7 Support • Verified Assets • Transparent Work • </span>
                </div>
            </div>
        </div>
    </>
    );
};