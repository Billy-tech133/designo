import React from "react"
import Navbar from "./Navbar"
import GlobalStyle from "../globalStyles"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <GlobalStyle />
      {children}
      {/* </Footer> */}
    </>
  )
}

export default Layout
