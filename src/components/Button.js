import styled from 'styled-components'

export default function Button({ text, onClickFunction, type = "submit", className = "" }) {
    return <MainButton className={className} type={type} onClick={onClickFunction}>{text}</MainButton>
}

const MainButton = styled.button`
border: none;
border-radius: 4px;
font-size: 1rem;
font-weight: bold;
margin: 0 1rem;
padding: .5rem 1.5rem;
`