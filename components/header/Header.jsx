import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../public/img/logo2.png';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleClick = () => {
        setMenuOpen(!menuOpen);
    };

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
                    <Link href="/">
                        <Image
                            className='logo-img'
                            src={Logo}
                            alt="Logo"
                         />
                    </Link>

                </div>
                <div ref={toggleBtnRef} className="toggle-btn" onClick={handleToggleClick}>
                    <div className="burger-menu">
                        <span className="one"></span>
                        <span className="two"></span>
                        <span className="tre"></span>
                    </div>
                </div>

                <div className="bg-nav"></div>

                <div className="manu-container">
                    <div
                        className="menu"
                        style={{
                        opacity: menuOpen ? 1 : 0,
                        visibility: menuOpen ? 'inherit' : 'hidden',
                        }}
                    >
                        <div className="data">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="links text-center text-lg-left">
                                            <ul>
                                                <li><a className="menu-link active" href="#" data-scroll-nav="0">Inicio</a></li>
                                                <li><a className="menu-link" href="#" data-scroll-nav="1">Agencia</a></li>
                                                <li><a className="menu-link" href="#" data-scroll-nav="2">Servicios</a></li>
                                                <li><a className="menu-link" href="#" data-scroll-nav="3">Portfolio</a></li>
                                                <li><a className="menu-link" href="#" data-scroll-nav="4">Equipo</a></li>
                                                <li><a className="menu-link" href="#" data-scroll-nav="5">Blog</a></li>
                                                <li><a className="menu-link" href="#" data-scroll-nav="6">Clientes</a></li>
                                                <li><a className="menu-link" href="#" data-scroll-nav="7">Contacto</a></li>
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