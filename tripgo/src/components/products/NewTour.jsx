import { Button, Grid, TextField } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import "../style.css";
const NewTour = (props) => {
  const [tourDestination, settourDestination] = React.useState("");
  const [id, setid] = React.useState("");
  const [noOfSeats, setnoOfSeats] = React.useState("");
  const [tourStart, settourStart] = React.useState("");
  const [noOfDays, setnoOfDays] = React.useState("");
  const [charges, setcharges] = React.useState("");
  return (
    <Grid container direction={"column"} spacing={2}>
      <Grid item xs={6}>
        <h1>Add A Tour</h1>
      </Grid>

      <Grid item xs={6}>
        <TextField
          label="Tour Destination"
          fullWidth
          variant="outlined"
          value={tourDestination}
          onChange={(e) => {
            settourDestination(e.target.value);
          }}
        ></TextField>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Tour Id"
          fullWidth
          variant="outlined"
          value={id}
          onChange={(e) => {
            setid(e.target.value);
          }}
        ></TextField>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="No. Of Seats"
          fullWidth
          variant="outlined"
          value={noOfSeats}
          onChange={(e) => {
            setnoOfSeats(e.target.value);
          }}
        ></TextField>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Tour Date"
          type="date"
          format="yyyy-MM-dd"
          fullWidth
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          value={tourStart}
          onChange={(e) => {
            settourStart(e.target.value);
          }}
        ></TextField>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="No. Of Days"
          fullWidth
          variant="outlined"
          value={noOfDays}
          onChange={(e) => {
            setnoOfDays(e.target.value);
          }}
        ></TextField>
      </Grid>
      <Grid item xs={6}>
        {" "}
        <TextField
          label="Charges"
          fullWidth
          variant="outlined"
          value={charges}
          onChange={(e) => {
            setcharges(e.target.value);
          }}
        ></TextField>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            console.log("send api call to add");
            axios
              .post("http://localhost:4000/api/products", {
                tourDestination,
                id,
                noOfSeats,
                tourStart,
                noOfDays,
                charges,
              })
              .then((res) => {
                console.log(res.data);
                props.history.push("/products");
              })
              .catch((err) => {
                console.log(err);
                toast.error(err.response.data, {
                  position: toast.POSITION.TOP_CENTER,
                });
              });
          }}
        >
          Add Tour
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewTour;
