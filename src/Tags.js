import styled from 'styled-components'
import { useState, useEffect } from 'react'

export default function Tags({ createTag, tags }) {
    const [value, setValue] = useState('')



    const handleChange = (event) => setValue(event.target.value)

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            createTag(value)
            setValue('')
        }
    }


    return (
        <section>
            <label>Product Tags: </label>
            <input
                type="text"
                name="product_tags"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown} />

            <TagList>

                {tags.map((tag, index) =>
                    (<span key={index}>{tag}</span>)
                )}
            </TagList>


        </section>
    )
}

const TagList = styled.section`
display: flex;
flex-wrap: wrap;
margin-top: 1rem;

span {
    background: linear-gradient(45deg, #65CDD2, #C4DAC6);
    border-radius: 4px;
    font-weight: 600;
    margin-left: .5rem;
    padding: .3rem 1rem;
}
`