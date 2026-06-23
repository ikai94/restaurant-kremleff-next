import React from 'react';
import './Reviews.css';

interface Review {
    id: number;
    name: string;
    text: string;
    image: string;
    role?: string;
    rating: number;
}

const reviews: Review[] = [
    {
        id: 1,
        name: '​Наталья и Павел',
        text: 'Праздновали нашу свадьбу в "Кремлёве". Хотим сказать огромное спасибо менеджеру Мари, которая помогала нам с самого начала. Она посоветовала, как лучше расставить столы, и даже помогла с выбором декора. Салат "Цезарь" был просто невероятный, а мясная нарезка — идеальна. Все гости в восторге! Наш праздник был просто волшебным.',
        image: 'images/testimonial-1.jpg',
        role: 'Гостья',
        rating: 5,
    },
    {
        id: 2,
        name: 'Игорь С.',
        text: 'Проводили корпоратив компании. Понравилась подборка диджея. Отдельный респект шеф-повару за утку с яблоками — блюдо стало хитом вечера! Сервис на высоте, всё было чётко и без задержек. Обязательно вернёмся.',
        image: 'images/testimonial-2.jpg',
        role: 'Постоянный клиент',
        rating: 5,
    },
    {
        id: 3,
        name: '​Анна В.',
        text: 'Отмечали 50-летний юбилей мамы. Зал выглядит шикарно, а кухня — это что-то! Закуски были такие свежие и вкусные, что сразу создали праздничное настроение. Спасибо официанту Екатерине за внимательное отношение к каждому гостю. Она не только быстро обслуживала, но и помогла маме с напитками. Очень приятно, когда к тебе относятся с душой.',
        image: 'images/testimonial-3.jpg',
        role: 'Гостья',
        rating: 5,
    },
    {
        id: 4,
        name: 'Семья Петровых',
        text: 'Наше семейное торжество прошло на высшем уровне. Огромная благодарность официанту Алексею за его работу, он был всегда рядом, но при этом ненавязчив. Говядина с овощами была настолько нежной, что просто таяла во рту. "Кремлёв" — это идеальное место для тех, кто ценит качество и атмосферу.',
        image: 'images/testimonial-4.jpg',
        role: 'Посетитель',
        rating: 5,
    },
    {
        id: 5,
        name: '​Елена',
        text: 'Праздновали выпускной. Зал очень большой, с нашим количеством гостей было комфортно. Поварам спасибо за вкусные десерты, все ребята оценили. Отдельно хочу отметить, что алкоголь можно было привезти свой, это очень удобно. Всё прошло идеально!',
        image: 'images/testimonial-5.jpg',
        role: 'Любитель гастрономии',
        rating: 5,
    },
    {
        id: 6,
        name: '​Марина и Андрей',
        text: 'Искали зал для нашей свадьбы, и Kremleff лучшим выбором. Менеджер Анна помогла нам с выбором меню, а повар Иван сделал невероятно вкусную запечённую рыбу. Нам понравилось, как они прислушивались к нашим пожеланиям. Мы получили именно тот праздник, о котором мечтали.',
        image: 'images/testimonial-6.jpg',
        role: 'Клиент',
        rating: 5,
    },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    className={`star ${index < rating ? 'filled' : ''}`}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

const Reviews: React.FC = () => {
    return (
        <section
            className="section reviews text-center"
            aria-label="reviews"
            id="reviews"
        >
            <div className="container">
                <p className="section-subtitle text-center label-2">
                    Отзывы гостей
                </p>
                <h2 className="headline-1 section-title text-center">
                    Что говорят о нас
                </h2>

                <ul className="grid-list reviews-grid">
                    {reviews.map((item, index) => (
                        <li
                            key={item.id}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="review-card hover:card text-center">
                                <div className="quote-icon">"</div>

                                {/* <figure
                                    className="card-banner img-holder"
                                    style={
                                        {
                                            ['--width' as any]: 120,
                                            ['--height' as any]: 120,
                                        } as React.CSSProperties
                                    }
                                > */}
                                {/* <div className="avatar-border"></div> */}
                                {/* <img
                                        src={item.image}
                                        width={120}
                                        height={120}
                                        loading="lazy"
                                        alt={item.name}
                                        className="img-cover review-avatar"
                                    /> */}
                                {/* </figure> */}

                                <div className="review-card-wrapper">
                                    <StarRating rating={item.rating} />

                                    <h3 className="title-3 review-name">
                                        {item.name}
                                    </h3>

                                    {/* {item.role && (
                                        <p className="badge label-1 review-role">
                                            {item.role}
                                        </p>
                                    )} */}

                                    <p className="card-text label-1 review-text">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <p className="reviews-text text-center">
                    Спасибо всем нашим гостям за{' '}
                    <span className="span">тёплые слова</span> и вдохновляющие
                    отзывы!
                </p>
            </div>
        </section>
    );
};

export default Reviews;
