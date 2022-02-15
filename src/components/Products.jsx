import { Grid } from "@mui/material";
import React from "react";
import { Data } from "../Data";
import Product from "./Product";

function Products() {
  return (
    <div>
      <Grid container spacing={2}>
        {Data.map((key) => (
          <Grid item xs={12} sm={4} md={2.4}>
            <Product prop={key} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
