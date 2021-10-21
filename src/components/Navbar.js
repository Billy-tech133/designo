import React from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import logo from "../assets/shared/desktop/logo-dark.png"

const NavContainer = styled.nav`
  height: 100%;
  width: 99vw;
  @media screen and (min-width: 760px) {
    max-width: 80vw;
    margin: auto;
  }
`
const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px;
`

const Logo = styled.img`
  object-fit: contain;
  width: 200px;
`
const Hamburger = styled.button`
  background: none;
  border: none;
  @media screen and (min-width: 760px) {
    display: none;
  }
`
const HamButton = styled(FaBars)`
  font-size: 35px;
`
const NavLinks = styled.div`
  display: none;

  @media screen and (min-width: 760px) {
    display: flex;
  }
`
const Links = styled.ul``
const Link = styled.a`
  margin-left: 30px;
  transition: all 1s ease-out;
  :hover {
    cursor: pointer;
    border-bottom: 1px solid var(--black-text);
  }
`

const Navbar = () => {
  return (
    <NavContainer>
      <InnerContainer>
        <Logo src={logo} alt="logo" />
        <Hamburger>
          <HamButton />
        </Hamburger>
        <NavLinks>
          <Links>
            <Link> Our Company</Link>
            <Link> Locations</Link>
            <Link> Contact</Link>
          </Links>
        </NavLinks>
      </InnerContainer>
    </NavContainer>
  )
}

export default Navbar
