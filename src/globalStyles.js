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
        --footer-bg: #1D1C1E;
    }
    .hero-image {
        margin-top: 250px;
        z-index: 1;
    }
    .CtaSection__Singlecard-kgMgAi {
        border-radius: 15px;
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
        background: var(--white-text);
        :hover {
          background: var(--btn-hoverbg);
          color: var(--white-text);

    }
 
}
   .card-bg {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: var(--white-text);
      background-color: black;
      height: 100%;
      width: 100%;
      opacity: 0.7;
      cursor: pointer;
      transition: all 0.3s ease;
      :hover {
          background-color: var(--hero-bg);
      }
}
.footer-logo{
 margin: auto;
}
  @media screen and (min-width: 785px) {
      .footer-logo {
          margin: 0;
      }
  }
    
.social-icon {
    font-size: 30px;
    margin-left: 15px;
    background: none;
    color: var(--hero-bg);
    text-decoration: none;
    list-style: none;
    :hover {
        cursor: pointer;
        color: var(--btn-hoverbg);

    }
}

`

export default GlobalStyle
