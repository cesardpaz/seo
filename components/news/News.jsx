import Image from "next/image"

import News1 from "../../public/img/news/1.jpg"
import News2 from "../../public/img/news/2.jpg"
import News3 from "../../public/img/news/3.jpg"
import News4 from "../../public/img/news/4.jpg"

const News = () => {
    return (
        <section id="news" className="news parallax-scrl" data-scroll-index="5">
            <div className="left-bg"></div>
            <div className="about-text-bg"></div>
            <div className="container">


                <div className="row">
                    <div className="col-lg-12 mid-title">
                        <div className="title text-center">
                            <h3>Recent</h3>
                            <h2>News</h2>
                        </div>
                    </div>
                    <div className="col-lg-12 mt-50">
                        <div className="news-slider">
                            <div className="owl-carousel owl-theme">
                                <div className="news-item text-center">

                                    <div className="news-img">
                                        <Image className="img-fluid" src={News1} alt="" />
                                    </div>
                                    <div className="news-text">
                                        <h3>Transport and Awwards</h3>
                                        <p>We’ve been selected by GABA to bring their story .</p>
                                        <a className="news-link" href="project-detail-dark.html">Read more</a>
                                    </div>

                                </div>
                                <div className="news-item text-center">

                                    <div className="news-img">
                                        <Image className="img-fluid" src={News2} alt="" />
                                    </div>
                                    <div className="news-text">
                                        <h3>Transport and Awwards</h3>
                                        <p>We’ve been selected by GABA to bring their story .</p>
                                        <a className="news-link" href="project-detail-dark.html">Read more</a>
                                    </div>

                                </div>
                                <div className="news-item text-center">

                                    <div className="news-img">
                                        <Image className="img-fluid" src={News3} alt="" />
                                    </div>
                                    <div className="news-text">
                                        <h3>Transport and Awwards</h3>
                                        <p>We’ve been selected by GABA to bring their story .</p>
                                        <a className="news-link" href="project-detail-dark.html">Read more</a>
                                    </div>

                                </div>
                                <div className="news-item text-center">

                                    <div className="news-img">
                                        <Image className="img-fluid" src={News4} alt="" />
                                    </div>
                                    <div className="news-text">
                                        <h3>Transport and Awwards</h3>
                                        <p>We’ve been selected by GABA to bring their story .</p>
                                        <a className="news-link" href="project-detail-dark.html">Read more</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="mt-40 text-center">
                            <ul className="arrows">
                                <li className="arrow-left -news"><img src="assets/img/arrow-light.png" alt="" /></li>
                                <li className="arrow-right -news"><img src="assets/img/arrow-light-R.png" alt="" /></li>
                            </ul>
                        </div>
                    </div>



                </div>

            </div>
        </section>
    )
}

export default News