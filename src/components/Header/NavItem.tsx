import React from 'react';

interface NavItemProps {
    href: string;
    label: string;
    active?: boolean;
    onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, active, onClick }) => (
    <li className="navbar-item">
        <a
            href={href}
            className={`navbar-link hover-underline ${active ? 'active' : ''}`}
            onClick={onClick}
        > 
            <div className="separator"></div>
            <span className="span">{label}</span>
        </a>
    </li>
);

export default NavItem;
