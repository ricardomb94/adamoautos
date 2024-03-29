import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const PageTitle = (props) => {
    return(
        <div className="breadcumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcumb-wrap text-center">
                            <h2>{props.pageTitle}</h2>
                            <ul>
                                <li><Link to="/home"></Link></li>
                                <li><span>{props.pagesub}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitle;