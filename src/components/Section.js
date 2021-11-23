import React from "react"
import styled from "styled-components"
import Portfolio from "./Portfolio"
import AboutSection from "./AboutSection"
import ContactHero from "./ContactHero"
const Section = () => {
  return (
    <Main>
      <Portfolio />
      <AboutSection />
      <ContactHero />
    </Main>
  )
}

const Main = styled.main`
  height: 100%;
  width: 85vw;
  background: var(--white-text);
  margin: 50px auto 0;
  @media screen and (min-width: 785px) {
    width: 88vw;
  }
`

export default Section
