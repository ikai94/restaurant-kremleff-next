import './Reviews.css';

interface Review {
    id: number;
    name: string;
    text: string;
    rating: number;
}

const reviews: Review[] = [
    {
        id: 1,
        name: '​Наталья и Павел',
        text: 'Праздновали нашу свадьбу в «Кремлёве». Хотим сказать огромное спасибо менеджеру Мари, которая помогала нам с самого начала. Она посоветовала, как лучше расставить столы, и даже помогла с выбором декора. Салат «Цезарь» был просто невероятный, а мясная нарезка — идеальна. Все гости в восторге! Наш праздник был просто волшебным.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Игорь С.',
        text: 'Проводили корпоратив компании. Понравилась подборка диджея. Отдельный респект шеф-повару за утку с яблоками — блюдо стало хитом вечера! Сервис на высоте, всё было чётко и без задержек. Обязательно вернёмся.',
        rating: 5,
    },
    {
        id: 3,
        name: '​Анна В.',
        text: 'Отмечали 50-летний юбилей мамы. Зал выглядит шикарно, а кухня — это что-то! Закуски были такие свежие и вкусные, что сразу создали праздничное настроение. Спасибо официанту Екатерине за внимательное отношение к каждому гостю. Она не только быстро обслуживала, но и помогла маме с напитками. Очень приятно, когда к тебе относятся с душой.',
        rating: 5,
    },
    {
        id: 4,
        name: 'Семья Петровых',
        text: 'Наше семейное торжество прошло на высшем уровне. Огромная благодарность официанту Алексею за его работу: он был всегда рядом, но при этом ненавязчив. Говядина с овощами была настолько нежной, что просто таяла во рту. «Кремлёв» — идеальное место для тех, кто ценит качество и атмосферу.',
        rating: 5,
    },
    {
        id: 5,
        name: '​Елена',
        text: 'Праздновали выпускной. Зал очень большой, с нашим количеством гостей было комфортно. Поварам спасибо за вкусные десерты, все ребята оценили. Отдельно хочу отметить, что алкоголь можно было привезти свой, это очень удобно. Всё прошло идеально!',
        rating: 5,
    },
    {
        id: 6,
        name: '​Марина и Андрей',
        text: 'Искали зал для нашей свадьбы, и Kremleff стал лучшим выбором. Менеджер Анна помогла нам с выбором меню, а повар Иван приготовил невероятно вкусную запечённую рыбу. Нам понравилось, как внимательно здесь отнеслись к нашим пожеланиям. Мы получили именно тот праздник, о котором мечтали.',
        rating: 5,
    },
];

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="star-rating" aria-label={`Оценка: ${rating} из 5`}>
            {[...Array(5)].map((_, index) => (
                <span key={index} className="star" aria-hidden="true">
                    ★
                </span>
            ))}
        </div>
    );
};

const Reviews = () => {
    return (
        <section
            className="section reviews text-center"
            aria-labelledby="reviews-title"
            id="reviews"
        >
            <div className="container">
                <p className="section-subtitle text-center label-2">
                    Отзывы гостей
                </p>
                <h2
                    className="headline-1 section-title text-center"
                    id="reviews-title"
                >
                    Что говорят о нас
                </h2>

                <ul className="grid-list reviews-grid">
                    {reviews.map((item) => (
                        <li key={item.id}>
                            <article className="review-card text-center">
                                <span className="quote-icon" aria-hidden="true">
                                    &ldquo;
                                </span>
                                <div className="review-card-wrapper">
                                    <StarRating rating={item.rating} />
                                    <h3 className="title-3 review-name">
                                        {item.name}
                                    </h3>
                                    <blockquote className="review-text">
                                        {item.text}
                                    </blockquote>
                                </div>
                            </article>
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
