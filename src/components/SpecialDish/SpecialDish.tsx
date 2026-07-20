import { withBasePath } from '@/shared/lib/with-base-path';

const SpecialDish = () => {
    return (
        <section
            className="special-dish text-center"
            aria-labelledby="dish-label"
        >
            <div className="special-dish-banner">
                <img
                    src={withBasePath('/images/special-dish-banner.jpg')}
                    width="940"
                    height="900"
                    loading="lazy"
                    alt="special dish"
                    className="img-cover"
                />
            </div>

            <div className="special-dish-content bg-black-10">
                <div className="container">
                    <img
                        src={withBasePath('/images/badge-1.png')}
                        width="28"
                        height="41"
                        loading="lazy"
                        alt="badge"
                        className="abs-img"
                    />

                    <p className="section-subtitle label-2">
                        Специальное блюдо
                    </p>

                    <h2 className="headline-1 section-title">
                        Салат фирменный Kremleff
                    </h2>

                    <p className="section-text">
                        Нежнейшее сочетание форели, обладающей уникальной
                        мягкостью в сочетании с упругими, солёными икринками
                        красной икры, мгновенно переносит в мир роскоши и
                        утонченности, а подушка из спелых томатов и утонченного
                        перепелинного яйца, собранная слоями и сдобренная
                        ароматным крем-соусом, деликатно усиливает вкус...
                    </p>

                    <a
                        className="btn btn-primary disabled"
                        data-menu-toggler
                        href="https://disk.yandex.ru/i/hZj8WZNp-8ylsA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="text text-1">Посмотреть меню</span>
                        <span className="text text-2" aria-hidden="true">
                            Посмотреть меню
                        </span>
                    </a>
                </div>
            </div>

            <img
                src={withBasePath('/images/shape-4.png')}
                width="179"
                height="359"
                loading="lazy"
                alt=""
                className="shape shape-1"
            />

            <img
                src={withBasePath('/images/shape-9.png')}
                width="351"
                height="462"
                loading="lazy"
                alt=""
                className="shape shape-2"
            />
        </section>
    );
};

export default SpecialDish;
