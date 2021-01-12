import React from 'react'
import bromind from '../../asset/image/bro mind.png';
import tbmandiri from '../../asset/image/tb mandiri.png';


export default function Work() {
    return (
        <>

            <section className="portofolio">
                <div className="container">
                    <div className="title">
                        <div className="col-xl-12 text-center">
                            <h2>Our <span className="we">latest works</span></h2>
                        </div>
                    </div>
                    <div className="col-xl-11 m-auto">
                        <div className="row">
                            <div className="col-12 col-md-11 col-xl-6 view-project m-auto">
                                <div className="view-project-title">
                                    <h6>View project <i className="fas fa-chevron-right ms-1"></i></h6>
                                </div>
                                <div className="project">
                                    <div className="col-11 col-md-12 col-lg-12 col-xl-11 ms-3">
                                        <div className="col-10 col-md-8 col-lg-7 col-xl-12 m-auto">
                                            <img src={bromind} alt="Bro Mind Cafe" className="w-100 my-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-11 col-xl-6 view-project m-auto">
                                <div className="view-project-title">
                                    <h6>View project <i className="fas fa-chevron-right ms-1"></i></h6>
                                </div>
                                <div className="project">
                                    <div className="col-11 col-md-12 col-lg-12 col-xl-11 ms-3">
                                        <div className="col-10 col-md-8 col-lg-7 col-xl-12 m-auto">
                                            <img src={tbmandiri} alt="TB Mandiri" className="w-100 my-5" />
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
