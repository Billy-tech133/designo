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
          transition: all 0.6s ease;

    }

    :root {
        /* ==== text ==== */
        --white-text: #fff;
        --black-text: #333136;
        /* ==== background === */
        --black-bg: #1D1C1E;

    }
`

export default GlobalStyle
