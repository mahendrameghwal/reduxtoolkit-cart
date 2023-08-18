/* eslint-disable react-refresh/only-export-components */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchProduct = createAsyncThunk("Fetchproduct", async () => {
  let URL = "https://dummyjson.com/products";
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    throw error.message;
  }
});

const Cartslice = createSlice({
  name: "cartslice",
  initialState: {
    isloading: false,
    data: null,
    isError: null,
    cartItems: [],
  },
  reducers: {
    Addcart: (state, action) => {
      const Newitem = action.payload;

      const existingItem = state.cartItems.find(item => item.id === Newitem.id);

      if (existingItem) {
        alert("Item is already in the cart");
        return;
      }

      state.cartItems.push(Newitem);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    Removecart: (state, action) => {
      const indexToRemove = state.cartItems.findIndex(
        item => item.id === action.payload
      );
      if (indexToRemove !== -1) {
        state.cartItems.splice(indexToRemove, 1);
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },
    ClearCart:(state)=>{
      localStorage.setItem("cart", JSON.stringify(state.cartItems=[])); 
    }
  },
  extraReducers: Builder => {
    Builder.addCase(FetchProduct.fulfilled, (state, action) => {
      state.isloading = false;
      state.data = action.payload;
      state.isError = action.payload;
    });

    Builder.addCase(FetchProduct.pending, state => {
      state.isloading = true;
      state.isError = false;
    });

    Builder.addCase(FetchProduct.rejected, (state, action) => {
      state.isloading = false;
      state.isError = action.error.message;
      console.log("error", action.error.message);
    });
  },
});

export const { Addcart, Removecart, ClearCart } = Cartslice.actions;
export default Cartslice.reducer;
