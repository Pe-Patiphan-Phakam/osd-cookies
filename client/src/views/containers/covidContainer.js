import React from "react"


// nodejs library that concatenates classes
// import { makeStyles } from "@material-ui/core/styles"
// @material-ui/icons

// core components
import Header from "components/Header/Header.js"
import HeaderLinks from "components/Header/HeaderLinks.js"
import HeaderLeft from "components/Header/HeaderLeft.js"
import Covid from "components/dashborad/covid"
// import styles from "assets/jss/material-kit-react/views/landingPage.js"


const dashboardRoutes = []

// const useStyles = makeStyles(styles)

export default function MainContainer(props) {
  // const classes = useStyles()
  const { ...rest } = props
  return (
    <div>
      <Header
        color="back"
        routes={dashboardRoutes}
        brand="VOICE RECORD"
        leftLinks={<HeaderLeft />}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      {/* <Parallax filter image={require("assets/img/bg004.jfif")}>
        <div className={classes.container}>
          <GridContainer justify="center" alignItems="center">
            <GridItem xs={12} sm={12} md={6}>
              <Lot height={500} width={500} animationData="homepage" />
              <h1 style={{ textAlign: "center" }}>OSD DASHBOARD</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax> */}

          <div>
            <Covid />
          </div>
    </div>
  )
}
