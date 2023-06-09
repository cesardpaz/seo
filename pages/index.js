import Head from 'next/head';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Services from '../components/services/Services';
import Project from '../components/project/Project';
import Team from '../components/team/Team';
import News from '../components/news/News';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';
import Clients from '../components/clients/Clients';
import Preloader from '../components/Preloader';
import { NextSeo } from 'next-seo';

export default function Home() {


    return (
        <>
            <NextSeo
                title="Página de inicio"
                description="Esta es la descripción de la página de inicio"
                openGraph={{
                url: 'https://www.example.com/',
                title: 'Página de inicio',
                description: 'Esta es la descripción de la página de inicio',
                images: [
                    {
                    url: 'https://www.example.com/images/og-image.jpg',
                    width: 800,
                    height: 600,
                    alt: 'Descripción de la imagen',
                    },
                ],
                }}
            />
            <Head>
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

            <Clients />

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