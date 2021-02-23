import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    margin: 0;
    width: 360px;
}

h2 {
    margin: .7rem .5rem;
}
`