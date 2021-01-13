import React, { Suspense, lazy } from "react"
import { Switch, Route } from "react-router-dom"
import { Helmet } from "react-helmet"
import Lot from "./components/lottie/index"

// import {Router,Route,browserHistory} from 'react-router'


const mainContainer = lazy(() => import("views/containers/mainContainer"))
const loginContainer = lazy(() => import("views/containers/loginContainer"))
const reportContainer = lazy(() => import("views/containers/reportContainer"))
const ErrorPage = lazy(() => import("views/containers/errorContainer"))
const BackendPage = lazy(() => import("views/containers/backendContainer"))
const covid = lazy(() => import("views/containers/covidContainer"))
const dashboard = lazy(() => import("views/containers/dashboardContainer"))
const registerContainer = lazy(() => import("views/containers/RegisterContainer"))

const Router = () => (
  <>
    <Helmet>
      <title>Data Consent</title>
    </Helmet>
    <Suspense
      fallback={
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Lot height={350} width={350} animationData="loadingpage" />
        </div>
      }
    >
      <Switch>
        <Route exact path="/login" component={loginContainer} />
        <Route exact path="/register" component={registerContainer} />
        <Route exact path="/home" component={mainContainer} />
        <Route exact path="/report" component={reportContainer} />
        <Route exact path="/backend" component={BackendPage} />
        <Route exact path="/covid" component={covid} />
        <Route exact path="/dashboard" component={dashboard} />
        <Route component={ErrorPage} />
      </Switch>
     
    </Suspense>
  </>
)

export default Router
