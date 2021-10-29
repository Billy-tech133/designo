import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaAngleRight } from "react-icons/fa"

import BackgroundImage from "gatsby-background-image"
const Portcards = ({ nodes = [] }) => {
  console.log(nodes)
  return (
    <CardBox>
      {nodes.map(item => {
        const {
          title,
          id,
          cta,
          slug,
          webdesign: {
            localFile: {
              childImageSharp: { fluid },
            },
          },
        } = item
        return (
          <SingleLink to={`/${slug}`}>
            <Singlecard key={id} fluid={fluid} Tag="div" preserveStackContext>
              <div className="card-bg">
                <CtaHeader>{title}</CtaHeader>
                <CtaLink to={`/${slug}`}>
                  {cta}
                  <CtaArrow />
                </CtaLink>
              </div>
            </Singlecard>
          </SingleLink>
        )
      })}
    </CardBox>
  )
}
const CardBox = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-rows: repeat(2, 267px);
  grid-template-columns: repeat(1, 100%);
  height: 100%;
  width: 88vw;
  margin: 60px auto 0;
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(2, 2fr);
    grid-template-rows: repeat(1, 267px);
  }
`
const SingleLink = styled(Link)`
  text-decoration: none;
`
const Singlecard = styled(BackgroundImage)`
  height: 100%;
  width: 100%;
  overflow: overlay;
  background-color: var(--black-text);
  border-radius: 15px;
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
export default Portcards
