import React from 'react';
import logo from '../../asset/image/TU.png';

export default function Header() {
    return (
        <>
            <nav className="navbar change navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <a className="navbar-brand mx-4" href="page.html"><img src={logo} alt="tret-us" className="image-tret-us" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <a className="treat-us-logo d-lg-none" href="page.html"><img src={logo} alt="tret-us" className="image-tret-us" /></a>
                        <button className="navbar-toggler close" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 col-xl-5">
                            <li className="nav-item col-xl-3" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                                <a className="nav-link active col-xl-5 m-auto" aria-current="page" href="#">
                                    <p className="my-0">Home</p>
                                </a>
                            </li>
                            <li className="nav-item col-xl-3" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                                <a className="nav-link active col-xl-5 m-auto" aria-current="page" href="#">
                                    <p className="my-0">Project</p>
                                </a>
                            </li>
                            <li className="nav-item col-xl-3" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                                <a className="nav-link active col-xl-5 m-auto" aria-current="page" href="#">
                                    <p className="my-0">About</p>
                                </a>
                            </li>
                            <li className="nav-item col-xl-3" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                                <a className="nav-link active col-xl-6 m-auto" aria-current="page" href="#">
                                    <p className="my-0">Contact</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
