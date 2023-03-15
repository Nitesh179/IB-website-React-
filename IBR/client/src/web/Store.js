import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./adminSlice";
import contactSlice from "./contactSlice";
import gallerySlice from "./gallerySlice";
import newsSlice from './NewsSlice';
import placementSlice from "./placementSlice";


const store = configureStore({
    reducer:{
        gallery:gallerySlice,
        news:newsSlice,
        placement:placementSlice,
        contact:contactSlice,
        admin:adminSlice
    }
})

export default store;