import React from "react"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
import InputAdornment from "@material-ui/core/InputAdornment"
import Icon from "@material-ui/core/Icon"
// @material-ui/icons
import People from "@material-ui/icons/People"
// core components
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
// import { useForm } from "react-hook-form";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import { useHistory } from "react-router-dom";


const useStyles = makeStyles(styles)

export default function RegisterContainer( _signup, _input) {
  let history = useHistory();

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden")
  setTimeout(function () {
    setCardAnimation("")
  }, 700)
  const classes = useStyles()
  //   const { ...rest } = props

  _signup = (e) => {
    e.preventDefault()
    const value = {
      username: e.target.username.value,
      pass: e.target.pass.value

    }
    console.log(value)
    axios ({
      url: 'http://localhost:5000/backend/api/users/',
      method: 'POST',
      data: value
    })
    .then((response) => {
      console.log(response.data);
      if (response.data) {
        alert("สมัครสมาชิกเสร็จสิ้น");
        return history.push('/')
      }
      
      
    })
    .catch((error) => {
      console.log(error);
    });

  }

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
                <form className={classes.form} onSubmit={_signup}>
                  <h5 className={classes.divider}>
                    <h2> REGISTER </h2>
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
                      onChange={(e) => _input("username", e.target.value)}
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
                      onChange={(e) => _input("password", e.target.value)}
                    />
                    
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button color="primary" type="submit">
                      SUBMIT
                    </Button>
                  </CardFooter>
                </form>
                <p class="text-center">
                Have An Account? /  
                    <Link to="/">  Login
                       {/* <ExitToAppIcon className={classes.icons}  />  */}
                    </Link>
                    {/* <a href="/users/register">Register</a> */}
                  </p>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  )
}

 

