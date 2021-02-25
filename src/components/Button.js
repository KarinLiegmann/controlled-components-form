import styled from 'styled-components'
import PropTypes from 'prop-types'


export default function Button({ text, onClickFunction, type = "submit", className = "" }) {
    return <MainButton className={className} type={type} onClick={onClickFunction}>{text}</MainButton>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    /** onClick-Handler */
    onClickFunction: PropTypes.func,
}



const MainButton = styled.button`
border: none;
border-radius: 4px;
font-size: 1rem;
font-weight: bold;
margin: 0 1rem;
padding: .5rem 1.5rem;
`