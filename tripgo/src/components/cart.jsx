import React, { useEffect } from "react";
import SingleCart from "../components/products/singlecart";
import { Button, Grid, Link } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import productService from "../services/ProductsService";
import userService from "../services/UsersService";

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    right: theme.spacing(2),
    top: theme.spacing(11),
  },
  checkout: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: "5px",
  },
}));
const Cart = (props) => {
  const [products, setProducts] = React.useState([]);
  const classes = useStyles();
  const { product, onDelete, history } = props;
  //getData();
  const GetData = () => {
    productService
      .getnewBookings()
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(GetData, []);

  //console.log("Inside products");
  const handleNewProductClick = () => {
    props.history.push("/products/new");
  };
  const handleDeleteProductClick = () => {
    return GetData();
  };
  return (
    <div>
      <h1>🛒My Cart🛒</h1>
      {userService.loggedIn() ? (
        <Fab
          color="primary"
          arial-label="add"
          className={classes.addBtn}
          onClick={handleNewProductClick}
        >
          <AddIcon></AddIcon>
        </Fab>
      ) : (
        ""
      )}
      {products.length === 0 ? (
        <p align="center">Your Cart Is Empty Yet 🤷‍♂️</p>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <SingleCart
              key={index}
              product={product}
              onDelete={handleDeleteProductClick}
            />
          ))}
        </Grid>
      )}
      <Button
        variant="contained"
        className={classes.checkout}
        color="primary"
        fullWidth
        onClick={(e) => {
          window.location.href = "/";
        }}
      >
        Checkout
      </Button>
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
    </div>
  );
};

export default Cart;
