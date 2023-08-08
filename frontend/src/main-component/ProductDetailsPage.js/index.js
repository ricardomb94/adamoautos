import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import ProductDetails from '../../components/ProductDetails.js'



const ProductDetailsPage = (props) => {
  
  return (
    <>
      <Navbar/>
      <ProductDetails/>
      <Footer/>
      <Scrollbar/>
    </>
  )
}

export default ProductDetailsPage