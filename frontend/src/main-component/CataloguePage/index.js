import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../../components/Product'
import products from '../../products'
import Navbar from '../../components/Navbar';
import Scrollbar from '../../components/scrollbar';
import Footer from '../../components/footer';

const CataloguePage= () => {
  return (
   
    <>
    <Navbar/>
      <h1 className="text-center">Produits Récents</h1>
      <Row>
        {products.map((product, i) => (
          <Col sm={12} md={6} lg={4} key={i} >
            <Product product={product} />
          </Col>
        ))}
      </Row>
      <Footer/>
      <Scrollbar/>
    </>
  );
};

export default CataloguePage;