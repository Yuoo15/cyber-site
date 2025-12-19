'use client';
import { services } from '../../data/services.js';
import Block from '../block/block.jsx';
import styles from './servies.module.css';

// Импорт Swiper React компонентов и стилей
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default () => {
    return (
        <section className={styles.container} id="services">
            <div className={styles.header_text}>
                <h2 className={styles.h2}>Наши услуги</h2>
                <p className={styles.p}>Комплексные решения для вашей безопасности и стабильности в сети.</p>
            </div>
            <div>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={30} // Отступ между слайдами
                slidesPerView={1} // По умолчанию 1 слайд (для мобилок)
                loop={true} // Бесконечная прокрутка
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Автопрокрутка
                pagination={{ clickable: true }} // Точки внизу
                navigation={false} // Стрелки по бокам
                breakpoints={{
                    // Настройки для разных экранов
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                className={styles.mySwiper}
            >
                {services.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.slide_content}>
                            <Block
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </section>
    );
};