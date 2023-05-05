import Image from "next/image"
import { useRef } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Team1 from "../../public/img/team/francisco.png"
import Team2 from "../../public/img/team/team2.png"
import Team3 from "../../public/img/team/team3.png"
import Team4 from "../../public/img/team/team4.png"
import Team5 from "../../public/img/team/team5.png"
import Team6 from "../../public/img/team/team6.png"


import ArrowLight from "../../public/img/arrow-light.png"
import ArrowLightR from "../../public/img/arrow-light-R.png"

const Team = () => {

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
                }
            }
        ]
    };


    return (
        <section id="team" className="team parallax-scrl" data-scroll-index="4">
            <div className="team-text-bg"></div>
            <div className="container">

                <div className="row">

                    <div className="col-lg-3 order-lg-2 centered">
                        <div className="title text-left">
                            <h3>Our Awesome</h3>
                            <h2>Team</h2>
                        </div>
                    </div>

                    <div className="col-lg-9 order-lg-1 mt-10">
                        <div className="team-slider">
                            <Slider ref={sliderRef} {...settings}>
                                <div className="team-item-wrapper">
                                    <div className="team-item text-center">
                                        <div className="team-img">
                                            <Image src={Team1} alt="" />
                                        </div>
                                        <div className="team-text">
                                            <h3>Francisco Novoa</h3>
                                            <p>Agencia SEO</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-item-wrapper">
                                    <div className="team-item text-center">
                                        <div className="team-img">
                                            <Image src={Team2} alt="" />
                                        </div>
                                        <div className="team-text">
                                            <h3>Ivan Seventeen</h3>
                                            <p>Desarrollo web corporativo</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-item-wrapper">
                                    <div className="team-item text-center">
                                        <div className="team-img">
                                            <Image src={Team3} alt="" />
                                        </div>
                                        <div className="team-text">
                                            <h3>Nicky Astria</h3>
                                            <p>Copy writer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-item-wrapper">
                                    <div className="team-item text-center">
                                        <div className="team-img">
                                            <Image src={Team4} alt="" />
                                        </div>
                                        <div className="team-text">
                                            <h3>Nicky Astria</h3>
                                            <p>Desarrollo web profesional</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-item-wrapper">
                                    <div className="team-item text-center">
                                        <div className="team-img">
                                            <Image src={Team5} alt="" />
                                        </div>
                                        <div className="team-text">
                                            <h3>Nicky Astria</h3>
                                            <p>Experto en branding personal</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-item-wrapper">
                                    <div className="team-item text-center">
                                        <div className="team-img">
                                            <Image src={Team6} alt="" />
                                        </div>
                                        <div className="team-text">
                                            <h3>Nicky Astria</h3>
                                            <p>Experto en ciberseguridad</p>
                                        </div>
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

export default Team