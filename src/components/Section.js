import React from "react"
import styled from "styled-components"
import CtaSection from "./CtaSection"
import AboutSection from "./AboutSection"
import ContactHero from "./ContactHero"
const Section = () => {
  return (
    <Main>
      <CtaSection />
      <AboutSection />
      <ContactHero />
    </Main>
  )
}

const Main = styled.main`
  position: relative;

  height: 100%;
  width: 85vw;
  background: var(--white-text);
  margin: 50px auto 0;
  @media screen and (min-width: 785px) {
    width: 88vw;
  }
`
const Ctasection = styled.section``

const Aboutsection = styled.section``

const ContactSection = styled.article``
export default Section
