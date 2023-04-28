import Image from "next/image"

import News2 from "../../public/img/news/2.jpg"


const Contact = () => {
    return (
        <section className="contact" data-scroll-index="7">
            <div className="left-bg"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="title">
                            <h3>Get in touch</h3>
                            <h2>Contact us</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6  mt-40">
                                <div className="contact-item text-left">
                                    <h3>Akar <span>Studio</span></h3>
                                    <a href="#">Flower 03/11 Street Klaten, Central Java, Indonesia</a>
                                </div>
                            </div>

                            <div className="col-lg-6  mt-40">
                                <div className="contact-item text-left">
                                    <div>
                                        <h3>Say <span>Hello</span></h3>
                                        <div>
                                            <a className="mail" href="#">hello@akarstudio.com</a>
                                        </div>
                                        <div className="mt-10">
                                            <a className="phone" href="#">+313-1253-312</a>
                                        </div>
                                        <div className="social mt-10">
                                            <ul>
                                                <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i> </a></li>
                                                <li><a href="#"><i className="fab fa-behance" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fab fa-dribbble" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-30">
                        <div className="img-contact">
                            <Image src={News2} alt="News 2" />
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default Contact