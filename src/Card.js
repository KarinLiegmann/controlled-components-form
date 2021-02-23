import styled from 'styled-components'


export default function Card({ product_name, price, currency, category, package_size, email, product_tags, on_sale }) {
    return (
        <CardWrapper>
            <h2>Product: {product_name}</h2>
            <p>Price: {price}</p>
            <p>Currency: {currency}</p>
            <p>Category: {category}</p>
            <p>Package Size: {package_size}</p>
            <p>Support Contact: {email}</p>
            <p>Product Tags: {product_tags}</p>
            <p>On Sale: {on_sale}</p>
        </CardWrapper>
    );
}

const CardWrapper = styled.section`
border: 1px solid black;
margin: 1rem;
padding: 1rem;
`
