import Image from "next/image"

import { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import Client1 from "../../public/img/partner/light/client-1.png"
import Client2 from "../../public/img/partner/light/client-2.png"
import Client3 from "../../public/img/partner/light/client-3.png"
import Client4 from "../../public/img/partner/light/client-4.png"

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
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Clients