import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'


const Services = (props) => {

    const service = [
        {
            icon: 'fi flaticon-car-repair',
            title: 'Diagnostique et entretien',
            des:'Vidange + filtre à huile, Révision complète, Freinage: Changement de plaquettes de frein, Liquide de frein, Frein à tambour',
            link:'/service-details'
        },
        {
            icon: 'fi flaticon-battery',
            title: 'Charge et Démarrage',
            des:'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,',
            link:'/service-details'
        },
        {
            icon: 'fi flaticon-electricity',
            title: 'Embrayage',
            des:'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,',
            link:'/service-details'
        },
        {
            icon: 'fi flaticon-turbo',
            title: 'Moteur',
            des:'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,',
            link:'/service-details'
        },
        {
            icon: 'fi flaticon-tyre',
            title: 'Roues',
            des:'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,',
            link:'/service-details'
        },
        {
            icon: 'fi flaticon-car-1',
            title: 'Direction et Transmission',
            des:'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,',
            link:'/service-details'
        },
        {
            icon: 'fi flaticon-car-2',
            title: 'Suspension',
            des:'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,',
            link:'/service-details'
        },
        {
            icon: 'fi flaticon-car-2',
            title: 'Echappement',
            des:'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,',
            link:'/service-details'
        },
        {
            icon: 'fi flaticon-car-2',
            title: 'Distribution',
            des:'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,',
            link:'/service-details'
        },
    ]


    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return (

        <div className={`hx-service-style-1 ptb-100-70 ${props.sClass}`}>
            <div className="container">
                <div className="col-12">
                    <div className="hx-site-title-1 text-center">
                        {/* <span>What We Do</span> */}
                        <h2>Nos Services</h2>
                    </div>
                </div>
                
                <div className="row">
                    {service.map((service, Sitem) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={Sitem}>
                            <div className="hx-service-wrap">
                                <div className="hx-service-icon">
                                    <i className={service.icon}></i>
                                </div>
                                <div className="hx-service-text">
                                    <h2><Link onClick={ClickHandler} to={service.link}>{service.title}</Link></h2>
                                    <p>{service.des}</p>
                                </div>  
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services;