import type { CSSProperties } from 'react';

interface EventItem {
    image: string;
    date: string;
    subtitle: string;
    title: string;
    datetime: string;
}

const eventsData: EventItem[] = [
    {
        image: '/images/event-1.jpg',
        date: '23/02/2026',
        datetime: '2026-02-23',
        subtitle: 'Здоровая пища',
        title: 'Используем полезные и локальные ингредиенты',
    },
    {
        image: '/images/event-2.jpg',
        date: '08/03/2026',
        datetime: '2026-03-08',
        subtitle: 'Еда, Вкус',
        title: 'Работаем только с профессионалами',
    },
    {
        image: '/images/event-3.jpg',
        date: '01/05/2026',
        datetime: '2026-05-01',
        subtitle: 'Любимый рецепт',
        title: 'Необычно сочетаем традиционные ингредиенты, которые реально работают',
    },
];

const Event = () => {
    return (
        <section
            className="section event bg-black-10"
            aria-label="event"
            id="event"
        >
            <div className="container">
                <p className="section-subtitle label-2 text-center">
                    Недавние обновления
                </p>

                <h2 className="section-title headline-1 text-center">
                    С заботой о Вас
                </h2>

                <ul className="grid-list">
                    {eventsData.map((event, index) => (
                        <li key={index}>
                            <div className="event-card has-before hover:shine">
                                <div
                                    className="card-banner img-holder"
                                    style={
                                        {
                                            '--width': 350,
                                            '--height': 450,
                                        } as CSSProperties
                                    }
                                >
                                    <img
                                        src={event.image}
                                        width={350}
                                        height={450}
                                        loading="lazy"
                                        alt={event.title}
                                        className="img-cover"
                                    />
                                </div>

                                <div className="card-content">
                                    <p className="card-subtitle label-2 text-center">
                                        {event.subtitle}
                                    </p>

                                    <h3 className="card-title title-2 text-center">
                                        {event.title}
                                    </h3>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Event;
