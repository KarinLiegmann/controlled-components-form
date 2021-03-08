import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ProductForm from './components/ProductForm'
import ProductCard from './components/ProductCard'


function App() {

  const [products, setProducts] = useState([])

  const addProduct = ((product) => {
    setProducts([...products, { ...product, id: uuidv4() }])
  })

  return (
    <Wrapper className="App">
      <h1>Add a Product</h1>
      <ProductForm submitFunction={addProduct} />

      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
        />
      ))}

    </Wrapper>
  );
}

export default App;


const Wrapper = styled.div`
display: flex;
direction: column;
flex-wrap: wrap;
width: 360px;
`
