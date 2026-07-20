import type { CSSProperties } from 'react';
import type { MenuItem } from '@/entities/menu/model/types';
import { withBasePath } from '@/shared/lib/with-base-path';

interface MenuProps {
    items: MenuItem[];
}

const Menu = ({ items }: MenuProps) => {
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
                    {items.map((item) => (
                        <li key={item.id}>
                            <div className="menu-card hover:card">
                                <figure
                                    className="card-banner img-holder"
                                    style={
                                        {
                                            '--width': 100,
                                            '--height': 100,
                                        } as CSSProperties
                                    }
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
                    rel="noopener noreferrer"
                >
                    <span className="text text-1">Посмотреть меню</span>
                    <span className="text text-2" aria-hidden="true">
                        Посмотреть меню
                    </span>
                </a>

                <img
                    src={withBasePath('/images/shape-5.png')}
                    width={921}
                    height={1036}
                    loading="lazy"
                    alt="shape"
                    className="shape shape-2 move-anim"
                />
                <img
                    src={withBasePath('/images/shape-6.png')}
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
