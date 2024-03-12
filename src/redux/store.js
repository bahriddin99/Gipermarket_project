import { configureStore } from "@reduxjs/toolkit";
// import { productReducer } from "./reducer/product-reducer";
import { productReducer } from "./reducer/product-reducer";
import { saveState } from "../request/storege";

export const store = configureStore({
    reducer:{
    product:productReducer,
    }
})

store.subscribe(()=>{
    saveState("product",store.getState().product)
})