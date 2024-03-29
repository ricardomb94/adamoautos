import React from 'react'
import Logo from '../../images/adamologo.png'
import {Link}  from 'react-router-dom'
import MobileMenu from '../MobileMenu'
import HeaderTopbar from '../HeaderTopbar'
import './style.css'

const Header = (props) => {
    const SubmitHandler = (e) =>{
        e.preventDefault()
     }

     const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(	
        <header>
            <HeaderTopbar htClass={props.htClass}/>
            <div className={`hx-header-style-1 ${props.hClass}`} id="sticky-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-7 col-sm-8 col-7 col-t">
                            <div className="logo">
                                <Link onClick={ClickHandler} to="/home"><img src={Logo} alt=""/></Link>
                            </div>
                        </div>
                        <div className="col-lg-8 d-none d-lg-block col-m">
                            <div className="main-menu">
                                <nav className="nav_mobile_menu">
                                    <ul>
                                        <li className="active"><Link onClick={ClickHandler} to="/">Accueil</Link>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/service">services</Link>
                                            <ul className="submenu">
                                                <li><Link onClick={ClickHandler} to="/service">service</Link></li>
                                                {/* <li><Link onClick={ClickHandler} to="/service-details">service details</Link></li> */}
                                            </ul>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/catalogue">Catalogue</Link>
                                            {/* <Link onClick={ClickHandler} to="/project">Ventes</Link> */}

                                            {/* <ul className="submenu"> */}
                                                {/* <li><Link onClick={ClickHandler} to="/project">project</Link></li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/project-details">project details</Link></li> */}
                                            {/* </ul> */}
                                        </li>
                                        {/* <li><Link onClick={ClickHandler} to="/">Compte</Link>
                                            <ul className="submenu">
                                                <li><Link onClick={ClickHandler} to="/pricing">pricing table</Link></li>
                                                <li><Link onClick={ClickHandler} to="/team">Team</Link></li>
                                                <li><Link onClick={ClickHandler} to="/404">Error 404</Link></li> 
                                                <li><Link onClick={ClickHandler} to="/login">Login</Link></li>
                                                <li><Link onClick={ClickHandler} to="/signup">Register</Link></li>
                                            </ul>
                                        </li> */}
                                         <li><Link onClick={ClickHandler} to="/about">Qui sommes-nous</Link></li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>          
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        {/* <div className="col-lg-1 col-md-2 col-sm-2 col-2 search col-t">
                            <ul>
                                <li><Link onClick={ClickHandler} to="/"><i className="fa fa-search"></i></Link>
                                    <ul>
                                        <li>
                                            <form action="search" onSubmit={SubmitHandler}>
                                                <input type="text" placeholder="search here.."/>
                                                <button><i className="fa fa-search"></i></button>
                                            </form>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div> */}
                        <div className="col-lg-1 col-md-2 col-sm-2 col-2 d-block d-lg-none">
                            <MobileMenu/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;