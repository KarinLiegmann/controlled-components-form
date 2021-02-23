import styled from 'styled-components'
import { useState, useEffect } from 'react'

export default function Tags({ createTag, onDeleteTag, onBackspaceDelete, onArrowLeftHighlight, tags }) {
    const [value, setValue] = useState('')



    const handleChange = (event) => setValue(event.target.value)

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            createTag(value)
            setValue('')
        }
    }

    /* const handleArrowLeftDown = (tags) => {
        tags.map((tag, index) => console.log(tag))
    } */





    return (
        <TagWrapper>
            <label>Product Tags: </label>
            <TagDiv onKeyDown={(event) => {
                if (event.key === 'Backspace') {
                    onBackspaceDelete()
                }
                if (event.key === 'ArrowLeft') {
                    const handleArrowLeftDown = onArrowLeftHighlight()
                    /* let currywurste = [...tags.keys()]
                    console.log(currywurste) */

                    let newIndex = (tags.length) - 1
                    console.log(newIndex)
                }
            }}>
                {tags.map((tag, index) =>
                (<span

                    key={index}>
                    {tag}
                    <i onClick={() => onDeleteTag(tag)}>
                        &times;</i>
                </span>)
                )}
                <input
                    type="text"
                    name="product_tags"
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </TagDiv>

        </TagWrapper >
    )
}

const TagWrapper = styled.section`
display: flex;
flex-wrap: none;
margin: .6rem 0;
padding: 0.1rem .2rem;
width: 330px;

    label {
        white-space: nowrap;
    }
`


const TagDiv = styled.div`
    background: white;
    border: 1px solid grey;
    border-radius: 6px;
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    margin-left: .3rem;
    width: 100%;
    z-index: 10;

    input {
        border: none; 
        display: inline;
        margin-left: 5px;       
        }

        input:focus {
        outline: none;     
        }

    span {
        background: linear-gradient(45deg, #65CDD2, #C4DAC6);
        border-radius: 4px;
        margin: .1rem 0;
        margin-left: .3rem;
        padding: .1rem .3rem;
        z-index: 20;
    }

    i {
        color: red;
        font-weight: bold;
        margin-left: .5rem;
    }
`