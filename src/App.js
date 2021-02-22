import styled from 'styled-components'
import { useState, useEffect } from 'react'
import loadLocalStorage from './services/loadLocalStorage'
import Form from './Form'
import Card from './Card'

function App() {
  const [cardInfos, setCardInfos] = useState(loadLocalStorage('productInformation') ?? [])




  return (
    <div className="App">

      <Form />

      {cardInfos.map(({ product_name, price, currency, category, package_size, email, product_tags, on_sale }) => (
        <Card
          product_name={product_name}
          price={price}
          currency={currency}
          category={category}
          package_size={package_size}
          email={email}
          product_tags={product_tags}
          on_sale={on_sale}
        />
      ))
      }
    </div>
  );
}

export default App;
