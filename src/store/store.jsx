import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "../slices/Cartslice";

const storedCartItems = localStorage.getItem("cart");
const initialCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

export const store = configureStore ({
    reducer:{
     Cart:  Cartreducer
    },

    preloadedState: {

        Cart: {
          cartItems: initialCartItems,
        },
    }
})