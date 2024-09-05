// CartPage.js
import React from "react";
import { connect } from 'react-redux';
import { removeFromCart, addToCart } from "../actions/cartActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function CartPage({ cart, removeFromCart, addToCart }) {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (itemId, quantity) => {
    const item = cart.find((item) => item.id === itemId);
    if (item) {
      addToCart(item, quantity);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "grey",
        width: "100vw",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
        position: "relative",
      }}
    >
      <h1 className="pacifico-regular" style={{ textAlign: "center" }}>
        Welcome to the cart page!
      </h1>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {cart.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <div
                style={{
                  marginBottom: "10px",
                  border: "5px solid white",
                  backgroundColor: "teal",
                  borderRadius: "3px",
                  padding: "10px",
                }}
              >
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">
                  Price: ${item.price.toFixed(2)}
                </Typography>
                <Typography variant="body2">
                  Current Quantity: {item.quantity}
                </Typography>
                <TextField
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, Number(e.target.value))
                  }
                  inputProps={{ min: 1 }}
                  sx={{ marginBottom: 2 }}
                />
                <div>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => removeFromCart(item.id)}
                    style={{ backgroundColor: "red" }}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        <hr style={{ border: 'none', height: '3px', backgroundColor: 'white', margin: '20px 0' }} />
        <Typography
          variant="h5"
          style={{
            backgroundColor: "black",
            padding: "10px",
            borderRadius: "25px",
          }}
        >
          Total Cart Price: ${getTotalPrice().toFixed(2)}
        </Typography>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  removeFromCart,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
