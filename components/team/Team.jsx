import Image from "next/image"

import Team1 from "../../public/img/team/1.png"
import Team2 from "../../public/img/team/2.png"
import Team3 from "../../public/img/team/3.png"

const Team = () => {
    return (
        <section id="team" className="team parallax-scrl" data-scroll-index="4">
            <div className="team-text-bg"></div>
            <div className="container">

                <div className="row">

                    <div className="col-lg-3 order-lg-2 centered">
                        <div className="title text-left">
                            <h3>Our Awesome</h3>
                            <h2>Team</h2>

                        </div>

                    </div>

                    <div className="col-lg-9 order-lg-1 mt-10">
                        <div className="team-slider">
                            <div className="owl-carousel owl-theme">
                                <div className="team-item text-center">
                                    <div className="team-img">
                                        <Image src={Team1} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h3>Nicky Astria</h3>
                                        <p>Web Developer</p>
                                    </div>
                                </div>

                                <div className="team-item text-center">
                                    <div className="team-img">
                                        <Image src={Team2} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h3>Ivan Seventeen</h3>
                                        <p>Graphic Designer</p>
                                    </div>
                                </div>

                                <div className="team-item text-center">
                                    <div className="team-img">
                                        <Image src={Team3} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h3>Nicky Astria</h3>
                                        <p>Web Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-40 text-center">
                            <ul className="arrows">
                                <li className="arrow-left -team"><img src="assets/img/arrow-light.png" alt="" /></li>
                                <li className="arrow-right -team"><img src="assets/img/arrow-light-R.png" alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team