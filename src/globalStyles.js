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
    /* App Animations  */
    :root {
        /* ==== text ==== */
        --white-text: #fff;
        --black-text: #333136;
        /* ==== background === */
        --black-bg: #1D1C1E;
        --hero-bg: #E7816B;
        --btn-hoverbg: #FFAD9B;
    }
    .hero-image {
        object-fit: cover;
        margin-top: 250px;
    }

    .btn {
        border: none;
        padding: 15px;
        border-radius: 10px;
        color:  var(--black-text);
        font-size: 15px;
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;
    }
    .btn:hover {
      background: var(---btn-hoverbg);
      color: var(--white-text);
}
`

export default GlobalStyle
