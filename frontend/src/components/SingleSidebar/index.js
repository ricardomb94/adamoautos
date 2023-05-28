import React from 'react';
import {Link} from 'react-router-dom'
import s1 from '../../images/service-details/img-3.jpg'


const SingleSidebar = () => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(
        <div className="col-lg-4 col-md-12 col-12">
            <div className="hx-service-dt-left">
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/">Réparation Moteur</Link></li>
                        <li><Link onClick={ClickHandler} to="/">Remplacement des pneumatiques</Link></li>
                        <li><Link onClick={ClickHandler} to="/">Transmission</Link></li>
                        <li><Link onClick={ClickHandler} to="/">Diagnostique</Link></li>
                        <li><Link onClick={ClickHandler} to="/">Remplacement de batterie</Link></li>
                        <li><Link onClick={ClickHandler} to="/">Réparation du sytème de freinage</Link></li>
                    </ul>
                </div>
                <div className="hx-field-section">
                    <div className="hx-field-img">
                        <img src={s1} alt=""/>
                    </div>
                    <div className="hx-field-content">
                        <h3>Recevez<span>25%</span>de réduction</h3>
                        <h2>Pour toute commande</h2>
                    </div>
                </div>
                <div className="hx-contact-ad">
                    <div className="hx-contact-sub">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <h4>Téléphone</h4>
                        <p>06.46.46.12.52</p>
                    </div>
                    <div className="hx-contact-sub">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        <h4>Email</h4>
                        <p>ricardo.mboukou@gmail.com</p>
                    </div>
                    <div className="hx-contact-sub hx-contact-sub-2">
                        <i className="fa fa-map-o" aria-hidden="true"></i>
                        <h4>Address</h4>
                        <p> 150 rue de la Mare, 75020 Paris</p>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default SingleSidebar;
