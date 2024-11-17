import { createSlice } from '@reduxjs/toolkit';

const initialState = {
      products: [],
      userInfo: null,
};

export const orebiSlice = createSlice({
      name: 'orebi',
      initialState,
      reducers: {
            // Add a product to the cart with an initial quantity of 1
            addToCart: (state, action) => {
                  state.products.push({ ...action.payload, quantity: 1 });
            },

            // Increase the quantity of a product in the cart
            increseQuantity: (state, action) => {
                  const product = state.products.find((item) => item._id === action.payload);
                  if (product) {
                        product.quantity += 1;
                  }
            },

            // Decrease the quantity of a product in the cart
            decreseQuantity: (state, action) => {
                  const product = state.products.find((item) => item._id === action.payload);
                  if (product && product.quantity > 1) {
                        product.quantity -= 1;
                  }
            },
            productDelete: (state, action) => {
                  state.products = state.products.filter((item) => item._id !== action.payload)
            },
            resetProducts: (state) => {
                  state.products = []
            },
            addUser: (state, action) => {
                  state.userInfo = action.payload
            },
            removeUser: (state) => {
                  state.userInfo = null;
            }
      },
});

export const { addToCart, decreseQuantity, increseQuantity, productDelete, resetProducts, addUser, removeUser } = orebiSlice.actions;
export default orebiSlice.reducer;
