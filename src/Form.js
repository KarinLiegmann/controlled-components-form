import styled from 'styled-components'
import { useState } from 'react'

export default function Form() {
    return (
        <Form>
            <h1>New Product</h1>
            <section>
                <label>Product Name</label>
                <input
                    type="text"
                    name="product_name"
                />
            </section>

        </Form>
    )
}