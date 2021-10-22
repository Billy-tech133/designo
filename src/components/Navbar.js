import React from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { MdClear } from "react-icons/md"
import logo from "../assets/shared/desktop/logo-dark.png"
import { Link } from "gatsby"
import AppContext from "../context/AppContext"

//==== CSS ====

// Navbar
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
  color: var(--black-text);

  @media screen and (min-width: 760px) {
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

  @media screen and (min-width: 760px) {
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
    border-bottom: 1px solid var(--black-text);
  }
`

// Nav Modal
const ModalContainer = styled.div`
  height: auto;
  width: 100vw;
  background: var(--white-text);
  color: var(--white-text);
  transition: all 0.6s ease;
  @media screen and (min-width: 760px) {
    visibility: hidden;
  }
`
const ModalLinks = styled.ul`
  background: var(--black-bg);
  padding: 30px 15px;
  margin: 0;
`
const ModalLink = styled.div`
  margin-top: 12px;
  letter-spacing: 2px;
  font-weight: 10;
  font-size: 24px;
`

const ModalShadow = styled.div`
  height: 80vh;
  background: var(--black-bg);
  opacity: 0.5;
`

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
                  <AnchorLink to="/"> Contact</AnchorLink>
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

export default Navbar
