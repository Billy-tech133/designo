import "@fontsource/jost" // Defaults to weight 400 with all styles included.
import React from "react"
import { AppProvider } from "./src/context/AppContext"

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
)

// ES5 way
// exports.onClientEntry = () => {
// ES6 way
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}
