import React, { useEffect } from "react";
import SingleProduct from "./singleproduct";
import { Grid, Link } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import productService from "../../services/ProductsService";
import userService from "../../services/UsersService";

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    right: theme.spacing(2),
    top: theme.spacing(11),
  },
}));
const Products = (props) => {
  const [products, setProducts] = React.useState([]);
  const classes = useStyles();

  //getData();
  const GetData = () => {
    productService
      .getProducts()
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
      <h1>🗺Upcoming Tours🗺</h1>
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
        <p>There are no products!</p>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <SingleProduct
              key={index}
              product={product}
              onDelete={handleDeleteProductClick}
            />
          ))}
        </Grid>
      )}
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

export default Products;
