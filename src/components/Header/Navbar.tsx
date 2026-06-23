import React from 'react';
import NavItem from './NavItem';
import Logo from './Logo';
import { IonIcon } from '@ionic/react';
import { chevronUpOutline } from 'ionicons/icons';

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
        <nav className={`navbar ${isOpen ? 'active' : ''}`} data-navbar>
            <button
                className="close-btn"
                aria-label="close menu"
                onClick={toggleNav}
                data-nav-toggler
            >
                <IonIcon icon={chevronUpOutline} />
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
