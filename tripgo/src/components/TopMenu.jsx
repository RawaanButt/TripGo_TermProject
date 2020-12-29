import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import userService from "../services/UsersService";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "white",
    paddingRight: "1rem",
  },
  toolbarButtons: {
    marginLeft: "auto",
  },
  bar: { backgroundColor: "black" },
}));
const TopMenu = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.bar}>
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" className={classes.link}>
            <b>TripGo</b>
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/products" className={classes.link}>
            Tours
          </Link>
        </Typography>
        {!userService.loggedIn() ? (
          <>
            <Typography variant="h6">
              <Link to="/register" className={classes.link}>
                Sign Up
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/cart" className={classes.link}>
                My Cart
              </Link>
            </Typography>

            <Button
              variant="contained"
              className={classes.toolbarButtons}
              color="secondary"
              onClick={(e) => {
                window.location.href = "/login";
              }}
            >
              Login👤
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            className={classes.toolbarButtons}
            color="secondary"
            onClick={(e) => {
              userService.logout();
              window.location.reload();
              window.location.href = "/";
            }}
          >
            Log Out {userService.getLoggedInUser().Username}👤
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
