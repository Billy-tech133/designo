import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"

const Locations = () => {
  const data = useStaticQuery(graphql`
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
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: FIXED
                  quality: 100
                )
              }
            }
          }
          name
          btnText
          id
        }
      }
    }
  `)
  return (
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
  )
}
const Section = styled.section`
  height: 100%;
  width: 100vw;
  padding: 60px 0;
`
const SectionInner = styled.div`
  height: 100%;
  width: 100vw;
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
  width: 100%;
  margin-top: 30px;
`

const SingleCard = styled(BackgroundImage)`
  height: 190px;
  width: 190px;
  border-radius: 50%;
  @media screen and (min-width: 650px) {
    min-width: 190px;
    min-height: 190px;
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
export default Locations
