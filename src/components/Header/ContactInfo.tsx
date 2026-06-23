const ContactInfo = () => (
    <>
        <p className="headline-1 navbar-title">Контакты</p>
        <address className="body-4">Краснодар, ул.Мачуги,142</address>

        <a
            href="mailto:restaurant-kremleff@yandex.ru"
            className="body-4 sidebar-link"
        >
            restaurant-kremleff@yandex.ru
        </a>

        <div className="separator"></div>

        <p className="contact-label">Бронирование</p>
        <a
            href="tel:+79002626900"
            className="body-1 contact-number hover-underline"
        >
            +7 (900) 26 26 900
        </a>
    </>
);
    
export default ContactInfo;
