import Image from "next/image";
import styles from "./about.module.css";
// Предположим, твоё фото импортировано как 'f'
import f from "../../public/logo.jpg"; 

export default () => {
    return (
        <section className={styles.container} id="about">
            <div className={styles.header_text}>
                <h2 className={styles.h2}>О нас</h2>
                <p className={styles.subtitle}>Кто мы и какую миссию несем?</p>
            </div>

            <div className={styles.content_wrapper}>
                <div className={styles.image_box}>
                    <Image 
                        src={f} 
                        alt="OnionGuild Team" 
                        className={styles.photo}
                        placeholder="blur" // Если есть blurDataURL
                    />
                    <div className={styles.photo_border}></div>
                </div>

                <div className={styles.text_box}>
                    <h3 className={styles.title}>OnionGuild — ваш щит в цифровом мире</h3>
                    <p className={styles.description}>
                        Мы — команда экспертов в области кибербезопасности, объединившаяся для создания 
                        безопасной среды в сети. Наш опыт позволяет решать задачи любой сложности: 
                        от защиты данных до аудита систем.
                    </p>
                    <p className={styles.description}>
                        Прозрачность, надежность и инновации — это то, на чем строится каждый наш проект. 
                        Мы не просто делаем работу, мы строим экосистему доверия.
                    </p>
                    <div className={styles.stats}>
                        <div className={styles.stat_item}>
                            <span>5+</span> лет опыта
                        </div>
                        <div className={styles.stat_item}>
                            <span>100%</span> защиты
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};