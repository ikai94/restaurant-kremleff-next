import './Services.css';

const highlights = [
    'Двухуровневое пространство с дизайнерским интерьером',
    'Изысканная кухня от шеф-повара',
    'Профессиональная команда заботится о каждой детали',
    'Современное оборудование для любых мероприятий',
    'Гибкие условия и индивидуальный подход',
];

const eventFormats = [
    'Свадьбы и юбилеи',
    'Корпоративные мероприятия',
    'Детские праздники',
    'Банкетные вечера',
    'Деловые встречи',
];

const offers = [
    'Бесплатная консультация по организации шоу-программы',
    'Подарки для молодожёнов',
    'Памятные сюрпризы юбилярам',
    'Расширенная система лояльности для постоянных гостей',
];

const showcaseCards = [
    {
        id: 1,
        title: 'Уютные и колоритные пространства',
        subtitle: 'Залы на 20 или 50 гостей',
        imgSrc: '/images/1.jpg',
        imgAlt: 'Интерьер банкетного зала',
    },
    {
        id: 2,
        title: 'События без границ',
        subtitle: 'Свадьбы, корпораты, деловые вечера',
        imgSrc: '/images/2.jpg',
        imgAlt: 'Декорированный стол',
    },
    {
        id: 3,
        title: 'Атмосфера праздника',
        subtitle: 'Стильный интерьер и профессиональное свето-звуковое оборудование',
        imgSrc: '/images/3.jpg',
        imgAlt: 'Праздничная атмосфера в зале',
    },
];

const Services: React.FC = () => {
    return (
        <section
            className="section service bg-black-10"
            aria-label="banquet hall"
        >
            <div className="container banquet-layout">
                <div className="banquet-eyebrow">творческий & современный</div>
                <h2 className="headline-1 banquet-heading">
                    Kremleff БанкетХолл — место, где мечты становятся
                    реальностью
                </h2>
                <ul className="banquet-showcase">
                    {showcaseCards.map(
                        ({ id, title, subtitle, imgSrc, imgAlt }) => (
                            <li key={id} className="banquet-showcase__item">
                                <div className="banquet-showcase__card">
                                    <figure className="banquet-showcase__figure">
                                        <img
                                            src={imgSrc}
                                            alt={imgAlt}
                                            className="banquet-showcase__image"
                                            loading="lazy"
                                        />
                                    </figure>
                                    <div className="banquet-showcase__content">
                                        <h3>{title}</h3>
                                        <p>{subtitle}</p>
                                    </div>
                                </div>
                            </li>
                        ),
                    )}
                </ul>

                <div className="banquet-info-grid">
                    <article className="banquet-card">
                        <h3>Почему выбирают нас?</h3>
                        <ul>
                            {highlights.map((item) => (
                                <li key={item}>
                                    <span className="banquet-dot" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="banquet-card">
                        <h3>Мы создаём праздники любой сложности</h3>
                        <ul>
                            {eventFormats.map((item) => (
                                <li key={item}>
                                    <span className="banquet-dot" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>

                <div className="banquet-offers">
                    <p className="banquet-kicker">
                        Специальные предложения каждый месяц
                    </p>
                    <div className="banquet-offers__list">
                        {offers.map((item) => (
                            <article key={item} className="banquet-offer">
                                {item}
                            </article>
                        ))}
                    </div>
                </div>

                <div className="banquet-cta">
                    <div>
                        <p className="banquet-cta__title">
                            Забронируйте ваше событие прямо сейчас
                        </p>
                        <p className="banquet-cta__text">
                            Позвоните нам, и мы поможем воплотить ваши мечты в
                            реальность
                        </p>
                    </div>
                    <a href="tel:+79002626900" className="banquet-phone body-1">
                        +7 (900) 26-26-900
                    </a>
                </div>
            </div>
            <img
                src="/images/shape-1.png"
                width="246"
                height="412"
                loading="lazy"
                alt="shape"
                className="shape shape-1 move-anim"
            />
            <img
                src="/images/shape-2.png"
                width="343"
                height="345"
                loading="lazy"
                alt="shape"
                className="shape shape-2 move-anim"
            />
        </section>
    );
};

export default Services;
