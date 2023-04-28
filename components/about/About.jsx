import { useEffect } from 'react';
import { gsap } from 'gsap';

const About = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const ScrollMagic = require('scrollmagic');
            const { ScrollMagicPluginGsap } = require('scrollmagic-plugin-gsap');
            gsap.registerPlugin(ScrollMagicPluginGsap);

            const controllerAbout = new ScrollMagic.Controller();

            // Aquí va el resto de tu código de animación

            const animateAbout = new gsap.timeline();

            animateAbout
                .fromTo('.right-bg', { autoAlpha: 0, width: '0' }, { autoAlpha: 1, width: '100%', duration: 0.3, ease: 'power4.out' })
                .fromTo('.about-img', { autoAlpha: 0, x: -100 }, { autoAlpha: 1, x: 0, duration: 0.3, ease: 'power4.out' })
                .fromTo('.title', { autoAlpha: 0, y: 100 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power4.out' })
                .fromTo('.about-text .about-inner', { autoAlpha: 0, y: 100 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power4.out' });

            // ...
        }
    }, []);

    return (
        <section id="about" className="about parallax-scrl mt100" data-scroll-index="1">
            <div className="right-bg"></div>
            <div className="container">

                <div className="row">
                    <div className="col-lg-12"></div>

                    <div className="col-lg-6 order-lg-2">
                        <div className="about-text">
                            <div className="title text-left">
                                <h3>Testimonial &</h3>
                                <h2>About us</h2>
                            </div>
                            <div className="about-inner mt-30">
                                <h4>Akar is a digital agency specializing in handcrafted websites that stir emotion.</h4>
                                <p>We specialize in the design, development and implementation of tailor-made solutions for
                                    corporate and marketing communications across a wide range of business sectors.</p>
                                <p>From individual design elements to websites, apps, complete campaign designs and more,
                                    we
                                    provide our corporate clients with everything they need to communicate their brand in
                                    the
                                    most unique, memorable and user-friendly way possible.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="about-img line-img">
                            <div className="about-overlay"></div>
                            <img className="img-fluid" src="/img/about/2.jpg" alt="logo" fill="responsive" />
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;
