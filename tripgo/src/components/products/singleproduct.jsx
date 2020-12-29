import React from "react";
import { Button, Grid } from "@material-ui/core";
import productService from "../../services/ProductsService";
import userService from "../../services/UsersService";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import("./style.css");
const useStyles = makeStyles((theme) => ({
  addBtn: {
    margin: "3px",
  },
}));
const SingleProduct = (props) => {
  const { product, onDelete, history } = props;
  const classes = useStyles();
  console.log(props);

  return (
    <Grid item xs={3}>
      <h2>
        {product.tourDestination}
        {userService.loggedIn() ? (
          <>
            <Button
              variant="contained"
              color="primary"
              className={classes.addBtn}
              onClick={(e) => {
                console.log("Navigate to update");
                history.push("/products/update/" + product._id);
              }}
            >
              Edit
            </Button>

            <Button
              variant="contained"
              color="secondary"
              className={classes.addBtn}
              onClick={(e) => {
                productService
                  .deleteProduct(product._id)
                  .then((data) => {
                    console.log(data);
                    onDelete();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Delete
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            color="primary"
            className={classes.addBtn}
            onClick={(e) => {
              console.log("Navigate to cart");
              history.push("/products/cart/" + product._id);
              productService
                .addtocart(product._id)
                .then((data) => {
                  console.log(data);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Add To Cart
          </Button>
        )}
      </h2>
      <p>
        <b>Tour Id:</b>
        {product.id}
      </p>
      <p>
        <b>No. of Seats:</b>
        {product.noOfSeats}
      </p>
      <p>
        <b>Tour Date:</b>
        {product.tourStart}
      </p>
      <p>
        <b>Tour Duration(Days):</b>
        {product.noOfDays}
      </p>
      <p>
        <b>Charges($):</b>
        {product.charges}
      </p>
      <hr />
    </Grid>
  );
};

export default withRouter(SingleProduct);
