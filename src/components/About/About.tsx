import { withBasePath } from '@/shared/lib/with-base-path';

const About = () => {
    return (
        <section
            id="about"
            className="section about text-center"
            aria-labelledby="about-label"
        >
            <div className="container">
                <div className="about-content">
                    <p className="label-2 section-subtitle" id="about-label">
                        Наша история
                    </p>

                    <h2 className="headline-1 section-title">
                        Каждый вкус рассказывает историю
                    </h2>

                    <p className="section-text">
                        Благодаря двухуровневому пространству, профессиональному
                        оснащению и необычному интерьеру KREMLEFF БанкетХолл
                        идеально подходит для любых торжеств, а клубный стиль и
                        караоке дарят уникальность и шарм. Наши залы
                        трансформируются под любой формат: от камерных семейных
                        празднований до масштабных корпоративных событий.
                        Современное световое и звуковое оборудование позволяет
                        создать неповторимую атмосферу, будь то динамичный
                        танцпол или уютный уголок для общения, а наша команда
                        профессионалов с радостью поможет реализовать любые ваши
                        идеи и пожелания. Сделаем ваш праздник незабываемым
                        вместе!
                    </p>

                    <div className="contact-label">
                        Забронируйте позвонив нам
                    </div>

                    <a
                        href="tel:+79002626900"
                        className="body-1 contact-number hover-underline"
                    >
                        +7 (900) 26-26-900
                    </a>
                </div>

                <figure className="about-banner">
                    <img
                        src={withBasePath('/images/about-banner.jpg')}
                        width="570"
                        height="570"
                        loading="lazy"
                        alt="about banner"
                        className="w-100"
                        data-parallax-item
                        data-parallax-speed="1"
                    />

                    <div
                        className="abs-img abs-img-1 has-before"
                        data-parallax-item
                        data-parallax-speed="1.75"
                    >
                        <img
                            src={withBasePath('/images/about-abs-image.jpg')}
                            width="285"
                            height="285"
                            loading="lazy"
                            alt=""
                            className="w-100"
                        />
                    </div>

                    <div className="abs-img abs-img-2 has-before">
                        <img
                            src={withBasePath('/images/krem-logo.png')}
                            width="134"
                            height="134"
                            loading="lazy"
                            alt=""
                        />
                    </div>
                </figure>

                <img
                    src={withBasePath('/images/shape-3.png')}
                    width="197"
                    height="194"
                    loading="lazy"
                    alt=""
                    className="shape"
                />
            </div>
        </section>
    );
};

export default About;
