import React from 'react'
import {Link} from 'react-router-dom'
import erimg from '../../images/error-404.png'
import './style.css'

const Error = (props) => {
    return(
        <section className="error-404-section hx-section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <img src={erimg} alt=""/>
                            </div>
                            <div className="error-message">
                                <h3>Oops! Page non trouvée!</h3>
                                <p>La page que vous tentez d'afficher n'existe pas</p>
                                <Link to="/home" className="theme-btn">Accueil</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;