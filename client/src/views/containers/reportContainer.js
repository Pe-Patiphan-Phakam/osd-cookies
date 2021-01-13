import React, { lazy } from "react"
// nodejs library that concatenates classes
// import classNames from "classnames"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
import { Redirect } from "react-router-dom";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js"
import HeaderLinks from "components/Header/HeaderLinks.js"
import HeaderLeft from "components/Header/HeaderLeft.js"
import Container from "@material-ui/core/Container"
import Parallax from "components/Parallax/Parallax.js"
// import styles from "assets/jss/material-kit-react/views/landingPage.js"

// Sections for this page
const TableCustom = lazy(() => import("components/table/tableCustom"))
const dashboardRoutes = []

// const useStyles = makeStyles(styles)

export default function ReportContainer(props) {
  // const classes = useStyles()
  const { ...rest } = props
  const tokenId = localStorage.getItem("tokenId")
  if(tokenId){
    return (
      <div>
        <Header
          color="transparent"
          // drawerShow={drawerShow}
          routes={dashboardRoutes}
          brand="Data Consent"
          leftLinks={<HeaderLeft />}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        
        <Parallax image={require("assets/img/bg004.jfif")}>
          <Container maxWidth="lg" className="mt-50">
            <TableCustom />
          </Container>
        </Parallax>
        {/* <Footer /> */}
      </div>
    )
  }else{
    return <Redirect to={'/login'} />
  }
}
