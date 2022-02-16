import { Grid } from "@mui/material";
import React from "react";
import Product from "./Product";

function Products({ Data }) {
  return (
    <div>
      <Grid container spacing={2}>
        {Data != null
          ? Data.map((key) => (
              <Grid key={key.id} item xs={12} sm={4} md={2.4}>
                <Product prop={key} />
              </Grid>
            ))
          : null}
      </Grid>
    </div>
  );
}

export default Products;
