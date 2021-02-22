import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import saveToLocalStorage from './services/saveToLocalStorage'
import loadLocalStorage from './services/loadLocalStorage'

import Button from './Button'


export default function Form({ onClickFunction }) {
    const [productInfo, setProductInfo] = useState({
        product_name: '',
        price: '',
        currency: '$',
        category: '',
        package_size: '', // camelCase?
        email: '',
        product_tags: [],
        on_sale: false
    })


    const handleChange = ((event) => {
        const field = event.target;
        const value = field.type === 'checkbox' ? field.checked : field.value;

        setProductInfo({
            ...productInfo,
            [field.name]: value
        })
    })



    /* useEffect(() => {
        saveToLocalStorage('productInformation', productInfo)
    }, [productInfo]) */



    const onClickAddCard = ((event) => {
        event.preventDefault();

        const field = event.target;
        const value = field.type === 'checkbox' ? field.checked : field.value;

        const newItem = {
            ...productInfo,
            [field.name]: value
        }

        console.log(newItem)

        saveToLocalStorage('productInformation', newItem)
        setProductInfo(loadLocalStorage('productInformation'), newItem)
    })



    return (
        <MainForm>
            <h2>New Product</h2>

            <FormSection>
                <label>Product Name: </label>
                <input
                    type="text"
                    name="product_name"
                    onChange={handleChange}
                    value={productInfo.product_name}
                />
            </FormSection>

            <FormSection>
                <label>Price: </label>
                <input
                    type="text"
                    name="price"
                    onChange={handleChange}
                    value={productInfo.price}
                />
                <label>Currency: </label>
                <input
                    type="text"
                    name="currency"
                    onChange={handleChange}
                    value={productInfo.currency}
                />
            </FormSection>

            <FormSection>
                <label>Category: </label>
                <select
                    name="category"
                    onChange={handleChange}
                    value={productInfo.category}>
                    <option value="books">Books</option>
                    <option value="video_games">Video Games</option>
                    <option value="music">Music</option>
                </select>
            </FormSection>

            <FormSection>
                <label>Package Size: </label>
                <input type="radio" name="package_size" onChange={handleChange} value="small" checked={productInfo.package_size === 'small'} /> S
                <input type="radio" name="package_size" onChange={handleChange} value="medium" checked={productInfo.package_size === 'medium'} /> M
                <input type="radio" name="package_size" onChange={handleChange} value="large" checked={productInfo.package_size === 'large'} /> L
            </FormSection>

            <FormSection>
                <label>Support contact (email): </label>
                <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={productInfo.email} />
            </FormSection>

            <FormSection>
                <label>Product Tags: </label>
                <input
                    type="text"
                    name="product_tags" />
            </FormSection>

            <FormSection>
                <input
                    type="checkbox"
                    name="on_sale"
                    onChange={handleChange}
                    value={1} // MUSS angegeben werden zur serverseitigen Zuordnung
                    checked={productInfo.on_sale}
                    className="bigCheckbox" />
                <label>On Sale</label>
            </FormSection>

            <FormSection>
                <Button className="addButton" text="Add" onClickFunction={onClickAddCard} />
                <Button className="cancelButton" text="Cancel" />
            </FormSection>
        </MainForm>
    )
}

Form.propTypes = {
    onClickFunction: PropTypes.func,
}

const MainForm = styled.form`
background: linear-gradient(rgba(85, 204, 212, 1), rgba(199, 218, 199, 1), rgba(250, 182, 141, 1), rgba(247, 141, 124, 1), rgba(246, 103, 134, 1));
border-radius: 5px;
display: flex;
flex-direction: column;
margin: 2rem;
padding: 1rem;
`

const FormSection = styled.section`
display: flex;
margin: 0.6rem 1rem;

input {
    border-radius: 5px;
    font-size: .9rem
}

label + input {
    margin-left: .7rem;
}

input + label {
    margin-left: .7rem;
}

input + input {
    margin-left: 1rem;
}

select {
    font-size: .9rem;
    margin-left: 1rem;
}


input[type="radio"] {
    margin-left: 1rem;
    transform: scale(1.3)
}

input[type="checkbox"] {
    transform: scale(1.4);
}

.addButton {
    background: white;
    border: 2px solid #55CCD4;  

    &:hover {
        background: #55CCD4;
        color: white;        
    }
}

.cancelButton {
    background: white;
    border: 2px solid #F66987;

    &:hover {
    background: #F66987;
    color: white;
    }
}


`

