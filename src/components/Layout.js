import React from "react"
import Navbar from "./Navbar"
import GlobalStyle from "../globalStyles"
import AppContext from "../context/AppContext"
import Footer from "./Footer"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <GlobalStyle />
      {children}
      <Footer />
    </>
  )
}

export default Layout
