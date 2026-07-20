'use client';

import { useEffect, useState } from 'react';

const BackToTopButton: React.FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        const onScroll = () => setIsActive(window.scrollY >= 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: 'smooth' as ScrollBehavior });

    return (
        <button
            type="button"
            className={`back-top-btn ${isActive ? 'active' : ''}`}
            onClick={scrollToTop}
            data-back-top-btn
            aria-label="Наверх"
        >
            <span aria-hidden="true">↑</span>
        </button>
    );
};

export default BackToTopButton;
