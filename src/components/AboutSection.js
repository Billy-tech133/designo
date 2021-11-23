import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiAbout {
        nodes {
          id
          description
          title
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: FIXED
                  transformOptions: { cropFocus: CENTER, fit: CONTAIN }
                  webpOptions: { quality: 100 }
                )
              }
            }
          }
          bgImage {
            localFile {
              childImageSharp {
                fluid(quality: 100, maxWidth: 202) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <About>
      {data.allStrapiAbout.nodes.map(item => {
        const {
          description,
          title,
          id,
          bgImage,
          image: { localFile },
        } = item
        const Image = getImage(localFile)
        const bgImg = bgImage.localFile.childImageSharp.fluid
        // const bgimage = convertToBgImage(bgImg)
        return (
          <AboutCard key={id}>
            <AboutBg Tag="div" fluid={bgImg} preserveStackContext>
              <GatsbyImage
                image={Image}
                placeholder="blurred"
                layout="fixed"
                alt={title}
              />
            </AboutBg>
            <div>
              <AboutTitle>{title}</AboutTitle>
              <AboutText>{description}</AboutText>
            </div>
          </AboutCard>
        )
      })}
    </About>
  )
}
const AboutBg = styled(BackgroundImage)`
  height: 200px;
  width: 200px;
  overflow: hidden;
  border-radius: 50%;
  @media screen and (min-width: 650px) {
    min-width: 200px;
    min-height: 200px;
    margin-right: 24px;
    background-size: cover;
  }
`

const About = styled.div`
  height: 100%;
  width: 90vw;
  margin-top: 50px;
  @media screen and (min-width: 650px) {
    max-width: 88vw;
  }
  @media screen and (min-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  color: var(--black-text);
  height: 100%;
  @media screen and (min-width: 650px) {
    flex-direction: row;
    justify-content: space-around;
    text-align: left;
    margin-top: 50px;
  }
  @media screen and (min-width: 960px) {
    flex-direction: column;
    text-align: center;
    width: 36%;
  }
`

const AboutTitle = styled.h3`
  text-transform: uppercase;
  letter-spacing: 2.5px;
`

const AboutText = styled.p``

export default AboutSection
