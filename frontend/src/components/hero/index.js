import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroContactFrom from '../HeroContactFrom'

import './style.css'

import hero1 from '../../images/slider-moteur.jpg'
import hero2 from '../../images/woman-driver.jpg'
import hero3 from '../../images/slider-mecano.jpg'
import { Link } from "react-router-dom";



class Hero extends Component {
    render() {

        var settings = {
            dots: true,
            arrows: true,
            speed: 2500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            fade: true
        };

        const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }

        return (
            <section className={`hero hero-slider-wrapper hx-hero-style-1 ${this.props.heroClass}`}>
                <div className="hero-slider">
                    <Slider {...settings}>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${hero1})` }}>
                                <div className="container header-p">
                                    <div className="row">
                                        <div className="col col-lg-6 hx-slide-caption">
                                            {/* <h2>Réparation</h2> */}
                                            <h2>Avec nous vous bénéficiez d'un service personnalisé de qualité professionelle.</h2>
                                            <div className="btn-style">
                                                <Link onClick={ClickHandler} to="/about">En savoir + </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <HeroContactFrom/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${hero2})` }}>
                                <div className="container header-p">
                                    <div className="row">
                                        <div className="col col-lg-6 hx-slide-caption">
                                            <h2>Votre satifaction est au coeur de nos priorités</h2>
                                            {/* <p>Votre véhicule est entre de bonnes mains.</p> */}
                                            <div className="btn-style">
                                                <Link onClick={ClickHandler} to="/about">En savoir + </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <HeroContactFrom/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${hero3})` }}>
                                 <div className="container header-p">
                                    <div className="row">
                                        <div className="col col-lg-6 hx-slide-caption">
                                            {/* <h2>Sérénité</h2> */}
                                            <h2>Nous mettons à votre disposition un personnel qualifié et bienveillant</h2>
                                            <div className="btn-style">
                                                <Link onClick={ClickHandler} to="/about">En savoir plus + </Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                             <HeroContactFrom/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
             </section>
        )
    }
}

export default Hero;