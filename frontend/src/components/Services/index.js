import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'


const Services = (props) => {

    console.log('***Services props***', props);

    const service = [
        {
            id:1,
            icon: 'fi flaticon-car-repair',
            title: 'Diagnostique et entretien',
            des:'Vidange + filtre à huile, Révision complète, Freinage: Changement de plaquettes de frein, Liquide de frein, Frein à tambour',
            link:'/service'
        },
        {
            id:2,
            icon: 'fi flaticon-battery',
            title: 'Charge et Démarrage',
            des:'Contrôle de la batterie, Réparation du système de charge, et démarrage. Remplacement de la batterie si nécessaire',
            link:'/service'
        },
        {
            id:3,
            icon: 'fi flaticon-electricity',
            title: 'Embrayage',
            des: "Diagnostic et ajustement, Remplacement du kit d'embrayage, Contrôle de l'embrayage et de la boîte de vitesses.",
            link:'/service'
        },
        {
            id:4,
            icon: 'fi flaticon-turbo',
            title: 'Moteur',
            des:"Diagnostic et réparation, Révision complète du moteur, Remplacement des pièces défectueuses, Contrôle des fluides et de la performance moteur, Entretien pour une efficacité optimale.",
            link:'/service'
        },
        {
            id:5,
            icon: 'fi flaticon-tyre',
            title: 'Roues',
            des:"Équilibrage et alignement, Changement de pneus, Contrôle de la pression des pneus, Rotation des pneus pour une usure uniforme, Entretien des roues pour une conduite sûre et confortable.",
            link:'/service'
        },
        {
            id:6,            icon: 'fi flaticon-car-1',
            title: 'Direction et Transmission',
            des:"Diagnostic et ajustement, Entretien de la direction assistée, Réparation ou remplacement des composants, Contrôle du système de transmission pour une performance fluide.",
            link:'/service'
        },
        {
            id:7,            icon: 'fi flaticon-car-2',
            title: 'Suspension',
            des:"Vérification et réglage, Remplacement des amortisseurs ou des ressorts, Contrôle de la suspension pour une conduite stable, Entretien pour une absorption optimale des chocs",
            link:'/service'
        },
        {
            id:8,            icon: 'fi flaticon-car-2',
            title: 'Echappement',
            des:"Inspection et réparation, Remplacement des composants défectueux, Contrôle des émissions, Entretien du système d'échappement dans le respect des normes environnementales",
            link:'/service'
        },
        {
            id:9,            icon: 'fi flaticon-car-2',
            title: 'Distribution',
            des:"Vérification du système de distribution, Changement de la courroie de distribution, Contrôle des composants, Maintenance pour la fiabilité et la synchronisation du moteur",
            link:'/service'
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
                                    <p className="text-justify">{service.des}</p>
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