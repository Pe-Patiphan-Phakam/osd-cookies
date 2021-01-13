import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import Rounter from "./Rounter"
import "assets/scss/material-kit-react.scss?v=1.9.0"
import { Helmet } from "react-helmet"
// pages for this product

ReactDOM.render(
  <BrowserRouter>
    <Helmet bodyAttributes={{ style: "background-color : #fff" }} />
    <Rounter />
  </BrowserRouter>,
  document.getElementById("root")
)
