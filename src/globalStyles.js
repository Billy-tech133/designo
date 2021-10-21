import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* ::before, ::after {
    box-sizing: inherit;
    overscroll-behavior: none;
}
.html {
   width: 100vw;
}
    body {
        margin: 0;
        padding: 0;
        overscroll-behavior: none;
        font-family: 'Jost', sans-serif;
    }

    :root {
        /* ==== text ==== */
        --white-tex: #fff;
        --black-text: #333136;
        
    }
`

export default GlobalStyle
