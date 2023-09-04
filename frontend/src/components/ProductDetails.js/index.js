import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../../products';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import SingleSidebar from '../SingleSidebar';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"
import sd3 from '../../images/project/img-10.jpg'
import './style.css';

const ProductDetails = ({props}) => {
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
                                        thumbnailPosition="bottom"
                                        />

                                </Card>
                           
                            </div>
                            <h3 className='title-list'>Caractéristiques</h3>
                            
                            <ListGroup>
                                <ListGroupItem >
                                    <span className="font-weight-bold">Année</span>: {product.year}
                                </ListGroupItem> 
                                <ListGroupItem >
                                    <span className="font-weight-bold">Provenance: </span> {product.provenance}
                                </ListGroupItem>
                                <ListGroupItem>
                                <span className="font-weight-bold"> Mise en circulation: </span> {product.registration}    
                                </ListGroupItem>
                                <ListGroupItem>
                                <span className="font-weight-bold">Contrôle technique: </span> {product.vehicleInspection}
                                </ListGroupItem>
                                <ListGroupItem>
                                <span className="font-weight-bold">Première main: </span> {product.originalOwner}
                                </ListGroupItem>
                                <ListGroupItem>
                                <span className="font-weight-bold">Km compteur: </span> {product.odometerReading}
                                </ListGroupItem>
                            </ListGroup >
                            
                            <ListGroup className="list-2 ">
                                <ListGroupItem>
                                <span className="font-weight-bold">Energie: </span> {product.energy}
                                </ListGroupItem>
                                <ListGroupItem>
                                <span className="font-weight-bold">Boite vitesse: </span> {product.transmission}
                                </ListGroupItem>
                                <ListGroupItem>
                                <span className="font-weight-bold">Sellerie: </span> {product.upholstery}
                                </ListGroupItem>
                                <ListGroupItem>
                                <span className="font-weight-bold">Nombre de portes: </span> {product.doors}
                                </ListGroupItem>
                                <ListGroupItem>
                                <span className="font-weight-bold">Nombre de places: </span> {product.seats}
                                </ListGroupItem>
                                <ListGroupItem>
                                <span className="font-weight-bold">Couleur: </span> {product.color}
                                </ListGroupItem>
                          </ListGroup>
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