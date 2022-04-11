import * as React from "react"
import { createGlobalStyle } from "styled-components"
import { c } from "../constants"

const GlobalStyle = createGlobalStyle`
  body {
    background: ${c.colors.background};
    margin: 0;
  }
`

export default GlobalStyle;