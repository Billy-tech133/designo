import "@fontsource/jost" // Defaults to weight 400 with all styles included.
import React from "react"
import { AppProvider } from "./src/context/AppContext"

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
)
