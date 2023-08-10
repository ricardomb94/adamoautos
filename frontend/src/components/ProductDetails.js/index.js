import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../../products';
import { Card } from 'react-bootstrap';
import SingleSidebar from '../SingleSidebar';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"
import './style.css'

const ProductDetails = () => {
    const {id: productId} = useParams()
    const product = products.find((p) => p._id === Number(productId))
    if (!product) {
        return <div>Produit non trouvé</div>;
      }
    
      const images = product.images.map(imageObj => ({
        original: imageObj.original,
        thumbnail: imageObj.thumbnail,
      }));
  
        return (

            <div className="hx-service-dt-area hx-section-padding">
            <div className="container">
                <div className="row">
                    <SingleSidebar/>
                    <div className="col-lg-8">
                        <div className="hx-service-dt-right">
                            {/* <div className="hx-service-dt-img">
                                <img src={product.image} alt=""/>
                            </div> */}
                            <div className="hx-service-dt-i">
                                <Card className="my-3 p-3 rounded">
                                    <ImageGallery 
                                        items={images} 
                                        thumbnailPosition="left"
                                        />

                                </Card>
                           
                            </div>
                            <p><span></span>{product.description}</p>
                            <blockquote>Veuillez nous contacter pour plus de détails !</blockquote>
                            <div className="hx-service-dt-s">
                                <img src={product.image} alt="" />
                            </div>
                        </div>
                        <div className="prv-nx">
                            <div className="pre-btn"><Link to="/catalogue">Retour au Catalogue</Link></div>
                            {/* <div className="nex-btn"><Link to="/service-details">Next</Link></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default ProductDetails;