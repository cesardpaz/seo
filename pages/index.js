import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import Header from '../components/header/Header';
import Hero from '../components/hero/hero';
import About from '../components/about/About';
import Services from '../components/services/Services';
import Project from '../components/project/Project';
import Team from '../components/team/Team';
import News from '../components/news/News';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';

import Preloader from '../components/Preloader';


export default function Home() {


    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Preloader />

            <Header />

            <Hero />

            <About />

            <div className="between">
                <div className="line-between"></div>
            </div>

            <Services />

            <div className="between">
                <div className="line-between"></div>
            </div>

            <Project />

            <div className="between">
                <div className="line-between"></div>
            </div>

            <Team />

            <div className="between">
                <div className="line-between"></div>
            </div>

            <News />

            <div className="between">
                <div className="line-between"></div>
            </div>

            <Testimonials />

            <div className="client mid-title fades">
                <div className="container">

                    <div className="partner">
                        <div className="owl-carousel owl-theme">
                            <div className="item-partner">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <img src="assets/img/partner/light/client-1.png" alt="1" />
                                    </div>
                                </div>
                            </div>

                            <div className="item-partner">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <img src="assets/img/partner/light/client-2.png" alt="1" />
                                    </div>
                                </div>
                            </div>

                            <div className="item-partner">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <img src="assets/img/partner/light/client-3.png" alt="1" />
                                    </div>
                                </div>
                            </div>

                            <div className="item-partner">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <img src="assets/img/partner/light/client-4.png" alt="1" />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>


            <div className="between">
                <div className="line-between"></div>
            </div>

            <Contact />

            <section className="copyrights">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mt-40">
                            <div className="copyright">
                                <h3>©2019 Akar. All rights reserved.</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <div className="line-thumb">
                <div className="line-col first"></div>
                <div className="line-col second"></div>
                <div className="line-col third"></div>
                <div className="line-col fourth"></div>
                <div className="line-col fifth"></div>
            </div>

        </>
    )
}