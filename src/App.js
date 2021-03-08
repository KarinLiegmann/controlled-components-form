import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Form from './components/Form'
import Card from './components/Card'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [products, setProducts] = useState([])

  const addProduct = ((product) => {

    setProducts([...products, { ...product, id: uuidv4() }])

  }) // callback, Methode um was von Child zu Parent zu schicken



  return (
    <Wrapper className="App">
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
