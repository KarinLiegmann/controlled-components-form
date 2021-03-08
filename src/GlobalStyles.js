import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    margin: 0;
}

h2 {
    margin: .7rem .5rem;
}
`
