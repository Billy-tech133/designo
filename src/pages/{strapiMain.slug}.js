import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import portHero from "../assets/app-design/desktop/bg-pattern-intro-app.svg"
import ContactHero from "../components/ContactHero"
import Portcards from "../components/Portcards"
import { graphql } from "gatsby"

const portfolioTemplate = ({ data }) => {
  const {
    hero: { desc, title },
    cards,
  } = data.strapiMain.content

  return (
    <PortfolioWrap>
      <Layout>
        <Hero>
          <Heroinner>
            <HeroTitle>{title}</HeroTitle>
            <HeroText>{desc}</HeroText>
          </Heroinner>
        </Hero>
        <Body>
          <Cards>
            {cards.map((card, index) => {
              const { image, imageDesc, imageTitle } = card
              return (
                <Card key={index}>
                  <CardImg src={image} alt={imageTitle}>
                    {/* <GatsbyImage
                      image={image}
                      placeholder="blurred"
                      layout="fixed"
                      // height={}
                      // width={}
                      alt={imageTitle}
                    /> */}
                  </CardImg>
                  <CardDesc>
                    <CardTitle>{imageTitle}</CardTitle>
                    <CardText>{imageDesc}</CardText>
                  </CardDesc>
                </Card>
              )
            })}
          </Cards>
          <Portcards nodes={data.allStrapiMain.nodes} />
        </Body>
        <ContactHero />
      </Layout>
    </PortfolioWrap>
  )
}
export const query = graphql`
  query getPortfolioCardAndGetPortfolioPage($slug: String) {
    strapiMain(slug: { eq: $slug }) {
      content {
        hero {
          desc
          title
        }
        cards {
          imageDesc
          imageTitle
          image
        }
      }
    }
    allStrapiMain(filter: { slug: { ne: $slug } }) {
      nodes {
        id
        cta
        slug
        title
        webdesign {
          localFile {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
const PortfolioWrap = styled.main`
  overflow: hidden;
  width: 100vw;
`

const Hero = styled.article`
  background-color: var(--hero-bg);
  background-image: url(${portHero});
  width: 100vw;
  height: 100%;
  background-size: cover;
  background-position: top 30% left;
  background-repeat: no-repeat;
  padding: 60px 20px;
  @media screen and (min-width: 785px) {
    max-width: 88vw;
    margin: auto;
    border-radius: 15px;
    background-position: center left 80px;
    background-repeat: repeat;
  }
  @media screen and (min-width: 1440px) {
    height: 100%;
    background-position: right 35%;
  }
`

const Heroinner = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 200;
  margin: 0 60px 60px 60px;
  color: var(--white-text);
`

const HeroText = styled.p``

const HeroTitle = styled.h3`
  @media screen and (min-width: 760px) {
    font-size: 42px;
    letter-spacing: 4px;
    line-height: 1.2;
  }
`

const Body = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100%;
  padding: 20px 10px;
  margin: auto;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  grid-gap: 20px;
  place-items: center;
  width: 88vw;
  margin: auto;
  /* max-width: 70%; */
  @media screen and (min-width: 940px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
`

const Card = styled.article`
  width: 80vw;
  max-width: 400px;
  height: 478px;
  background-color: var(--card-bg);
  border-radius: 15px;
`

const CardImg = styled.img`
  object-fit: cover;
  width: 80vw;
  height: 70%;
  max-width: 400px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`

const CardTitle = styled.h3`
  color: var(--btn-hoverbg);
`

const CardText = styled.p`
  color: var(--black-text);
`

const CardDesc = styled.div`
  text-align: center;
`

const PortfolioCard = styled.section`
  padding: 50% auto 50%;
  height: 100%;
  width: 100%;
`

export default portfolioTemplate
