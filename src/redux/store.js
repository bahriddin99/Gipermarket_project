import { configureStore,createListenerMiddleware,isAnyOf } from "@reduxjs/toolkit";
import { productReducer } from "./reducer/product-reducer";
import { saveState } from "../request/storege";
import { add,remove,toogleAnmount,totalPrice,totalCount } from "./reducer/product-reducer";


const storageMiddleware = createListenerMiddleware()

storageMiddleware.startListening({
    matcher:isAnyOf(add,remove,toogleAnmount),
   effect:(_,api)=>{
    api.dispatch(totalPrice());
    api.dispatch(totalCount());
   }


})
export const store = configureStore({
    reducer:{
    product:productReducer,
    },
    middleware:(defauldMiddlware)=>defauldMiddlware().prepend(storageMiddleware.middleware)
})

store.subscribe(()=>{
    saveState("product",store.getState().product)
})