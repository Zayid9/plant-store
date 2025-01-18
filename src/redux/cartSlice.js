import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      state.totalQuantity++;
      state.totalPrice += action.payload.price;
      if (!existingItem) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        existingItem.quantity++;
      }
    },
    removeItem(state, action) {
      const itemIndex = state.items.findIndex(item => item.id === action.payload);
      if (itemIndex >= 0) {
        state.totalQuantity -= state.items[itemIndex].quantity;
        state.totalPrice -= state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    incrementItem(state, action) {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity++;
        state.totalQuantity++;
        state.totalPrice += existingItem.price;
      }
    },
    decrementItem(state, action) {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;
      } else {
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
  },
});

export const { addItem, removeItem, incrementItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;
