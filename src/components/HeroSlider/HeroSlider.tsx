'use client';

import { useCallback, useEffect, useState, useRef } from 'react';
import { withBasePath } from '@/shared/lib/with-base-path';

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
        bg: withBasePath('/images/hero-slider-1.jpg'),
        subtitle: 'Добро пожаловать',
        title: 'БанкетХолл Kremleff',
        text: 'Специализация на русской кухне в авторском исполнении',
        buttonText: 'Забронировать',
        buttonLink: '#contacts',
    },
    {
        id: 2,
        bg: withBasePath('/images/hero-slider-2.jpg'),
        subtitle: 'Лучшие блюда',
        title: 'Авторская кухня',
        text: 'Попробуйте наши фирменные блюда от шеф-повара',
        buttonText: 'Меню',
        buttonLink: '#menu',
    },
    {
        id: 3,
        bg: withBasePath('/images/hero-slider-3.jpg'),
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
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const slideNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, []);

    const slidePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const startAutoSlide = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(slideNext, AUTO_SLIDE_INTERVAL);
    }, [slideNext]);

    const stopAutoSlide = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    useEffect(() => {
        startAutoSlide();
        return stopAutoSlide;
    }, [startAutoSlide]);

    return (
        <section className="hero" data-hero-slider id="home">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`slider-item ${
                        index === currentIndex ? 'active' : ''
                    }`}
                    data-hero-slider-item
                >
                    <div className="slider-bg">
                        <img
                            src={slide.bg}
                            alt={slide.title}
                            loading={index === 0 ? 'eager' : 'lazy'}
                            fetchPriority={index === 0 ? 'high' : 'auto'}
                        />
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
                type="button"
                className="slider-btn prev"
                aria-label="Предыдущий слайд"
                data-prev-btn
                onClick={slidePrev}
                onMouseOver={stopAutoSlide}
                onMouseOut={startAutoSlide}
            >
                <svg
                    className="slider-arrow"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="m15 5-7 7 7 7" />
                </svg>
            </button>

            <button
                type="button"
                className="slider-btn next"
                aria-label="Следующий слайд"
                data-next-btn
                onClick={slideNext}
                onMouseOver={stopAutoSlide}
                onMouseOut={startAutoSlide}
            >
                <svg
                    className="slider-arrow"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="m9 5 7 7-7 7" />
                </svg>
            </button>

            <a
                href="https://rest-kremleff.ru/menu/Banketnoe_menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn has-after"
            >
                <img
                    src={withBasePath('/images/krem-logo.png')}
                    width="80"
                    height="80"
                    alt="booking icon"
                />
            </a>
        </section>
    );
};

export default HeroSlider;
