import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'


import Button from './Button'


export default function Form({ product_name, price, currency, category, package_size, email, product_tags, on_sale, onClickFunction, onChangeFunction }) {


    return (
        <MainForm>
            <h2>New Product</h2>

            <FormSection>
                <label>Product Name: </label>
                <input
                    type="text"
                    name="product_name"
                    onChange={onChangeFunction}
                    value={product_name}
                />
            </FormSection>

            <FormSection>
                <label>Price: </label>
                <input
                    type="text"
                    name="price"
                    onChange={onChangeFunction}
                    value={price}
                />
                <label>Currency: </label>
                <input
                    type="text"
                    name="currency"
                    onChange={onChangeFunction}
                    value={currency}
                />
            </FormSection>

            <FormSection>
                <label>Category: </label>
                <select
                    name="category"
                    onChange={onChangeFunction}
                    value={category}>
                    <option value="books">Books</option>
                    <option value="video_games">Video Games</option>
                    <option value="music">Music</option>
                </select>
            </FormSection>

            <FormSection>
                <label>Package Size: </label>
                <input type="radio" name="package_size" onChange={onChangeFunction} value="small" checked={package_size === 'small'} /> S
                <input type="radio" name="package_size" onChange={onChangeFunction} value="medium" checked={package_size === 'medium'} /> M
                <input type="radio" name="package_size" onChange={onChangeFunction} value="large" checked={package_size === 'large'} /> L
            </FormSection>

            <FormSection>
                <label>Support contact (email): </label>
                <input
                    type="text"
                    name="email"
                    onChange={onChangeFunction}
                    value={email} />
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
                    onChange={onChangeFunction}
                    value={1} // MUSS angegeben werden zur serverseitigen Zuordnung
                    checked={on_sale}
                    className="bigCheckbox" />
                <label>On Sale</label>
            </FormSection>

            <FormSection>
                <Button className="addButton" text="Add" onClickFunction={onClickFunction} />
                <Button className="cancelButton" type="reset" text="Cancel" />
            </FormSection>
        </MainForm>
    )
}

Form.propTypes = {
    product_name: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
    email: PropTypes.string,


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

