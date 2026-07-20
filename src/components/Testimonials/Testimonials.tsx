const Testimonials = () => {
    return (
        <section
            className="section testi text-center has-bg-image"
            style={{ backgroundImage: "url('/images/testimonial-bg.jpg')" }}
            aria-label="testimonials"
        >
            <div className="container">
                <p className="headline-2 testi-text">
                    Karaoke &quot;Hall Kremleff&quot; адресован любителям
                    публичного пения &quot;в своем кругу&quot; и объединяет
                    людей, которые любят петь и демонстрировать свой талант в
                    уютной и непринужденной обстановке друзьям, близким и просто
                    незнакомым людям. Ведь караоке — это занятное
                    времяпровождение, позволяющее почувствовать себя звездой и
                    хорошо попеть в своё удовольствие.
                </p>

                <div className="wrapper">
                    <div className="separator"></div>
                    <div className="separator"></div>
                    <div className="separator"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
