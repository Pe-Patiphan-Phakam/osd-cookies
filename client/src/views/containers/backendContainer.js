import React from "react"
// import Container from "@material-ui/core/Container"
import Lottile from "../../components/lottie/index"
export default function ErrorPage() {
  return (
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
      <Lottile height={500} width={500} animationData="backend" />
    </div>
  )
}
