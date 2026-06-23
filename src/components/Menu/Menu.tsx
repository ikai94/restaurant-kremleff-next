interface MenuItem {
    id: number;
    title: string;
    description: string;
    weight?: string;
    price: string;
    badge?: string;
    image: string;
    alt: string;
}

const menuItems: MenuItem[] = [
    {
        id: 1,
        title: 'Салат Болгарский',
        description:
            'Говядина, помидорчик, перец сладкий и сыр, с лёгким медово-горчичным соусом',
        weight: '40/120/50 г',
        price: '410 ₽',
        image: 'images/menu-1.jpg',
        alt: 'Bulgarian salad',
    },
    {
        id: 2,
        title: 'Салат с языком',
        description:
            'Отварной говяжий язык, грибочки жареные, яйцо, маринованный лук и домашний майонез',
        price: '470 ₽',
        image: 'images/menu-2.jpg',
        alt: 'Salad with tongue',
    },
    {
        id: 3,
        title: 'Осетр фаршированный KremleFF',
        description:
            'Начинённый креветками, овощями, зеленью и украшен лососевой икрой, а так же различными морскими деликатесами',
        price: '520 ₽',
        image: 'images/menu-3.jpg',
        alt: 'KremleFF Stuffed Sturgeon',
    },
    {
        id: 4,
        title: 'Тарталетки с икрой',
        description:
            'Икра лососевая в блинных корзиночках с ароматным крем-маслом',
        price: '890 ₽',
        image: 'images/menu-4.jpg',
        alt: 'Tartlets with caviar',
    },
    {
        id: 5,
        title: 'Корона KremleFF',
        description:
            'Эффектно запеченная свиная корейка в фирменной глазировке и фееричной подачей с огоньком',
        price: '410 ₽',
        image: 'images/menu-5.jpg',
        alt: 'KremleFF Crown',
    },
    {
        id: 6,
        title: 'Салат с морскими гадами',
        description:
            'Дары моря слегка обжаренные в соусе «Терияки», огурец свежий, кинза, салат-MIX и лимончик',
        price: '520 ₽',
        image: 'images/menu-6.jpg',
        alt: 'Salad with sea reptiles',
    },
];

const Menu: React.FC = () => {
    return (
        <section className="section menu" aria-label="menu-label" id="menu">
            <div className="container">
                <p className="section-subtitle text-center label-2">
                    Специальный выбор
                </p>
                <h2 className="headline-1 section-title text-center">
                    Вкусное меню
                </h2>

                <ul className="grid-list">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <div className="menu-card hover:card">
                                <figure
                                    className="card-banner img-holder"
                                    style={{
                                        ['--width' as any]: 100,
                                        ['--height' as any]: 100,
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        width={100}
                                        height={100}
                                        loading="lazy"
                                        alt={item.alt}
                                        className="img-cover"
                                        style={{
                                            height: '100px',
                                            width: '100px',
                                        }}
                                    />
                                </figure>

                                <div className="menu-card-wrapper">
                                    <div className="title-wrapper">
                                        <h3 className="title-3 max-width">
                                            {item.title}
                                        </h3>

                                        {/* {item.weight && (
                                            <span className="badge label-1">
                                                {item.weight}
                                            </span>
                                        )} */}
                                        {item.badge && (
                                            <span className="badge label-1">
                                                {item.badge}
                                            </span>
                                        )}

                                        {/* <span className="span title-2">
                                            {item.price}
                                        </span> */}
                                    </div>

                                    <p className="card-text label-1">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <a
                    className="btn btn-primary disabled"
                    data-menu-toggler
                    href="https://disk.yandex.ru/i/hZj8WZNp-8ylsA"
                    target="_blank"
                >
                    <span className="text text-1">Посмотреть меню</span>
                    <span className="text text-2" aria-hidden="true">
                        Посмотреть меню
                    </span>
                </a>

                <img
                    src="images/shape-5.png"
                    width={921}
                    height={1036}
                    loading="lazy"
                    alt="shape"
                    className="shape shape-2 move-anim"
                />
                <img
                    src="images/shape-6.png"
                    width={343}
                    height={345}
                    loading="lazy"
                    alt="shape"
                    className="shape shape-3 move-anim"
                />
            </div>
        </section>
    );
};

export default Menu;
