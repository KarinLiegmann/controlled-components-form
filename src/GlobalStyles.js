import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', sans-serif;
    display: grid;
    grid-template-columns: auto 1fr auto;
    margin: 0;
}
`