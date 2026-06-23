import React from 'react';

const featuresData = [
    {
        icon: 'images/features-icon-1.png',
        title: 'ВКУСНАЯ ЕДА',
        text: 'Блюда европейской кухни',
    },
    {
        icon: 'images/features-icon-2.png',
        title: 'ОБЩАЯ ПЛОЩАДЬ',
        text: '270 кв. м',
    },
    {
        icon: 'images/features-icon-3.png',
        title: 'БАНКЕТНЫХ МЕСТ',
        text: 'до 70 персон',
    },
    {
        icon: 'images/features-icon-4.png',
        title: 'Услуги',
        text: 'Помощь в организации любого вида мероприятий',
    },
];

const Features: React.FC = () => {
    return (
        <section className="section features text-center" aria-label="features">
            <div className="container">
                <p className="section-subtitle label-2">ПОЧЕМУ ВЫБРАЛИ НАС</p>

                <h2 className="headline-1 section-title">Наша сила</h2>

                <ul className="grid-list">
                    {featuresData.map((feature, index) => (
                        <li className="feature-item" key={index}>
                            <div className="feature-card">
                                <div className="card-icon">
                                    <img
                                        src={feature.icon}
                                        width={100}
                                        height={80}
                                        loading="lazy"
                                        alt="icon"
                                    />
                                </div>
                                <h3 className="title-2 card-title">
                                    {feature.title}
                                </h3>
                                <p className="label-1 card-text">
                                    {feature.text}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>

                <img
                    src="images/shape-7.png"
                    width="208"
                    height="178"
                    loading="lazy"
                    alt="shape"
                    className="shape shape-1"
                />

                <img
                    src="images/shape-8.png"
                    width="120"
                    height="115"
                    loading="lazy"
                    alt="shape"
                    className="shape shape-2"
                />
            </div>
        </section>
    );
};

export default Features;
