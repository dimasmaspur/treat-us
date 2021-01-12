import React from 'react'
import design from '../../asset/image/design.jpg';
import analisa from '../../asset/image/analisi.png';
import testing from '../../asset/image/testing.jpg';
import development from '../../asset/image/Group 692.png';
import dev from '../../asset/image/development.jpg';
import platform from '../../asset/image/platform.png';
import launch from '../../asset/image/launch.jpg';
import launch2 from '../../asset/image/Group 691.png';

export default function How() {
    return (
        <>
            <section class="step-work">
                <div class="container">
                    <div class="col-md-11 col-xl-10 m-auto">
                        <h2>How It <span className="we">work</span></h2>
                    </div>
                    <div class="all-step-work">
                        <div class="row col-12 col-sm-10 col-md-8 col-lg-10 col-xl-12 m-auto">
                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <div class="col-lg-4 col-xl-3 d-pc">
                                    <img src={design} alt="Design" class="w-100" />
                                </div>
                                <div class="col-xl-10 mt-4 analayze ms-5 d-pc">
                                    <h5 class="my-3">Analayze & Design</h5>
                                    <p>Analayze & Design is the first step in making<br /> the product what you want and<br />
                        telling us what you want</p>
                                </div>

                                {/* <!-- mobile --> */}
                                <div class="col-2 col-sm-2 col-md-2 m-auto d-lg-none">
                                    <img src={analisa} alt="Design" class="w-100" />
                                </div>
                                <div class="col-12 col-xl-10 mt-4 analayze text-center d-lg-none">
                                    <h5 class="my-3"><b>Analysis</b></h5>
                                    <p>Analysis is the first step in making<br /> the product what you want and<br />
                        telling us what you want</p>
                                </div>
                            </div>

                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <div class="col-lg-4 col-xl-3 d-pc">
                                    <img src={testing} alt="Testing" class="w-100" />
                                </div>
                                <div class="col-xl-10 mt-4 analayze ms-5 d-pc">
                                    <h5 class="my-3">Testing</h5>
                                    <p>After the development stage, testing will be carried out<br />
                            on the platform we created for testing programs that are<br />
                            made to look for various errors such as bugs, errors, or<br />
                            other problems that can arise from the software.</p>
                                </div>

                                {/* <!-- mobile --> */}
                                <div class="col-2 col-sm-2 col-md-2 m-auto mobile d-lg-none">
                                    <img src={development} alt="Development" class="w-100" />
                                </div>
                                <div class="col-xl-10 mt-4 analayze text-center d-lg-none">
                                    <h5 class="my-3"><b>Development</b></h5>
                                    <p>Development is Development is a step after all is analyzed and designed properly and correctly</p>
                                </div>
                            </div>

                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-5">
                                <div class="col-lg-4 col-xl-3 d-pc">
                                    <img src={dev} alt="Development" class="w-100" />
                                </div>
                                <div class="col-xl-10 mt-4 analayze ms-5 d-pc">
                                    <h5 class="my-3">Development</h5>
                                    <p>Development is Development is a step after all, <br />is analyzed and designed properly and correctly</p>
                                </div>

                                {/* <!-- mobile --> */}
                                <div class="col-2 col-sm-2 col-md-2 m-auto d-lg-none">
                                    <img src={platform} alt="Platform" class="w-100" />
                                </div>
                                <div class="col-xl-10 mt-4 analayze text-center d-lg-none">
                                    <h5 class="my-3"><b>Platform transfromes</b></h5>
                                    <p>Development is Development is a step after all is analyzed and designed properly and correctly</p>
                                </div>
                            </div>

                            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-5">
                                <div class="col-lg-4 col-xl-3 d-pc">
                                    <img src={launch} alt="Launch" class="w-100" />
                                </div>
                                <div class="col-xl-10 mt-4 analayze ms-5 d-pc">
                                    <h5 class="my-3">Launch</h5>
                                    <p>This process means that the platform is ready for release and becomes public</p>
                                </div>

                                {/* <!-- mobile --> */}
                                <div class="col-2 col-sm-2 col-md-2 m-auto d-lg-none">
                                    <img src={launch2} alt="Launch" class="w-100" />
                                </div>
                                <div class="col-xl-10 mt-4 analayze text-center d-lg-none">
                                    <h5 class="my-3"><b>Launch</b></h5>
                                    <p>This process means that the platform is ready forrelease and becomes public</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
