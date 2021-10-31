import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import contactBg from "../assets/contact/mobile/bg-pattern-hero-contact-mobile.svg"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"

const Contact = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <ContactWrapper>
        <HeroWrapper>
          <HeroInner>
            <HeroText>
              <HeroTitle>contact us</HeroTitle>
              <HeroDesc>
                Ready to take it to the next level? Let’s talk about your
                project or idea and find out how we can help your business grow.
                If you are looking for unique digital experiences that’s
                relatable to your users, drop us a line.
              </HeroDesc>
            </HeroText>
            <HeroForm>
              <FormName
                type="text"
                name="name"
                placeholder="Name"
                className="contact-input"
              />
              <FormEmail
                type="email"
                name="email"
                placeholder="Email Address"
                className="contact-input"
              />
              <FormTel
                type="tel"
                name="tel"
                placeholder="Phone"
                className="contact-input"
              />
              <FormMessage
                name="message"
                placeholder="Your Message"
                rows="8"
                className="contact-input"
              />
              <FormButton className="btn" type="button" value="submit" />
            </HeroForm>
          </HeroInner>
        </HeroWrapper>
        <Section>
          <SectionInner>
            {data.allStrapiContact.nodes.map(item => {
              const { BackgroundImage, image, name, btnText, id } = item
              const bgImg = BackgroundImage.localFile.childImageSharp.fluid
              const Image = getImage(image.localFile)
              return (
                <CountryCard key={id}>
                  <SingleCard Tag="div" fluid={bgImg} preserveStackContext>
                    <GatsbyImage
                      image={Image}
                      placeholder="blurred"
                      layout="fixed"
                      alt={name}
                    />
                  </SingleCard>
                  <CountryName>{name}</CountryName>
                  <CountryButton className="btn">{btnText}</CountryButton>
                </CountryCard>
              )
            })}
          </SectionInner>
        </Section>
      </ContactWrapper>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiContact {
      nodes {
        BackgroundImage {
          localFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 202) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FIXED, quality: 100)
            }
          }
        }
        name
        btnText
        id
      }
    }
  }
`
const ContactWrapper = styled.main`
  width: 100vw;
  overflow-x: hidden;
`
const HeroWrapper = styled.section`
  height: 100%;
  width: 94vw;
  background-color: var(--hero-bg);
  background-image: url(${contactBg});
  background-size: contain;
  padding: 30px 15px;
  margin: auto;
  @media screen and (min-width: 785px) {
    width: 88vw;
    border-radius: 15px;
  }
`
const HeroInner = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  text-align: center;
  color: var(--white-text);
  @media screen and (min-width: 785px) {
    text-align: left;
    width: 90%;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`
const HeroText = styled.article`
  width: 90%;
`
const HeroTitle = styled.h3`
  text-transform: capitalize;
  font-size: 30px;
  letter-spacing: 2px;
`
const HeroDesc = styled.p`
  font-size: 20px;
`
const HeroForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 90%;
  height: 100%;
  @media screen and (min-width: 785px) {
    justify-self: start;
    margin-left: 40px;
  }
`
const FormName = styled.input``
const FormEmail = styled.input``
const FormTel = styled.input``
const FormMessage = styled.textarea``
const FormButton = styled.input`
  margin: 20px auto 0;
  width: 140px;
  @media screen and (min-width: 785px) {
    justify-self: flex-end;
  }
`
const Section = styled.section`
  height: 100%;
  width: 100vw;
  padding: 60px 0;
`
const SectionInner = styled.div`
  height: 100%;
  width: 90vw;
  margin: auto;
  @media screen and (min-width: 650px) {
    max-width: 88vw;
  }
  @media screen and (min-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`
const CountryCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  color: var(--black-text);
  height: 100%;
  margin-top: 30px;
`

const SingleCard = styled(BackgroundImage)`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  @media screen and (min-width: 650px) {
    min-width: 200px;
    min-height: 200px;
    margin-right: 24px;
    background-size: cover;
  }
`

const CountryName = styled.h3`
  text-transform: uppercase;
  letter-spacing: 2.5px;
`

const CountryButton = styled(Link)`
  background: var(--hero-bg);
  color: var(--white-text);
`

export default Contact
