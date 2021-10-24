import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
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
          <HeroBtn className="btn">Learn more</HeroBtn>
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
  height: 843px;
  background-size: cover;
`

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
  color: var(--white-text);
  width: 100vw;
  height: 100%;
`

// Hero Text
const HeroText = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 200;
`
const HeroTitle = styled.h3``
const HeroWriting = styled.p``
const HeroBtn = styled.button``

// Hero Image
const HeroImage = styled.div``
export default Hero
