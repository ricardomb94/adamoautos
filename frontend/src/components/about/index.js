import React from 'react'
import abimg from '../../images/entretien-auto.jpg'
// import VideoModal from '../ModalVideo'
import { Link } from "react-router-dom";
import './style.css'

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="hx-about-style-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="hx-about-content">
                            <div className="hx-site-title">
                                <span>Adamo Autos</span>
                                <h2 className="hx-contact-content">Votre garage de référence</h2>
                            </div>
                            <p>Notre garage met à votre disposition un mécanicien qualifié et expérimenté pour répondre à tous vos besoins en matière d'entretien et de réparation de véhicules. <br/>
                            Doté d'une expertise approfondie sur les diffirents aspects de la mécanique automobile, il peut travailler sur une large gamme de véhicules utilitaires et de particuliers. Nous accordons une grande importance à la satisfaction de nos clients et nous nous efforçons de fournir un service de qualité en utilisant des équipements modernes et des pièces de rechange de haute qualité. 
                            <br/>En plus des réparations, nous proposons également des véhicules à la vente ainsi que des services d'entretien régulier pour assurer la longévité et les performances optimales de votre véhicule. Nous nous engageons à fournir un service rapide, efficace et personnalisé, en respectant les délais convenus. Visitez notre garage automobile et faites-nous confiance pour prendre soin de votre véhicule avec un service de qualité supérieure."</p>
                            <div className="btns">
                                <div className="btn-style"><Link onClick={ClickHandler} to="/about">En savoir +</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-m">
                        <div className="hx-about-img">
                        <img src={abimg} alt=""/> 
                        </div>
                        {/* <div className="video-btn">
                            <VideoModal/>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;