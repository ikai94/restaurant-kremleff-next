import { withBasePath } from '@/shared/lib/with-base-path';

interface LinkItem {
    name: string;
    href: string;
}

const navLinks: LinkItem[] = [
    { name: 'Главная', href: '#home' },
    { name: 'Меню', href: '#menu' },
    { name: 'О нас', href: '#about' },
    { name: 'Новости', href: '#event' },
    { name: 'Контакты', href: '#contacts' },
];

const socialLinks: LinkItem[] = [
    { name: 'Telegram', href: 'https://t.me/Kremleffrest' },
    { name: 'Instagram', href: 'https://instagram.com/kremleff/' },
    { name: 'Дзен', href: 'https://dzen.ru/id/652ab8a3c094161c021adbfb' },
    { name: 'Yandex Map', href: 'https://yandex.ru/maps/-/CDBcyR9f' },
];

const Footer = () => {
    return (
        <footer
            id="contacts"
            className="footer section has-bg-image text-center"
            style={{ backgroundImage: `url('${withBasePath('/images/footer-bg.jpg')}')` }}
        >
            <div className="container">
                <div className="footer-top grid-list">
                    {/* Левая часть */}
                    <div className="footer-brand has-before has-after">
                        <a href="#home" className="logo">
                            <img
                                src={withBasePath('/images/krem-logo.png')}
                                width={80}
                                height={25}
                                loading="lazy"
                                alt="Kremleff"
                            />
                        </a>

                        <address className="body-4">
                            Краснодар, ул.Мачуги,142
                        </address>

                        <a
                            href="mailto:restaurant-kremleff@yandex.ru"
                            className="body-4 contact-link"
                        >
                            restaurant-kremleff@yandex.ru
                        </a>

                        <a
                            href="tel:+79002626900"
                            className="body-4 contact-link"
                        >
                            Вопрос бронирования:
                            <span className="footer-phone">
                                7 (900) 26-26-900
                            </span>
                        </a>

                        <div className="wrapper">
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                        </div>

                        <p className="title-1">
                            Kremleff БанкетХолл <br />
                            Ресторан европейской кухни
                        </p>
                    </div>

                    {/* Навигация */}
                    <ul className="footer-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="label-2 footer-link hover-underline"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Соцсети */}
                    <ul className="footer-list">
                        {socialLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="label-2 footer-link hover-underline"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">&copy; 2026 Kremleff БанкетХолл</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
