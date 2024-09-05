// ProductCard.js
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { addToCart } from "../actions/cartActions";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

function ProductCard({ itemData, cart, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const cartItem = cart.find((item) => item.id === itemData.id);
    if (cartItem) {
      setQuantity(cartItem.quantity);
    } else {
      setQuantity(1);
    }
  }, [cart, itemData.id]);

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleAddToCart = () => {
    addToCart(itemData, quantity);
  };

  const individualTotalPrice = itemData.price * quantity;

  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardMedia
        component="img"
        image={itemData.image}
        alt={itemData.title}
        sx={{
          width: "100%",
          height: "300px",
          objectFit: "contain",
          marginTop: "25px"
        }}
      />
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography gutterBottom variant="h5" component="div">
          {itemData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {itemData.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "auto",
          padding: 2,
        }}
      >
        <Typography variant="h6" color="text.primary" sx={{ marginBottom: 1 }}>
          ${itemData.price}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: 2 }}
        >
          Rating: {itemData.rating.rate} ({itemData.rating.count} reviews)
        </Typography>
        <TextField
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          sx={{ marginBottom: 2 }}
          inputProps={{ min: 1 }}
        />
        <Typography variant="h6" color="text.primary" sx={{ marginBottom: 1 }}>
          Total: ${individualTotalPrice.toFixed(2)}
        </Typography>
        <Button size="small" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
