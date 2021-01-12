import React from 'react';
import triangle from '../../asset/image/Vector 16.svg';
import rounded from '../../asset/image/rounded.png';
import group from '../../asset/image/Group 792.png';


export default function Hero() {
    return (
        <>
            {/* <!-- hero --> */}
            <section className="hero">
                <div className="container">
                    <div className="col-12 col-sm-10 col-md-11 col-xl-11 m-auto">
                        <div className="content">
                            <h1>A place for something<span>big solution</span></h1>
                            <div className="col-5 col-lg-3 col-xl-3 m-auto mt-5 text-center">
                                <a className="btn button" href="talk.html" target="blank">let's talk!</a>
                            </div>
                        </div>
                    </div>
                    <div className="triangle">
                        <div className="image">
                            <img src={triangle} alt="" className="w-100" />
                        </div>
                    </div>
                    <div className="col-11 col-sm-12 col-md-10 col-lg-10 col-xl-12">
                        <div className="col-5 col-sm-4 col-md-4 col-lg-3 col-xl-3 ms-auto">
                            <img src={rounded} alt="Lingkarang" className="w-100" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 col-xl-6 m-auto">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-12 m-auto">
                            <div className="flat-animasion">
                                <img src={group} alt="group" className="w-100" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-3">
                        <div className="col-5 col-sm-4 col-md-4 col-lg-3 image-rounded-1">
                            <img src={rounded} alt="Lingkarang" className="w-100" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
