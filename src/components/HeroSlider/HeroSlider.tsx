import React, { useEffect, useState, useRef } from 'react';
import { IonIcon } from '@ionic/react';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';

interface Slide {
    id: number;
    bg: string;
    subtitle: string;
    title: string;
    text: string;
    buttonText: string;
    buttonLink: string;
}

const slides: Slide[] = [
    {
        id: 1,
        bg: 'images/hero-slider-1.jpg',
        subtitle: 'Добро пожаловать',
        title: 'БанкетХолл Kremleff',
        text: 'Специализация на русской кухне в авторском исполнении',
        buttonText: 'Забронировать',
        buttonLink: '#contacts',
    },
    {
        id: 2,
        bg: 'images/hero-slider-2.jpg',
        subtitle: 'Лучшие блюда',
        title: 'Авторская кухня',
        text: 'Попробуйте наши фирменные блюда от шеф-повара',
        buttonText: 'Меню',
        buttonLink: '#menu',
    },
    {
        id: 3,
        bg: 'images/hero-slider-3.jpg',
        subtitle: 'Незабываемые вечера',
        title: 'Уютная атмосфера',
        text: 'Проведите вечер в комфортной обстановке',
        buttonText: 'О нас',
        buttonLink: '#about',
    },
];

const AUTO_SLIDE_INTERVAL = 7000;

const HeroSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<any | null>(null);

    const slideNext = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const slidePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        startAutoSlide();
        return stopAutoSlide;
    }, []);

    const startAutoSlide = () => {
        stopAutoSlide();
        intervalRef.current = setInterval(slideNext, AUTO_SLIDE_INTERVAL);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    return (
        <section className="hero" data-hero-slider id="Home">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`slider-item ${
                        index === currentIndex ? 'active' : ''
                    }`}
                    data-hero-slider-item
                >
                    <div className="slider-bg">
                        <img src={slide.bg} alt={slide.title} loading="lazy" />
                    </div>

                    <p className="label-2 section-subtitle slider-reveal text-center">
                        {slide.subtitle}
                    </p>
                    <h1 className="display-1 hero-title slider-reveal text-center">
                        {slide.title}
                    </h1>
                    <p className="body-2 hero-text slider-reveal text-center">
                        {slide.text}
                    </p>

                    <a
                        href={slide.buttonLink}
                        className="btn btn-primary slider-reveal"
                    >
                        <span className="text text-1">{slide.buttonText}</span>

                        <span className="text text-2" aria-hidden="true">
                            {slide.buttonText}
                        </span>
                    </a>
                </div>
            ))}

            <button
                className="slider-btn prev"
                data-prev-btn
                onClick={slidePrev}
                onMouseOver={stopAutoSlide}
                onMouseOut={startAutoSlide}
            >
                <IonIcon icon={chevronBackOutline} />
            </button>

            <button
                className="slider-btn next"
                data-next-btn
                onClick={slideNext}
                onMouseOver={stopAutoSlide}
                onMouseOut={startAutoSlide}
            >
                <IonIcon icon={chevronForwardOutline} />
            </button>

            <a
                href="https://rest-kremleff.ru/menu/Banketnoe_menu.pdf"
                target="_blank"
                className="hero-btn has-after"
            >
                <img
                    src="images/krem-logo.png"
                    width="80"
                    height="80"
                    alt="booking icon"
                />
            </a>
        </section>
    );
};

export default HeroSlider;
