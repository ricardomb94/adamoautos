import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../products';
import { Card } from 'react-bootstrap';

const ProductDetails = () => {
    const {id: productId} = useParams()
    
  const product = products.find((p) => p._id === Number(productId))
  console.log('**PRODCT_ID**', product)


        return (

            <section id="protfolio" >
                <Card className="my-3 p-3 rounded">
                    <Card.Img src={product.image} variant="top" className='hover-content'/>
                        <Card.Body >
                            <Card.Title as="div">
                                <strong>{product.name}</strong>
                            </Card.Title>
                        <Card.Text as="h3">€{product.price}</Card.Text>
                        <Card.Text as="p">{product.description}</Card.Text>            
                    </Card.Body>
                </Card>
            </section>
        );
}

export default ProductDetails;