import React, { useState, useContext } from "react"
import axios from "axios"
import Login from "../containers/loginContainer"
// import { Redirect } from "react-router-dom"

const LoginContainer = () => {
  const [login, setlogin] = useState({ username: "", password: "" })
  //   const [errorlogin, seterrorlogin] = useState({ username: "", password: "" })
  const [redirect, setredirect] = useState(null)
  const [loading, setLoading] = useState(false)

  const _input = (key, value) => setlogin({ ...login, [key]: value })

  const _login = (e) => {
    console.log(e, login)
    setLoading(true)
    e.preventDefault()
    axios
      .post(
        `localhost:5000/users/login`,
        (data = {
          username: login.username,
          password: login.password,
        })
      )
      .then(({ data }) => {
        _agentAction(data.agent)
        seterrorlogin({ email: "", password: "" })
        setredirect(true)
        setLoading("success")
      })
      .catch((e) => {
        const { type, message } = e.response.data
        seterrorlogin({
          [type]: message,
        })
        setLoading("error")
      })
  }

  if (redirect) {
    window.location.replace(`/home`)
  }
  return <Login loading={loading} _login={_login} _input={_input} />
}

export default LoginContainer
