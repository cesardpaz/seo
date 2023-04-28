import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const Header = () => {
    const logoRef = useRef(null);
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            logoRef.current,
            {
              y: '-100',
              autoAlpha: 0,
            },
            {
              y: '0',
              autoAlpha: 1,
              delay: 2,
              duration: 1,
            }
        );

        gsap.fromTo(
            toggleBtnRef.current,
            {
                y: '-100',
                autoAlpha: 0,
            },
            {
                y: '0',
                autoAlpha: 1,
                delay: 2,
                duration: 1,
            }
        );

        const handleScroll = () => {
            const bodyScroll = window.pageYOffset;

            if (bodyScroll > 200) {
                gsap.to('.toggle-btn', { y: '-40', duration: 0.4 });
                gsap.to('.logo', { y: '-35', duration: 0.4 });
                gsap.to('.bg-nav', { opacity: 1, duration: 0.4 });
              } else {
                gsap.to('.logo', { y: '0', duration: 0.4 });
                gsap.to('.toggle-btn', { y: '0', duration: 0.4 });
                gsap.to('.bg-nav', { opacity: 0, duration: 0.4 });
              }
          };

          if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
          }

          return () => {
            if (typeof window !== 'undefined') {
              window.removeEventListener('scroll', handleScroll);
            }
          };


    }, []);

    return (
        <header>
            <nav>
                <div ref={logoRef} className="logo">
                    <a href="index.html">
                        <Image src="/img/logo.png" alt="logo" width={47} height={50} />
                    </a>

                </div>
                <div ref={toggleBtnRef} className="toggle-btn">
                    <div className="burger-menu">
                        <span className="one"></span>
                        <span className="two"></span>
                        <span className="tre"></span>
                    </div>
                </div>

                <div className="bg-nav"></div>

                <div className="manu-container">
                    <div className="menu hidden">
                        <div className="data">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="links text-center text-lg-left">
                                            <ul>
                                                <li><a className="menu-link active" href="#" data-scroll-nav="0">Home</a></li>
                                                <li><a className="menu-link" href="#" data-scroll-nav="1">About</a></li>
                                                <li><a className="menu-link" href="#" data-scroll-nav="2">Services</a></li>
                                                <li><a className="menu-link" href="#" data-scroll-nav="3">Portfolio</a></li>
                                                <li><a className="menu-link" href="#" data-scroll-nav="4">Team</a></li>
                                                <li><a className="menu-link" href="#" data-scroll-nav="5">News</a></li>
                                                <li><a className="menu-link" href="#" data-scroll-nav="6">Client</a></li>
                                                <li><a className="menu-link" href="#" data-scroll-nav="7">Contact</a></li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="col-lg-4 offset-lg-2 centered text-right">
                                        <div className="address-menu">
                                            <h3>ADDRESS</h3>
                                            <h4>Flower 03/11 Street Klaten, Central Java, Indonesia</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>


        </header>
    )
}

export default Header