import Image from "next/image"

import { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import News1 from "../../public/img/news/1.jpg"
import News2 from "../../public/img/news/2.jpg"
import News3 from "../../public/img/news/3.jpg"
import News4 from "../../public/img/news/4.jpg"

import ArrowLight from "../../public/img/arrow-light.png"
import ArrowLightR from "../../public/img/arrow-light-R.png"

const News = () => {

    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
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
        <section id="news" className="news parallax-scrl" data-scroll-index="5">
            <div className="left-bg"></div>
            <div className="about-text-bg"></div>
            <div className="container">


                <div className="row">
                    <div className="col-lg-12 mid-title">
                        <div className="title text-center">
                            <h3>Recent</h3>
                            <h2>News</h2>
                        </div>
                    </div>
                    <div className="col-lg-12 mt-50">
                        <div className="news-slider">
                            <Slider ref={sliderRef} {...settings}>

                                <div className="news-item text-center">

                                    <div className="news-img">
                                        <Image className="img-fluid" src={News1} alt="" />
                                    </div>
                                    <div className="news-text">
                                        <h3>Transport and Awwards</h3>
                                        <p>We’ve been selected by GABA to bring their story .</p>
                                        <a className="news-link" href="project-detail-dark.html">Read more</a>
                                    </div>

                                </div>
                                <div className="news-item text-center">

                                    <div className="news-img">
                                        <Image className="img-fluid" src={News2} alt="" />
                                    </div>
                                    <div className="news-text">
                                        <h3>Transport and Awwards</h3>
                                        <p>We’ve been selected by GABA to bring their story .</p>
                                        <a className="news-link" href="project-detail-dark.html">Read more</a>
                                    </div>

                                </div>
                                <div className="news-item text-center">

                                    <div className="news-img">
                                        <Image className="img-fluid" src={News3} alt="" />
                                    </div>
                                    <div className="news-text">
                                        <h3>Transport and Awwards</h3>
                                        <p>We’ve been selected by GABA to bring their story .</p>
                                        <a className="news-link" href="project-detail-dark.html">Read more</a>
                                    </div>

                                </div>
                                <div className="news-item text-center">

                                    <div className="news-img">
                                        <Image className="img-fluid" src={News4} alt="" />
                                    </div>
                                    <div className="news-text">
                                        <h3>Transport and Awwards</h3>
                                        <p>We’ve been selected by GABA to bring their story .</p>
                                        <a className="news-link" href="project-detail-dark.html">Read more</a>
                                    </div>

                                </div>
                            </Slider>
                        </div>
                        <div className="mt-40 text-center">
                             <ul className="arrows">
                                <li className="arrow-left -team" onClick={() => sliderRef.current.slickPrev()}><Image src={ArrowLight} alt="arrow" /></li>
                                <li className="arrow-right -team" onClick={() => sliderRef.current.slickNext()}><Image src={ArrowLightR} alt="arrow" /></li>
                            </ul>
                        </div>
                    </div>



                </div>

            </div>
        </section>
    )
}

export default News