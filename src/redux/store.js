// create store for Redux toolkit

import { configureStore } from '@reduxjs/toolkit'
import productSlice from './features/product/productSlice'
import cartSlice from './features/cart/cartSlice'


export const store = configureStore({
    reducer: {
        // add reducers here
        products: productSlice,
        cart: cartSlice

    }
})