import { Container, Grid, Box } from "@mui/material";
import React from "react";
import ListedDelivery from "./ListedDelivery";
import DeliveriesSearchBar from "./DeliveriesSearchBar";

const ListDeliveries = () => {
  return (
    <Grid
      container
      xs={12}
      sx={{ minHeight: "100vh", background: "ghostwhite" }}
      direction="row"
      justifyContent="center"
    >
      <Grid xs={10} sx={{background: "blue", maxHeight:"100px", mt: "180px",}}>
        <DeliveriesSearchBar />
      </Grid>
      <Grid
        xs={10}
        item
        sx={{
          backgroundColor: "dodgerblue",
          borderRadius: "5px",
        }}
      >
        <ListedDelivery />
      </Grid>
    </Grid>
  );
};

export default ListDeliveries;
