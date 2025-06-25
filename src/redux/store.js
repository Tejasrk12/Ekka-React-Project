import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "./bannerSlice";
import productReducer from './productSlice';
import testimonialReducer from './testimonialSlice';
const store = configureStore({
    reducer: {
        banner: bannerReducer,
        product:productReducer,
        testimonial:testimonialReducer,
    }
})

export default store;