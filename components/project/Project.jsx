import Image from "next/image"

import Portfolio1 from "../../public/img/portfolio/1.jpg"
import Portfolio2 from "../../public/img/portfolio/2.jpg"
import Portfolio7 from "../../public/img/portfolio/7.jpg"
import Portfolio8 from "../../public/img/portfolio/8.jpg"

const Project = () => {
    return (
        <section id="project" className="project-section parallax-scrl" data-scroll-index="3">
            <div className="left-bg"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt-30">
                        <div className="title">
                            <h3>Our recent</h3>
                            <h2>Projects</h2>

                        </div>
                    </div>
                </div>
                <div className="row mt-40">

                    <div className="col-md-12 col-lg-6">
                        <a href="project-detail-dark.html">
                            <div className="project-content">
                                <div className="img-project">
                                    <Image src={Portfolio7} alt="" />
                                </div>
                                <div className="detail-project">
                                    <p><span className="number">01</span> <span className="strip"></span> Web Development</p>
                                    <h3 className="reveal-text">After Hours</h3>
                                </div>
                            </div>
                        </a>
                    </div>


                    <div className="col-md-12 col-lg-6">
                        <a href="project-detail-dark.html">
                            <div className="project-content mt-60-lg ">
                                <div className="img-project">
                                    <Image src={Portfolio8} alt="" />
                                </div>
                                <div className="detail-project">
                                    <p><span className="number">02</span> <span className="strip"></span>Branding</p>
                                    <h3 className="reveal-text">Balsoy</h3>
                                </div>
                            </div>
                        </a>
                    </div>


                    <div className="col-md-12 col-lg-6">
                        <a href="project-detail-dark.html">
                            <div className="project-content">
                                <div className="img-project">
                                    <Image src={Portfolio1} alt="" />
                                </div>
                                <div className="detail-project">
                                    <p><span className="number">03</span> <span className="strip"></span>Mobile App</p>
                                    <h3 className="reveal-text">Explore to Mars</h3>
                                </div>
                            </div>
                        </a>
                    </div>


                    <div className="col-md-12 col-lg-6">
                        <a href="project-detail-dark.html">
                            <div className="project-content mt-60-lg">
                                <div className="img-project">
                                    <Image src={Portfolio2} alt="" />
                                </div>
                                <div className="detail-project">
                                    <p><span className="number">04</span> <span className="strip"></span>Branding</p>
                                    <h3 className="reveal-text">Y A S</h3>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-lg-12 text-center">
                        <div className="mt-20">
                            <a className="btn-main" href="single-portfolio-dark.html">All Projects</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Project