import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {

    const squareOverlayRef = useRef(null);

    const titleAnimRefs = useRef([]);
        const addToRefs = (el) => {
        if (el && !titleAnimRefs.current.includes(el)) {
            titleAnimRefs.current.push(el);
        }
    };

    useEffect(() => {
        const squareOverlay = squareOverlayRef.current;
        gsap.to(squareOverlay, {
            width: '0',
            duration: 2,
            delay: 2
        });

        gsap.fromTo(
            titleAnimRefs.current,
            {
              y: '10',
              opacity: 0,
            },
            {
              y: '0',
              opacity: 1,
              delay: 1,
              stagger: 0.25,
              duration: 1,
              ease: 'Power1.easeInOut',
            }
        );
    }, []);

    return (
        <section className="hero centered" data-scroll-index="0">
            <div className="hero-bg">
                <div className="square"></div>
                <div
                    ref={squareOverlayRef}
                    className="square-overlay"
                ></div>
            </div>
            <div ref={addToRefs} className="email-link title-anim">
                <a href="#">hello@akarstudio.com</a>
            </div>
            <div ref={addToRefs} className="social title-anim">
                <ul>
                    <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i> </a></li>
                    <li><a href="#"><i className="fab fa-behance" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fab fa-dribbble" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            <div className="container between">
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <div className="hero-title text-left">
                                <h3 ref={addToRefs} className="title-anim">We are</h3>
                                <h1 ref={addToRefs} className="title-anim">Creative Agency</h1>
                                <div className="mt-20"></div>
                                <p ref={addToRefs} className="title-anim">Digital agency based in Klaten, Indonesia that loves to craft
                                    attractive experiences for the web.</p>
                                <div ref={addToRefs} className="mt-40 title-anim">
                                    <a className="btn-main" href="#" data-scroll-nav="1">About us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero