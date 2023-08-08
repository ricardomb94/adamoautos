import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../../products';
import { Card } from 'react-bootstrap';
import SingleSidebar from '../SingleSidebar';

const ProductDetails = () => {
    const {id: productId} = useParams()
    
  const product = products.find((p) => p._id === Number(productId))
  console.log('**PRODCT_ID**', product)


        return (

            <div className="hx-service-dt-area hx-section-padding">
            <div className="container">
                <div className="row">
                    <SingleSidebar/>
                    <div className="col-lg-8">
                        <div className="hx-service-dt-right">
                            <div className="hx-service-dt-img">
                                <img src={product.image} alt=""/>
                            </div>
                            <p><span>T</span>{product.description}</p>
                            <blockquote>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words beautiful a benificial to world etc.
                            </blockquote>
                            <div className="hx-service-dt-s">
                                <img src={product.image} alt="" />
                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,</p>
                            </div>
                        </div>
                        <div className="prv-nx">
                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                            <div className="pre-btn"><Link to="/catalogue">Previous</Link></div>
                            {/* <div className="nex-btn"><Link to="/service-details">Next</Link></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default ProductDetails;