import React from "react";
import { Button, Grid } from "@material-ui/core";
import productService from "../../services/ProductsService";
import userService from "../../services/UsersService";

import { withRouter } from "react-router";
const SingleCart = (props) => {
  const { product, onDelete, history } = props;
  console.log(props);

  return (
    <Grid item xs={3}>
      <h2>
        {product.tourDestination}
        <Button
          variant="contained"
          color="secondary"
          onClick={(e) => {
            productService
              .deletecart(product._id)
              .then((data) => {
                console.log(data);
                onDelete();
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Remove
        </Button>
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

export default withRouter(SingleCart);
