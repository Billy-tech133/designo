import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { FaAngleRight } from "react-icons/fa"

import BackgroundImage from "gatsby-background-image"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiMain {
        nodes {
          cta
          id
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
  `)

  return (
    <ParentBox>
      {data.allStrapiMain.nodes.map(item => {
        const {
          cta,
          id,
          slug,
          title,
          webdesign: {
            localFile: {
              childImageSharp: { fluid },
            },
          },
        } = item
        return (
          <Singlecard Tag="div" fluid={fluid} preserveStackContext>
            <div className="card-bg">
              <CtaHeader>{title}</CtaHeader>
              <CtaLink to={`/${slug}`}>
                {cta}
                <CtaArrow />
              </CtaLink>
            </div>
          </Singlecard>
        )
      })}
    </ParentBox>
  )
}
const ParentBox = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-rows: repeat(3, 267px);
  grid-template-columns: repeat(1, 100%);
  height: 100%;
  border-radius: 15px;
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(2, 2fr);
    grid-template-rows: repeat(2, 267px);
  }
`

const Singlecard = styled(BackgroundImage)`
  height: 100%;
  width: 100%;
  overflow: overlay;
  border-radius: 15px;
  @media screen and (min-width: 1440px) {
    :first-child {
      grid-row: 1 / 3;
    }
  }
`
const CtaHeader = styled.h3`
  text-transform: uppercase;
  letter-spacing: 2.3px;
  font-size: 30px;
`
const CtaLink = styled(Link)`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--white-text);
`
const CtaArrow = styled(FaAngleRight)`
  color: var(--hero-bg);
  margin-left: 12px;
  letter-spacing: 2px;
`
export default Portfolio
