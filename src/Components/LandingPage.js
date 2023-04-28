import React from 'react'
// import "../assets/css/main.css";
import hero from "../assets/img/hero.png";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div id='sarrvesh'>
        <header>
            <nav className="header__nav w-120">
                {/* <div className="header__logo">
                    <img src="../assets/img/logo.svg" alt="Logo"/>
                </div> */}
                <div className="header__nav__content">
                    <div className="nav-close-icon"></div>
                    {/* <ul class="header__menu">
                        <li class="menu__item">
                            <a href="#" class="menu__link active">Home</a>
                        </li>
                        <li class="menu__item">
                            <a href="#" class="menu__link">Product</a>
                        </li>
                        <li class="menu__item">
                            <a href="#" class="menu__link">Team</a>
                        </li>
                        <li class="menu__item">
                            <a href="#" class="menu__link">Blog</a>
                        </li>
                        <li class="menu__item">
                            <a href="#" class="menu__link">Contact</a>
                        </li>
                    </ul> */}
                    <div className="header__signup">
                        <a href="/login" className="btn btn__signup">
                            <i className="fas fa-user-plus"></i> Sign In
                        </a>
                    </div>
                </div>

                <div className="hamburger-menu-wrap">
                    <div className="hamburger-menu">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </nav>
        </header>

        <section className="hero w-120">
            <div className="hero__content">
                <div className="hero__text">
                    <h1 className="hero__title">Welcome to Crop Companion</h1>
                    <p className="hero__description">
                        CropCompanion provides farmers, ranchers, private foresters, and agricultural producers with online self service applications and educational materials.
                    </p>
                    <a href="/login" className="btn btn__hero">Sign In</a>
                </div>
                <div className="hero__img">
                    <img src={hero} alt="xyz"/>
                </div>
            </div>
        </section>

    </div>
  )
}

export default LandingPage
