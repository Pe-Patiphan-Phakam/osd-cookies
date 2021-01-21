import React,{useState} from "react"
import { makeStyles } from "@material-ui/core/styles"
import InputAdornment from "@material-ui/core/InputAdornment"
import Icon from "@material-ui/core/Icon"
import People from "@material-ui/icons/People"
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import Button from "components/CustomButtons/Button.js"
import Card from "components/Card/Card.js"
import CardBody from "components/Card/CardBody.js"
import CardFooter from "components/Card/CardFooter.js"
import CustomInput from "components/CustomInput/CustomInput.js"
import styles from "assets/jss/material-kit-react/views/loginPage.js"
import Lottile from "../../components/lottie/index"
import image from "assets/img/bg004.jfif"
import axios from "axios"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";


const useStyles = makeStyles(styles)

export default function LoginContainer({ _login, _input, loading}) {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  let history = useHistory();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden")
  setTimeout(function () {
    setCardAnimation("")
  }, 700)
  const classes = useStyles()


  const handleUsername = event =>{
    setUsername(event.target.value)
  }

  const handlePassword = events =>{
    setPassword(events.target.value)
  }

  const historyPage =()=>{
    history.goBack()
    window.location.reload();
  }

  _login = (e) => {
    e.preventDefault()
    const form = {
      username: e.target.username.value,
      password: e.target.pass.value

    }
    axios ({
      url: 'http://127.0.0.1:5000/cookies/api/users/checklogin',
      method: 'POST',
      data: form
    })
    .then((res) => {
      console.log(res.data)
      const {statusLogin} = res.data.data
      const {token} = res.data
      localStorage.setItem(`tokenId`,token)
      if (statusLogin === true) {
        return history.push('/home')
      }
      // alert('ชื่อหรือรหัสผ่านผิด')
    })
    .catch((error) => {
      console.log(error);
    });

  }
  const tokenId = localStorage.getItem("tokenId")
  if(!tokenId){
    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={6}>
                <Lottile height={400} width={400} animationData="loginpage" />
              </GridItem>
              <GridItem xs={6} justify="center" alignItems="center">
                <Card className={classes[cardAnimaton]}>
                  <form className={classes.form} onSubmit={_login}>
                    <h5 className={classes.divider} style={{fontWeight:700}}>LOGIN
                    </h5>
                    <CardBody>
                      <CustomInput
                        labelText="USERNAME"
                        id="username"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                        onchange={handleUsername}
                      />
                      <CustomInput
                        labelText="PASSWORD"
                        id="pass"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          ),
                          autoComplete: "off",
                        }}
                        onchange={handlePassword}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button color="primary" type="submit">
                        LOGIN
                      </Button>
                    </CardFooter>
                  </form>
                    <p className="text-center">
                      No Account? / 
                      <Link to="/register" > Register</Link>
                    </p>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    )
  }else{
    return historyPage()
  }
  
}

 

