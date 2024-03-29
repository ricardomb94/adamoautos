import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom'
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Accueil',
        link: '/home',
    },

{
    id: 3,
        title: 'Service',
        link: '/service',
    },
{
    id: 4,
        title: 'Catalogue',
        link: '/catalogue',
    },
    {
        id: 7,
        title: 'Compte',
        link: '/',
        submenu: [
            
            {
                id: 79,
                title: 'Connexion',
                link: '/login'
            },
            {
                id: 790,
                title: "S'enregistrer",
                link: '/signup'
            },
            
        ]
    },

   
    {
        id: 2,
        title: 'Qui sommes-nous',
        link: '/about',
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }
    
    
]


export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    

    render() {

        const { isMenuShow, isOpen } = this.state;


        const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }
    

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}

                    <ul className="responsivemenu">
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? <p onClick={this.setIsOpen(item.id)}>
                                        {item.title}
                                        {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                    </p> : <Link onClick={ClickHandler} to={item.link}>{item.title}</Link>}
                                    {item.submenu ?
                                    <Collapse isOpen={item.id === isOpen}>
                                        <Card>
                                            <CardBody>
                                                <ul>
                                                    {item.submenu.map(submenu => (
                                                        <li key={submenu.id}><Link onClick={ClickHandler} className="active" to={submenu.link}>{submenu.title}</Link></li>
                                                    ))}
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                    : ''}
                                </li>
                            )
                        })}
                    </ul>

                </div>

                <div className="showmenu" onClick={this.menuHandler}>
                    <i className="ti-layout-line-solid" aria-hidden="true"></i>
                    <i className="ti-layout-line-solid" aria-hidden="true"></i>
                    <i className="ti-layout-line-solid" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}
