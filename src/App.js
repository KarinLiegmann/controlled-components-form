import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Form from './components/Form'
import Card from './components/Card'


function App() {

  const [products, setProducts] = useState([])

  const addProduct = ((product) => {
    setProducts([...products, { ...product, id: uuidv4() }])
  })

  return (
    <Wrapper className="App">
      <h1>Add a Product</h1>
      <Form submitFunction={addProduct} />

      {products.map((product) => (
        <Card
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
