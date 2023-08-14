import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../../products';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import SingleSidebar from '../SingleSidebar';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"
import sd3 from '../../images/project/img-10.jpg'
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
                    <div className="col-lg-8">
                    <div className="prv-nx">
                            <div className="pre-btn"><h2>{product.brand}</h2></div>
                            {/* <div className="nex-btn"><Link to="/service-details">Next</Link></div> */}
                        </div>
                        <div className="hx-service-dt-right">
                            {/* <div className="hx-service-dt-img">
                                <img src={product.image} alt=""/>
                            </div> */}
                            <div className="hx-service-dt-i">
                                <Card className="my-3 p-3 rounded">
                                    <ImageGallery 
                                        items={images} 
                                        alt={product.brand}
                                        thumbnailPosition="left"
                                        />

                                </Card>
                           
                            </div>
                            <h3 className='title-list'>Caractéristiques</h3>
                            
                            <ListGroup>
                                <ListGroupItem>
                                    Année: {product.year}
                                </ListGroupItem>
                                <ListGroupItem>
                                    Provenance: {product.provenance}
                                </ListGroupItem>
                                <ListGroupItem>
                                     Mise en circulation: {product.registration}    
                                </ListGroupItem>
                                <ListGroupItem>
                                    Contrôle technique: {product.vehicleInspection}
                                </ListGroupItem>
                                <ListGroupItem>
                                    Première main: {product.originalOwner}
                                </ListGroupItem>
                                <ListGroupItem>
                                    Kilométrage compteur: {product.odometerReading}
                                </ListGroupItem>
                                <ListGroupItem>
                                    Energie: {product.energy}
                                </ListGroupItem>
                                <ListGroupItem>
                                    Boite vitesse: {product.transmission}
                                </ListGroupItem>
                                <ListGroupItem>
                                    Sellerie: {product.upholstery}
                                </ListGroupItem>
                                <ListGroupItem>
                                    Nombre de portes: {product.doors}
                                </ListGroupItem>
                                <ListGroupItem>
                                    Nombre de places: {product.seats}
                                </ListGroupItem>
                                <ListGroupItem>
                                    Nombre de places: {product.color}
                                </ListGroupItem>
                          </ListGroup>
                              
                            {/* <blockquote>Veuillez nous contacter pour plus de détails !</blockquote>
                            <div className="hx-service-dt-s">
                                <img src={sd3} alt="" className="img img-responsive"/>
                            </div> */}
                        </div>
                        <div className="prv-nx mt-3">
                            <div className="pre-btn"><Link to="/catalogue">Retour au Catalogue</Link></div>
                            {/* <div className="nex-btn"><Link to="/service-details">Next</Link></div> */}
                        </div>
                    </div>
                    <SingleSidebar className="mt-3"/>
                </div>
            </div>
        </div>
        );
}

export default ProductDetails;