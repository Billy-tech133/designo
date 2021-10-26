import React from "react"
import { Link } from "gatsby"
import herobg from "../assets/home/desktop/bg-pattern-hero-home.svg"
const ContactHero = () => {
  return (
    <Contact>
      <ContactInner>
        <div>
          <ContactTitle>Let’s talk about your project</ContactTitle>
          <ContactText>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </ContactText>
        </div>
        <ContactButton>get in touch</ContactButton>
      </ContactInner>
    </Contact>
  )
}
const Contact = styled.section`
  background-image: url(${herobg});
  background-color: var(--hero-bg);
  position: absolute;
  left: 50%;
  width: 88vw;
  margin-left: -44vw;
  height: 100%;
`
const ContactInner = styled.div`
  margin: 40px 80px;
  color: var(--white-text);
`
const ContactTitle = styled.h3``
const ContactText = styled.p``
const ContactButton = styled(Link)``
export default ContactHero
