import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import herobg from "../assets/home/desktop/bg-pattern-hero-home.svg"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>
          <HeroTitle>
            Award-winning custom designs and digital branding solutions
          </HeroTitle>
          <HeroWriting>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </HeroWriting>
          <HeroBtn to="/about" className="btn">
            Learn more
          </HeroBtn>
        </HeroText>

        <StaticImage
          src="../assets/home/desktop/image-hero-phone.png"
          alt="phone"
          placeholder="blurred"
          layout="constrained"
          width={600}
          height={1000}
          className="hero-image"
        />
      </HeroContent>
    </HeroContainer>
  )
}

// Hero Section
const HeroContainer = styled.section`
  background-color: var(--hero-bg);
  background-image: url(${herobg});
  width: 100vw;
  height: 900px;
  background-size: cover;
  background-position: top 30% left;
  background-repeat: no-repeat;
  overflow: hidden;
  @media screen and (min-width: 785px) {
    max-width: 88vw;
    margin: auto;
    border-radius: 15px;
    background-position: center left 80px;
  }
  @media screen and (min-width: 1440px) {
    height: 700px;
    background-position: right 35%;
  }
`

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
  color: var(--white-text);
  height: 100%;
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`

// Hero Text
const HeroText = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 200;
  margin: 0 60px 60px 60px;
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`
const HeroTitle = styled.h3`
  @media screen and (min-width: 760px) {
    font-size: 42px;
    letter-spacing: 4px;
    line-height: 1.2;
  }
`
const HeroWriting = styled.p``
const HeroBtn = styled(Link)`
  text-decoration: none;
`

// Hero Image
const HeroImage = styled.div``
export default Hero
