import { configureStore } from "@reduxjs/toolkit"
import ProductApi from "./reducers/createApi"
import numberReducer from "./reducers/createState"

const store = configureStore ({
    reducer : {
        number : numberReducer,
        [ProductApi.reducerPath] : ProductApi.reducer 
    },
    middleware : (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware)
})

export default store