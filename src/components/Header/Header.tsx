'use client';

import { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import ContactInfo from './ContactInfo';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const lastScrollPos = useRef(0);
    const [activeLink, setActiveLink] = useState<string>('#home');

    const toggleNavbar = () => setIsNavOpen((prev) => !prev);

    useEffect(() => {
        const sectionIds = ['home', 'about', 'menu', 'event', 'contacts'];
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter((section): section is HTMLElement => section !== null);
        let animationFrameId: number | null = null;

        const updateActiveLink = () => {
            const viewportMarker = window.scrollY + window.innerHeight * 0.35;
            let currentSection = sections[0]?.id ?? 'home';

            for (const section of sections) {
                if (section.offsetTop <= viewportMarker) {
                    currentSection = section.id;
                }
            }

            setActiveLink(`#${currentSection}`);
        };

        const handleScroll = () => {
            if (animationFrameId !== null) return;

            animationFrameId = window.requestAnimationFrame(() => {
                const currentPos = window.scrollY;
                setIsActive(currentPos >= 50);

                const isScrollDown = currentPos > lastScrollPos.current;
                setIsHidden(isScrollDown && currentPos > 50);

                lastScrollPos.current = currentPos;
                updateActiveLink();
                animationFrameId = null;
            });
        };

        updateActiveLink();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', updateActiveLink);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateActiveLink);
            if (animationFrameId !== null) {
                window.cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    useEffect(() => {
        document.body.classList.toggle('nav-active', isNavOpen);
        return () => {
            document.body.classList.remove('nav-active');
        };
    }, [isNavOpen]);

    useEffect(() => {
        document.body.classList.toggle('header-scrolled', isActive);
        return () => document.body.classList.remove('header-scrolled');
    }, [isActive]);

    const handleNavItemSelect = (href: string) => {
        setActiveLink(href);
        setIsNavOpen(false);
    };

    return (
        <header
            className={`header ${isActive ? 'active' : ''} ${
                isHidden ? 'hide' : ''
            }`}
            data-header
        >
            <div className="container">
                <Logo />

                <Navbar
                    isOpen={isNavOpen}
                    toggleNav={toggleNavbar}
                    activeLink={activeLink}
                    onSelect={handleNavItemSelect}
                >
                    <ContactInfo />
                </Navbar>

                <button
                    type="button"
                    className="nav-open-btn"
                    aria-label="Открыть меню"
                    aria-expanded={isNavOpen}
                    aria-controls="site-navigation"
                    onClick={toggleNavbar}
                    data-nav-toggler
                >
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                    <span className="line line-3"></span>
                </button>

                <button
                    type="button"
                    className={`overlay ${isNavOpen ? 'active' : ''}`}
                    aria-label="Закрыть меню"
                    tabIndex={isNavOpen ? 0 : -1}
                    onClick={toggleNavbar}
                    data-overlay
                />
            </div>
        </header>
    );
};

export default Header;
