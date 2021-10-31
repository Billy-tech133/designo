import React from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { MdClear } from "react-icons/md"
import logo from "../assets/shared/desktop/logo-dark.png"
import { Link } from "gatsby"
import AppContext from "../context/AppContext"

const Navbar = () => {
  return (
    <AppContext.Consumer>
      {({ closeModal, toggleModal }) => (
        <>
          <NavContainer>
            <InnerContainer>
              <Logo src={logo} alt="logo" />
              <Hamburger onClick={toggleModal}>
                {closeModal ? <HamButton /> : <CloseButton />}
              </Hamburger>
              <NavLinks>
                <Links>
                  <AnchorLink to="/"> Our Company</AnchorLink>
                  <AnchorLink to="/"> Locations</AnchorLink>
                  <AnchorLink to="/contact"> Contact</AnchorLink>
                </Links>
              </NavLinks>
            </InnerContainer>
          </NavContainer>
          {closeModal ? null : (
            <ModalContainer>
              <ModalLinks>
                <ModalLink to="/"> Our Company</ModalLink>
                <ModalLink to="/"> Locations</ModalLink>
                <ModalLink to="/"> Contact</ModalLink>
              </ModalLinks>
              <ModalShadow></ModalShadow>
            </ModalContainer>
          )}
        </>
      )}
    </AppContext.Consumer>
  )
}

//==== CSS ====

// Navbar
const NavContainer = styled.nav`
  height: 100%;
  width: 99vw;
  transition: all 0.3s linear;

  @media screen and (min-width: 785px) {
    max-width: 85vw;
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
  color: var(--black-text);

  @media screen and (min-width: 785px) {
    display: none;
  }
`
const HamButton = styled(FaBars)`
  font-size: 35px;
`
const CloseButton = styled(MdClear)`
  font-size: 35px;
`
const NavLinks = styled.div`
  display: none;

  @media screen and (min-width: 785px) {
    display: flex;
  }
`
const Links = styled.ul`
  list-style: none;
`

const AnchorLink = styled(Link)`
  margin-left: 30px;
  transition: all 1s ease-out;
  text-decoration: none;
  color: var(--black-text);
  :hover {
    cursor: pointer;
    text-decoration: underline;
    /* border-bottom: 1px solid var(--black-text); */
  }
`

// Nav Modal
const ModalContainer = styled.div`
  position: absolute;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  color: var(--white-text);

  @media screen and (min-width: 785px) {
    opacity: 0;
  }
`
const ModalLinks = styled.ul`
  background-color: var(--black-bg) !important;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 30px 15px;
  margin: 0;
  min-height: 250px;
`
const ModalLink = styled(Link)`
  margin-top: 12px;
  letter-spacing: 2.3;
  font-weight: 300;
  font-size: 24px;
  color: var(--white-text);
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s linear;

  :hover {
    cursor: pointer;
    border-bottom: 1px solid var(--black-text);
  }
`

const ModalShadow = styled.div`
  height: 100vh;
  background: var(--black-bg);
  opacity: 0.8;
`
export default Navbar
