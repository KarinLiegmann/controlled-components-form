import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

import isValidProductEntry from '../library/validateFunctions'

import Button from './Button'
import Tags from './Tags'


export default function Form({ submitFunction }) {
    const initialProduct = {
        product_name: '',
        price: '',
        currency: '$USD',
        category: '',
        package_size: '',
        email: '',
        product_tags: [],
        on_sale: false
    }

    const [product, setProduct] = useState(initialProduct)
    const [isError, setIsError] = useState(false)

    const handleChange = ((event) => {
        const field = event.target;
        const value = field.type === 'checkbox' ? field.checked : field.value;

        setProduct({
            ...product,
            [field.name]: value
        })
    })

    function submitForm(event) {
        event.preventDefault();
        if (isValidProductEntry(product)) {
            setIsError(false)
            submitFunction(product);
            setProduct(initialProduct)
        } else {
            setIsError(true)
        }
    }

    const addTag = (newTag) => {
        setProduct({
            ...product,
            product_tags: [...product.product_tags, newTag]
        })
    }

    const deleteTag = (tagToDelete) => {
        const allRemainingTags = product.product_tags.filter((tag) => (tag !== tagToDelete))

        setProduct({
            ...product,
            product_tags: allRemainingTags
        })
    }

    const removeLastTag = () => {
        if (product.product_tags.length > 0) {
            const lastTag = product.product_tags.pop()
            const tagsToKeep = product.product_tags.filter((tag) => (tag !== lastTag))

            setProduct({
                ...product,
                product_tags: tagsToKeep
            })
        }
    }

    const highlightTag = (lengthToFind) => {
        if (product.product_tags.length === lengthToFind) {
            console.log(product.product_tags.value)
        }
    }


    return (
        <MainForm onSubmit={submitForm}>
            <h2>New Product</h2>

            {isError &&
                <Error>
                    <h3>There is an Error in your Form!</h3>
                </Error>}

            <FormSection>
                <label>Product Name: </label>
                <input
                    type="text"
                    name="product_name"
                    onChange={handleChange}
                    value={product.product_name}
                />
            </FormSection>

            <FormSection>
                <label>Price: </label>
                <input
                    type="text"
                    name="price"
                    onChange={handleChange}
                    value={product.price}
                    size="5"
                />
                <label>Currency: </label>
                <select
                    type="text"
                    name="currency"
                    onChange={handleChange}
                    value={product.currency}
                >
                    <option value="$USD">$ USD</option>
                    <option value="€EUR">€ EUR</option>
                    <option value="¥YEN">¥ JPY</option>
                </select>
            </FormSection>

            <FormSection>
                <label>Category: </label>
                <select
                    name="category"
                    onChange={handleChange}
                    value={product.category}>
                    <option value="">-- Please Select --</option> // method so user HAS to pick a choice
                    <option value="books">Books</option>
                    <option value="video_games">Video Games</option>
                    <option value="music">Music</option>
                </select>
            </FormSection>

            <FormSection>
                <label>Package Size: </label>
                <input type="radio" name="package_size" onChange={handleChange} value="small" checked={product.package_size === 'small'} /> S
                <input type="radio" name="package_size" onChange={handleChange} value="medium" checked={product.package_size === 'medium'} /> M
                <input type="radio" name="package_size" onChange={handleChange} value="large" checked={product.package_size === 'large'} /> L
            </FormSection>

            <FormSection>
                <label>Support contact: </label>
                <input
                    type="text" // type="email" useful for browser-implemented validation of email-adresses!
                    name="email"
                    onChange={handleChange}
                    value={product.email}
                    size="18" />

            </FormSection>

            <div>
                <Tags
                    createTag={addTag}
                    onDeleteTag={deleteTag}
                    onBackspaceDelete={removeLastTag}
                    onArrowLeftHighlight={highlightTag}
                    tags={product.product_tags} />
            </div>

            <FormSection>
                <input
                    type="checkbox"
                    name="on_sale"
                    onChange={handleChange}
                    value={1} // MUSS angegeben werden zur serverseitigen Zuordnung
                    checked={product.on_sale}
                    className="bigCheckbox" />
                <label>On Sale</label>
            </FormSection>

            <ButtonContainer>
                <Button className="addButton" text="Add" />
                <Button className="cancelButton" type="reset" text="Cancel" />
            </ButtonContainer>
        </MainForm>
    )
}

Form.propTypes = {
    product_name: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
    email: PropTypes.string,
    product_tags: PropTypes.arrayOf(PropTypes.string),
    on_sale: PropTypes.bool,

}

const Error = styled.div`
color: red;
border: 2px solid red;
`

const MainForm = styled.form`
background: linear-gradient(rgba(85, 204, 212, 1), rgba(199, 218, 199, 1), rgba(250, 182, 141, 1), rgba(247, 141, 124, 1), rgba(246, 103, 134, 1));
border-radius: 5px;
display: flex;
flex-direction: column;
margin: .5rem;
padding: .5rem;
width: 100%;
`

const FormSection = styled.section`
display: inline;
margin: .6rem .3rem;
width: 98%;

input {
    border-radius: 5px;
    font-size: .9rem;
    border-style: none;
    border: 1px solid grey;
}

input + label {
    margin-left: .3rem;
}

select {
    border-style: 1px solid grey;
    font-size: 0.9rem;
    margin-left: .3rem;
}

input[type="radio"] {
    transform: scale(1.3);
}


input[type="checkbox"] {
    transform: scale(1.4);
}
`

const ButtonContainer = styled.div`
display: flex;
justify-content: space-evenly;
margin: 1.5rem 0;

.addButton {
    background: white;
    border: 2px solid white;  

    &:hover {
        background: #55CCD4;
        color: white;        
    }
}

.cancelButton {
    background: white;
    border: 2px solid white;

    &:hover {
    background: #F66987;
    color: white;
    }
}
`
