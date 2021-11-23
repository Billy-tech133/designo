import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import navLinks from "../contacts/links"
import socailLinks from "../contacts/socialLinks"
import contactList from "../contacts/contact"
import { Link } from "gatsby"
import styled from "styled-components"

const Footer = () => {
  return (
    <Footerwrapper>
      <FooterInner>
        <FooterNav>
          <Link to="/">
            <StaticImage
              src="../assets/shared/desktop/logo-light.png"
              alt="logo"
              placeholder="blurred"
              layout="fixed"
              width={200}
              className="footer-logo"
            />
          </Link>
          <FooterUnderline />
          <LinkFlex>
            {navLinks.map(link => {
              const { id, text, url } = link
              return (
                <FooterLinkWrapper>
                  <FooterLinks key={id} to={url}>
                    {text}
                  </FooterLinks>
                </FooterLinkWrapper>
              )
            })}
          </LinkFlex>
        </FooterNav>
        <FooterDeskUnderline />
        <LastWrapper>
          <FooterContact>
            {contactList.map(contact => {
              const { id, title, text1, text2 } = contact
              return (
                <FooterContactText key={id}>
                  <ContactTitle>{title}</ContactTitle>
                  <ContactText>{text1}</ContactText>
                  <ContactText>{text2}</ContactText>
                </FooterContactText>
              )
            })}
          </FooterContact>
          <FooterSocial>
            {socailLinks.map(social => {
              const { id, icon, url } = social
              return (
                <FooterSocialLink key={id} to={url}>
                  {icon}
                </FooterSocialLink>
              )
            })}
          </FooterSocial>
        </LastWrapper>
      </FooterInner>
    </Footerwrapper>
  )
}
const Footerwrapper = styled.section`
  height: 100%;
  width: 100vw;
  background: var(--footer-bg);
  margin: auto;
  @media screen and (min-width: 785px) {
    margin: auto;
  }
`

const LinkFlex = styled.div`
  @media screen and (min-width: 785px) {
    display: flex;
  }
`
const FooterUnderline = styled.div`
  width: 90vw;
  margin: 36px auto 12px;
  background-color: grey;
  height: 1px;
  @media screen and (min-width: 785px) {
    display: none;
  }
`
const FooterDeskUnderline = styled.div`
  width: 90vw;
  margin: 36px auto 12px;
  background-color: grey;
  height: 1px;
  @media screen and (max-width: 785px) {
    display: none;
  }
`
const LastWrapper = styled.div`
  @media screen and (min-width: 785px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const FooterContactText = styled.div`
  margin: 12px;
  @media screen and (min-width: 785px) {
    margin-left: 50px;
  }
`

const FooterLinkWrapper = styled.div`
  height: 100%;
  margin: 24px 0;
`

const ContactTitle = styled.h4`
  margin: 0;
  padding: 0;
`

const ContactText = styled.p`
  margin: 0;
  padding: 0;
`

const FooterLinks = styled(Link)`
  letter-spacing: 2.3;
  font-weight: 300;
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--white-text);
  transition: all 0.3s linear;
  margin-top: 12px;
  :hover {
    text-decoration: underline;
  }
  @media screen and (min-width: 785px) {
    margin-left: 24px;
  }
`

const FooterSocialLink = styled(Link)`
  margin: 0;
  padding: 0;
`

const FooterInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--white-text);
  text-align: center;
  padding: 150px 0 50px;
  @media screen and (min-width: 785px) {
    display: block;
    max-width: 88vw;
    padding: 100px;
  }
`

const FooterNav = styled.div`
  text-align: center;
  @media screen and (min-width: 785px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const FooterContact = styled.div`
  @media screen and (min-width: 785px) {
    display: flex;
    max-width: 80vw;
  }
`

const FooterSocial = styled.div`
  margin-top: 24px;
`

export default Footer
