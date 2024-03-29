import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Rating from './Rating';
// import './style.css'

const Product = ({ product }) => {
  return (
    <section id='protfolio'>
      <div className='container'>
        {/* <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                           
                            <div className="gallery-container gallery-fancybox masonry-gallery payra-masonary"> */}
        <Card className='my-3 p-3 rounded'>
          <Link to={`/product/${product._id}`}>
            <Card.Img
              src={product.images[0].original}
              variant='top'
              className='hover-content'
              alt={product.name}
            />
          </Link>
          <Card.Body>
            <Link to={`/product/${product._id}`}>
              <Card.Title as='div'>
                <strong>{product.name}</strong>
              </Card.Title>
            </Link>
            {/* <Card.Text as="div">
                                    <div className="my-3">
                                        <Rating
                                        value={product.rating}
                                        text={`${product.numReviews} reviews`}
                                        color="yellow"
                                        />
                                    </div>
                                    </Card.Text> */}

            <Card.Text as='h3'>{product.price}€</Card.Text>
          </Card.Body>
        </Card>
        {/* </div>
                        </div>
                    </div> */}
      </div>
    </section>
  );
};

export default Product;
