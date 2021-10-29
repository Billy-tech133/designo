import React from "react"
import { Link } from "gatsby"
import herobg from "../assets/home/desktop/bg-pattern-hero-home.svg"
import styled from "styled-components"
const ContactHero = () => {
  return (
    <ContactWrapper>
      <Contact>
        <ContactInner>
          <ContactTextTitle>
            <ContactTitle>Let’s talk about your project</ContactTitle>
            <ContactText>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </ContactText>
          </ContactTextTitle>
          <ContactButton className="btn">get in touch</ContactButton>
        </ContactInner>
      </Contact>
    </ContactWrapper>
  )
}
const ContactWrapper = styled.section`
  position: relative;
  height: 200px;
  width: 88vw;
  margin: 50px auto 50px;
`
const ContactTextTitle = styled.div`
  @media screen and (min-width: 785px) {
    text-align: left;
    max-width: 50%;
  }
`
const Contact = styled.div`
  position: absolute;
  left: 50%;
  width: 88vw;
  margin-left: -44vw;
  border-radius: 15px;
  background-image: url(${herobg});
  background-color: var(--hero-bg);
  z-index: 9;
  @media screen and (min-width: 785px) {
    margin-top: 50px;
  }
`
const ContactInner = styled.div`
  display: grid;
  padding: 40px 80px;
  color: var(--white-text);
  text-align: center;
  place-items: center;
  @media screen and (min-width: 785px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 80%;
    margin: auto;
  }
`
const ContactTitle = styled.h3`
  font-size: 28px;
`
const ContactText = styled.p``
const ContactButton = styled(Link)``
export default ContactHero
