import React from 'react';
import NavItem from './NavItem';
import Logo from './Logo';

interface NavbarProps {
    isOpen: boolean;
    toggleNav: () => void;
    activeLink: string;
    onSelect: (href: string) => void;
    children?: React.ReactNode;
}

interface NavLink {
    href: string;
    label: string;
    active?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
    isOpen,
    toggleNav,
    activeLink,
    onSelect,
    children,
}) => {
    const navItems: NavLink[] = [
        { href: '#home', label: 'Главная', active: true },
        { href: '#menu', label: 'Меню' },
        { href: '#about', label: 'О нас' },
        { href: '#event', label: 'Новости' },
        { href: '#contacts', label: 'Контакты' },
    ];

    return (
        <nav
            id="site-navigation"
            className={`navbar ${isOpen ? 'active' : ''}`}
            aria-label="Основная навигация"
            data-navbar
        >
            <button
                type="button"
                className="close-btn"
                aria-label="Закрыть меню"
                onClick={toggleNav}
                data-nav-toggler
            >
                <svg
                    className="close-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M6 6l12 12M18 6 6 18" />
                </svg>
            </button>

            <Logo />

            <ul className="navbar-list">
                {navItems.map((item) => (
                    <NavItem
                        key={item.href}
                        {...item}
                        active={activeLink === item.href}
                        onClick={() => onSelect(item.href)}
                    />
                ))}
            </ul>

            <div className="text-center">{children}</div>
        </nav>
    );
};

export default Navbar;
