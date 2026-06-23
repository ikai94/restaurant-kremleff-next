import { useState, useEffect } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import ContactInfo from './ContactInfo';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const [lastScrollPos, setLastScrollPos] = useState<number>(0);
    const [activeLink, setActiveLink] = useState<string>('#home');

    const toggleNavbar = () => setIsNavOpen((prev) => !prev);

    useEffect(() => {
        const handleScroll = () => {
            const currentPos = window.scrollY;
            setIsActive(currentPos >= 50);

            const isScrollDown = currentPos > lastScrollPos;
            setIsHidden(isScrollDown && currentPos > 50);

            setLastScrollPos(currentPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollPos]);

    useEffect(() => {
        document.body.classList.toggle('nav-active', isNavOpen);
    }, [isNavOpen]);

    useEffect(() => {
        const syncActiveLinkWithHash = () => {
            const { hash } = window.location;
            setActiveLink(hash || '#home');
        };

        syncActiveLinkWithHash();
        window.addEventListener('hashchange', syncActiveLinkWithHash);

        return () =>
            window.removeEventListener('hashchange', syncActiveLinkWithHash);
    }, []);

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
                    className="nav-open-btn"
                    aria-label="open menu"
                    onClick={toggleNavbar}
                    data-nav-toggler
                >
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                    <span className="line line-3"></span>
                </button>

                <div
                    className={`overlay ${isNavOpen ? 'active' : ''}`}
                    onClick={toggleNavbar}
                    data-overlay
                ></div>
            </div>
        </header>
    );
};

export default Header;
