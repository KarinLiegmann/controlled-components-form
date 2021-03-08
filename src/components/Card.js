import styled from 'styled-components'
import PropTypes from 'prop-types'


export default function Card({ product }) {
    console.log(product)
    return (
        <CardWrapper>
            <h2>Product: {product.product_name}</h2>
            <p>Price: {product.price}</p>
            <p>Currency: {product.currency}</p>
            <p>Category: {product.category}</p>
            <p>Package Size: {product.package_size}</p>
            <p>Support Contact: {product.email}</p>
            <p>Product Tags: {product.product_tags}</p>
            <p>On Sale: {product.on_sale ? "Yes" : "No"}</p>
        </CardWrapper>
    );
}

Card.propTypes = {
    product: PropTypes.object,
}

const CardWrapper = styled.section`
border: 1px solid black;
margin: 1rem;
padding: 1rem;
`
