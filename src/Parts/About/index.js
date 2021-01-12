import React from 'react'

export default function About() {
    return (
        <>
            <section className="about-us">
                <div className="container">
                    <div className="col-xl-12">
                        <div className="col-md-11 col-lg-11 col-xl-11 m-auto">
                            <div className="about-us-content">
                                <div className="input-group">
                                    <div className="row col-xl-12 ms-1">
                                        <div className="col-12 col-lg-4 col-xl-4 text-center my-auto">
                                            <h3>Who are <span className="we">we?</span></h3>
                                        </div>
                                        <div className="col-lg-8 col-xl-8 d-pc">
                                            <h5>Treat-Us is a group of teams that was founded in 2020 and is fully
                                            dedicated to helping you build websites, mobile apps, design, and
                                    content marketing <a href="#"><b>Read More</b></a></h5>
                                        </div>

                                        <div className="col-12 col-xl-8 mobile d-lg-none">
                                            <h5>Treat-Us is a group of teams that was<br /> founded in 2020 and is fully</h5><br />
                                            <h5>dedicated to helping you build websites,<br /> mobile apps, design, and</h5><br />
                                            <h5>content marketing <a href="#"><b>Read More</b></a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
