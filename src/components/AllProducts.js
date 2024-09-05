// src/components/AllProducts.js
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Data from "../data/products.json"; // Static data import

import ProductCard from "./ProductCard";
import MyAppBar from "./MyAppBar";

export default function AllProducts() {
  return (
    <>
      <MyAppBar />

      <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {Data.products.map((itemData, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <ProductCard itemData={itemData} key={index} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}
