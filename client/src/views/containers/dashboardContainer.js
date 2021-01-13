import React from "react"

// nodejs library that concatenates classes
import { makeStyles } from "@material-ui/core/styles"
import { Redirect } from "react-router-dom";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js"
// import GridContainer from "components/Grid/GridContainer.js"
// import GridItem from "components/Grid/GridItem.js"
import HeaderLinks from "components/Header/HeaderLinks.js"
import HeaderLeft from "components/Header/HeaderLeft.js"
import Parallax from "components/Parallax/Parallax.js"
import Dashboard from "components/dashborad/cookies"


import styles from "assets/jss/material-kit-react/views/landingPage.js"
// import Lot from "../../components/lottie/index"

const dashboardRoutes = []

const useStyles = makeStyles(styles)

export default function MainContainer(props) {
  const classes = useStyles()
  const { ...rest } = props
  const tokenId = localStorage.getItem("tokenId")
  if(tokenId){
    return (
      <div>
        <Header
          color="transparent"
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
        <Parallax filter image={require("assets/img/bg004.jfif")}>   
        <div className={classes.container}>
          <Dashboard />
        </div>
        </Parallax>
      </div>
    )
  }else{
    return <Redirect to={'/login'} />
  }
  
}
