import Image from "next/image"

import { gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

gsap.registerPlugin(ScrollMagicPluginGsap);

import Service_1 from "../../public/img/service/1.png"
import Service_2 from "../../public/img/service/2.png"
import Service_3 from "../../public/img/service/3.png"

const Services = () => {

    const servicesRef = useRef(null);
    const titleRef = useRef(null);
    const itemsRef = useRef([]);
    const iconsRef = useRef([]);
    const textsRef = useRef([]);

    useEffect(() => {
        if (servicesRef.current) {
        const controllerService = new ScrollMagic.Controller();

        const animateService = gsap.timeline({ paused: false, repeat: false })
            .from(titleRef.current, { autoAlpha: 0, y: 100, ease: 'power4.out', duration: 0.3 });

        itemsRef.current.forEach((item, index) => {
            animateService
            .from(item, { autoAlpha: 0, y: 100, ease: 'power4.out', duration: 0.3 }, 0.3 * index)
            .from(iconsRef.current[index], { autoAlpha: 0, y: 100, ease: 'power4.out', duration: 0.3 }, 0.3 * index)
            .from(textsRef.current[index], { x: -10, autoAlpha: 0, ease: 'power4.out', duration: 0.3 }, 0.3 * index);
        });

        const serviceScene = new ScrollMagic.Scene({
            triggerElement: servicesRef.current,
            offset: -150,
            reverse: false,
        })
            .setTween(animateService)
            .addTo(controllerService);
        }
    }, []);

    return (
        <section id="service" className="service parallax-scrl" data-scroll-index="2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="title text-left">
                            <h3>Our areas of</h3>
                            <h2>Services</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 mt-30">
                        <div className="service-item bg-main">
                            <div className="service-icon text-center">
                                <Image src={Service_1} alt="" />
                            </div>
                            <div className="service-text">
                                <h3>GRAPHIC DESIGN</h3>
                                <p>Put your eyes on your customers while keeping a graphic and aesthetic coherence. </p>
                                <div className="service-line"></div>
                                <ul className="service-list">
                                    <li>Logo Design</li>
                                    <li>UI/UX</li>
                                    <li>Illustration</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-50">
                        <div className="service-item bg-second">
                            <div className="service-icon text-center">
                                <Image src={Service_2} alt="" />
                            </div>
                            <div className="service-text">
                                <h3>DEVELOPMENT</h3>
                                <p>Put your eyes on your customers while keeping a graphic and aesthetic coherence. </p>
                                <div className="service-line"></div>
                                <ul className="service-list">
                                    <li>Website</li>
                                    <li>Mobile App</li>
                                    <li>Desktop App</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-30">
                        <div className="service-item bg-main">
                            <div className="service-icon text-center">
                                <Image src={Service_3} alt="" />
                            </div>
                            <div className="service-text">
                                <h3>BRANDING</h3>
                                <p>Put your eyes on your customers while keeping a graphic and aesthetic coherence. </p>
                                <div className="service-line"></div>
                                <ul className="service-list">
                                    <li>Logo Design</li>
                                    <li>UI/UX</li>
                                    <li>Illustration</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services