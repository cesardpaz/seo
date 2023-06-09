import { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {

    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section id="client" className="testimonial fades" data-scroll-index="6">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mid-title">
                        <div className="title text-center">
                            <h3>Testimonial &</h3>
                            <h2>Quotes</h2>
                        </div>
                    </div>
                    <div className="col-lg-10 offset-lg-1 mt-20 fades">
                        <div className="quot-left">
                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                        </div>
                        <div className="quot-right">
                            <i className="fa fa-quote-right" aria-hidden="true"></i>
                        </div>
                        <div className="testimonial">
                            <Slider ref={sliderRef} {...settings}>
                                <div className="item-testi-slide">
                                    <div className="testimonial-item text-center">
                                        <p>We have partnered with 8chDesign GmbH since 2011, when they first designed our
                                            corporate stationery. Their work ethic is very professional, reliable, and
                                            timely. 8chDesign GmbH always goes the extra mile and thus comes highly
                                            recommended.</p>
                                        <div className="author">
                                            <p className="author-text">Nattasha, Aloka CEO</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-testi-slide">
                                    <div className="testimonial-item text-center">
                                        <p>We have partnered with 8chDesign GmbH since 2011, when they first designed our
                                            corporate stationery. Their work ethic is very professional, reliable, and
                                            timely. 8chDesign GmbH always goes the extra mile and thus comes highly
                                            recommended.</p>
                                        <div className="author">
                                            <p className="author-text">Nattasha, Aloka CEO</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="line-testi"></div>
            </div>
        </section>
    )
}

export default Testimonials