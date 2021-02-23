import styled from 'styled-components'
import { useState, useEffect } from 'react'
import loadLocalStorage from './services/loadLocalStorage'
import Form from './Form'
import Card from './Card'

function App() {

  const [product, setProduct] = useState({
    product_name: '',
    price: '',
    currency: '$USD',
    category: '',
    package_size: '', // camelCase?
    email: '',
    product_tags: [],
    on_sale: false
  })

  const handleChange = ((event) => {
    const field = event.target;
    const value = field.type === 'checkbox' ? field.checked : field.value;

    setProduct({
      ...product,
      [field.name]: value
    })
  })

  const [cards, setCards] = useState([])

  const addCard = ((event) => {
    event.preventDefault();

    const field = event.target;
    const value = field.name === 'on_sale' ? field.checked : field.value;

    const newItem = {
      ...product,
      [field.name]: value
    }

    setCards([...cards, newItem])

  })




  return (
    <div className="App">

      <Form
        product_name={product.product_name}
        price={product.price}
        currency={product.currency}
        category={product.category}
        package_size={product.package_size}
        email={product.email}
        product_tags={product.product_tags}
        on_sale={product.on_sale}
        onChangeFunction={handleChange}
        onClickFunction={addCard} />

      {cards.map(({ product_name, price, currency, category, package_size, email, product_tags, on_sale }) => (
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
