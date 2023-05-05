import Image from "next/image"

import { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import Client1 from "../../public/img/partner/light/asesoria-runi.png"
import Client2 from "../../public/img/partner/light/baeza-strength-murcia-logo.png"
import Client3 from "../../public/img/partner/light/c3-modeling-logo.png"
import Client4 from "../../public/img/partner/light/DESOKUPA_RAPIDO_LOGO.png"
import Client5 from "../../public/img/partner/light/f72d1f1bca94af0508307a14eef7a8b8.png"
import Client6 from "../../public/img/partner/light/fisher-fitness-logo.png"
import Client7 from "../../public/img/partner/light/fitonica-logo.png"
import Client8 from "../../public/img/partner/light/home2rent-logo-letra-sm.png"
import Client9 from "../../public/img/partner/light/logo-odesa.jpg"
import Client10 from "../../public/img/partner/light/LOGO_ARIES_RGB.png"
import Client11 from "../../public/img/partner/light/marvimundo.png"
import Client12 from "../../public/img/partner/light/murcia.com.png"
import Client13 from "../../public/img/partner/light/portfolio-desarrollo-web-todopisos.png"
import Client14 from "../../public/img/partner/light/posicionamiento-seo-web.png"
import Client15 from "../../public/img/partner/light/talleres-mateo-logo.png"
import Client16 from "../../public/img/partner/light/timandaya-lg2.png"
import Client17 from "../../public/img/partner/light/vitaldfitness-logo.png"
import Client18 from "../../public/img/partner/light/Xti-Descargas-Logo_Xti.png"


const Clients = () => {

    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
        <div className="client mid-title fades">
            <div className="container">

                <div className="partner">
                    <Slider ref={sliderRef} {...settings}>
                        <div className="item-partner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Image src={Client1} alt="1" />
                                </div>
                            </div>
                        </div>

                        <div className="item-partner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Image src={Client2} alt="1" />
                                </div>
                            </div>
                        </div>

                        <div className="item-partner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Image src={Client3} alt="1" />
                                </div>
                            </div>
                        </div>

                        <div className="item-partner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Image src={Client4} alt="1" />
                                </div>
                            </div>
                        </div>
                        <div className="item-partner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Image src={Client5} alt="1" />
                                </div>
                            </div>
                        </div>

                        <div className="item-partner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Image src={Client6} alt="1" />
                                </div>
                            </div>
                        </div>

                        <div className="item-partner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Image src={Client7} alt="1" />
                                </div>
                            </div>
                        </div>

                        <div className="item-partner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Image src={Client8} alt="1" />
                                </div>
                            </div>
                        </div>
                        <div className="item-partner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Image src={Client9} alt="1" />
                                </div>
                            </div>
                        </div>
                        <div className="item-partner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Image src={Client10} alt="1" />
                                </div>
                            </div>
                        </div>
                        <div className="item-partner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Image src={Client11} alt="1" />
                                </div>
                            </div>
                        </div>
                        <div className="item-partner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Image src={Client12} alt="1" />
                                </div>
                            </div>
                        </div>
                        <div className="item-partner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Image src={Client13} alt="1" />
                                </div>
                            </div>
                        </div>
                        <div className="item-partner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Image src={Client14} alt="1" />
                                </div>
                            </div>
                        </div>
                        <div className="item-partner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Image src={Client15} alt="1" />
                                </div>
                            </div>
                        </div>
                        <div className="item-partner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Image src={Client16} alt="1" />
                                </div>
                            </div>
                        </div>
                        <div className="item-partner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Image src={Client17} alt="1" />
                                </div>
                            </div>
                        </div>
                        <div className="item-partner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Image src={Client18} alt="1" />
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Clients