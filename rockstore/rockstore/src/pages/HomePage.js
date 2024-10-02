import React from 'react'
import Header from '../components/Header'
import SidebarCart from '../components/SidebarCart'
import ProductsList from '../components/ProductsList'
import ExclusiveSection from '../components/ExclusiveSection'
import ReviewsList from '../components/ReviewsList'


export default function HomePage({ products, addProductToCart,}) {
  return (
    <> 
    
    
    <Header />
    

    <div className="page-inner-content">
      <div className="section-title">
        <h3>Produtos Selecionados</h3>
        <div className="underline"></div>
      </div>
      <div className="main-content">
        <ProductsList addProductToCart={addProductToCart}
         products={products}/>
      </div>
    </div>
  
  <ExclusiveSection />
  <ReviewsList /></>
  )
}