import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import userEvent from "@testing-library/user-event";
import userService from "../../services/UsersService";
import { toast } from "react-toastify";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
  },
  child: {
    width: "60%",
    alignItems: "left",
  },
  pad: {
    margin: "3px",
  },
}));
const Login = (props) => {
  const classes = useStyles();
  const [Username, setUsername] = React.useState("");
  const [password, setpassword] = React.useState("");
  return (
    <>
      <div className={classes.container}>
        <div className={classes.child}>
          <h1>🔐Enter Login Credentials🔐</h1>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            className={classes.pad}
            value={Username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></TextField>
          <br />
          <TextField
            label="password"
            type="password"
            variant="outlined"
            className={classes.pad}
            fullWidth
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          ></TextField>
          <br />
          <Button
            variant="contained"
            color="primary"
            className={classes.pad}
            onClick={(e) => {
              userService
                .login(Username, password)
                .then((data) => {
                  console.log(data);
                  window.location.href = "/products";
                })
                .catch((err) => {
                  console.log(err);
                  toast.error(err.response.data, {
                    position: toast.POSITION.TOP_CENTER,
                  });
                });
            }}
          >
            Login
          </Button>
        </div>
      </div>
      <section class="footer">
        <div class="container">
          <div class="row">
            <div class="column4">
              <img src="./images/logo1.png" alt="" class="footer-logo" />
            </div>
            <div class="column4">
              <h4>Features</h4>
              <p>Deals & Offers</p>
              <p>Customer Reviews</p>
              <p>Terms and Conditions</p>
            </div>
            <div class="column4">
              <h4>Contact</h4>
              <p>📞 +92-332-0123456</p>
              <p>📧 TripGo@123.com</p>
              <p>🏢 Jinnah Road,Gujranwala</p>
            </div>
            <div class="column4">
              <h4>Follow Us</h4>
              <p>📍 Facebook/TripGo</p>
              <p>📍 Youtube/TripGo</p>
              <p>📍 Twitter/TripGo</p>
            </div>
          </div>
          <hr />
          <p class="copyright">© Rawaan Butt</p>
        </div>
      </section>
    </>
  );
};

export default Login;
