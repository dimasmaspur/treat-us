import React from 'react'
import pencil from '../../asset/image/pencil.png'
import laptop from '../../asset/image/laptop.png'
import mail from '../../asset/image/mail.png'

export default function Offer() {
    return (
        <>
            <section className="we-ofer">
                <div className="container">
                    <div className="input-group">
                        <div className="col-xl-2 ms-5">
                            <h2><span className="we">Explore</span> what we offer?</h2>
                        </div>
                        <div className="col-12 col-md-12 col-lg-12 col-xl-10 m-auto">
                            <div className="row col-lg-10 col-xl-12 m-auto mt-4">
                                <div className="col-10 col-md-8 col-lg-4 col-xl-4 m-auto my-1">
                                    <div className="col-4 col-lg-5 col-xl-5 margin-auto">
                                        <img src={pencil} alt="Pencil" className="w-100 pencil" />
                                    </div>
                                    <div className="col-lg-9 col-xl-12 information">
                                        <h4 className="my-3">Product Design</h4>
                                        <p>It really works important for a which company as form of identity or a hallmark of the company</p>
                                    </div>
                                </div>
                                <div className="col-10 col-md-8 col-lg-4 col-xl-4 m-auto my-1">
                                    <div className="col-4 col-lg-5 col-xl-5 margin-auto">
                                        <img src={laptop} alt="Pencil" className="w-100" />
                                    </div>
                                    <div className="col-lg-9 col-xl-12 information">
                                        <h4 className="my-3">Development</h4>
                                        <p>Application also included need <br /> for each company as well personal<br />
                                because of the application even<br /> the public knows what that your<br />
                                company have Because this<br /> time all already in hand</p>
                                    </div>
                                </div>
                                <div className="col-10 col-md-8 col-lg-4 col-xl-4 m-auto my-1">
                                    <div className="col-4 col-lg-5 col-xl-5 margin-auto">
                                        <img src={mail} alt="Pencil" className="w-100" />
                                    </div>
                                    <div className="col-lg-9 col-xl-12 information">
                                        <h4 className="my-3">Branding</h4>
                                        <p className="d-pc kontenOffer">With the availability of media the one that can<br />
                                accessible to all person the company who
                                want to be known broad as well company<br /> who wants to keep relationship with his
                                customers</p>

                                        <p className="d-lg-none">With the availability of media the one that<br /> can
                                accessible to all person the company who
                                want to be known broad as well company who wants to keep relationship with his
                                customers</p>
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
