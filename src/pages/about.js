import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import heroBg from "../assets/about/desktop/bg-pattern-hero-about-desktop.svg"
import Locations from "../components/Locations"
import ContactHero from "../components/ContactHero"
const about = ({ data }) => {
  // const { aboutDescription, AboutTitle } = data.allStrapiAboutUs.nodes

  return (
    <Layout>
      <AboutWrapper>
        <SectionOne>
          {data.allStrapiFirstAbout.nodes.map(item => {
            const {
              description,
              title,
              id,
              image: {
                localFile: {
                  childImageSharp: { fluid },
                },
              },
            } = item

            return (
              <ArticleOne key={id}>
                <Image fluid={fluid} Tag="div" preserveStackContext>
                  <Card></Card>
                </Image>
                <ArticleOneText>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </ArticleOneText>
              </ArticleOne>
            )
          })}
        </SectionOne>
        <Locations />
        {data.allStrapiAboutUs.nodes.map(node => {
          const { aboutDescription, aboutTitle, AboutImage } = node
          return (
            <ArticleTwo>
              <Image
                fluid={AboutImage.localFile.childImageSharp.fluid}
                Tag="div"
                preserveStackContext
              >
                <Card></Card>
              </Image>
              <ArticleOneText>
                <h3>{aboutTitle}</h3>
                <p>{aboutDescription}</p>
              </ArticleOneText>
            </ArticleTwo>
          )
        })}
        <ContactHero />
      </AboutWrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiFirstAbout {
      nodes {
        description
        title
        id
        image {
          localFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1440) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    allStrapiAboutUs {
      nodes {
        aboutDescription
        aboutTitle
        id
        AboutImage {
          localFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1440) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
const AboutWrapper = styled.main`
  height: 100%;
  width: 100vw;
`

const Image = styled(BackgroundImage)``
const Card = styled.div`
  height: 500px;
  width: 100%;
`

const SectionOne = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100vw;
  margin: auto;

  @media screen and (min-width: 785px) {
    max-width: 88vw;
    grid-gap: 40px;
    border-radius: 15px;
  }
`

const ArticleOne = styled.article`
  color: var(--white-text);
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 785px) {
    border-radius: 15px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
  }
  :not(:first-child) {
    height: 100%;
    background-color: var(--card-bg);
    background-image: url(${heroBg});
    background-size: contain;
    color: var(--black-bg);
    h3 {
      color: var(--hero-bg);
    }
  }
  :first-child {
    height: 100%;
    background-color: var(--hero-bg);
    background-image: url(${heroBg});
    background-repeat: no-repeat;
  }
`

const ArticleOneText = styled.div`
  text-align: center;
  max-width: 70%;
  margin: 60px auto;
  height: 100%;
`

const SectionTwo = styled.section`
  height: 100%;
  width: 100vw;
`

const ArticleTwo = styled.article`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(1, 1fr);
  background-color: var(--card-bg);
  background-image: url(${heroBg});
  background-size: contain;
  color: var(--black-bg);
  margin: auto;
  h3 {
    color: var(--hero-bg);
  }
  @media screen and (min-width: 785px) {
    border-radius: 15px;
    max-width: 88vw;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default about
