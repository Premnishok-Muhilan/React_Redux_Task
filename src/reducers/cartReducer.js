// reducers/cartReducer.js
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { item, quantity } = action.payload;
      const existingItemIndex = state.cart.findIndex(cartItem => cartItem.id === item.id);

      if (existingItemIndex > -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity = quantity;
        return { ...state, cart: updatedCart };
      }

      return { ...state, cart: [...state.cart, { ...item, quantity }] };
    }
    case REMOVE_FROM_CART: {
      const itemId = action.payload;
      return { ...state, cart: state.cart.filter(cartItem => cartItem.id !== itemId) };
    }
    default:
      return state;
  }
};

export default cartReducer;
