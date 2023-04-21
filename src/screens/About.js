import React, { useState, useEffect } from 'react'
import FooterBar from '../components/FooterBar'
import { getProducts } from '../services/ApiService';

export default function About() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // let mount = true
    getProducts()
      .then(res => {
        console.log('response from api', res)
        setProducts(res)
        // return () => mount = false
        console.log('Products', products)
      })
    // console.log('Products', products);
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='container-fluid' style={{ marginTop: 60 }}>
      Hello there ! Welcome to About Page.
      <table border={2} cellPadding={10} cellSpacing={10} width={'100%'}>
        <thead>
          <tr>
            <td>Product Id</td>
            <td>Product Name</td>
            <td>Product Description</td>
          </tr>
        </thead>
        <tbody>
          {products.map(products => (
            <tr key={products.product_id}>
              <td>{products.product_id}</td>
              <td>{products.product_name}</td>
              <td>{products.product_description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <FooterBar />
    </div>
  )
}
