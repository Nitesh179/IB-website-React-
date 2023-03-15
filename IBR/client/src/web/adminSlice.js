import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import webApi from "./webApi";
import WebService from "./webService";
export const fetchRegistration = createAsyncThunk("/registration/fetchRegistration",async ()=>{
    let res = await WebService.getApi(webApi.LOAD_REGISTERED_STUDENT);
    console.log(res.data);
    if(res.data.status)
        return res.data.result;
})
const slice = createSlice({
    name:'admin',
    initialState:{
        value:{
            registration:{
                registrationList:[],
                isRegistrationLoading:false,
                errorRegistration : ""
            },
            isLogin:false,
        }
    },
    reducers:{
        adminLogin:(state,action)=>{
            state.value.isLogin = true;
        },
        adminLogout:(state,action)=>{
            state.value.isLogin = false;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRegistration.pending,(state,action)=>{
            state.value.registration.isRegistrationLoading = true;
            state.value.registration.errorRegistration = "";
        })
        builder.addCase(fetchRegistration.fulfilled,(state,action)=>{
            state.value.registration.isRegistrationLoading = false;
            state.value.registration.registrationList = action.payload;
            // console.log("adminSlice 38: => "+action.payload);
            state.value.registration.errorRegistration = "";
        })
        builder.addCase(fetchRegistration.rejected,(state,action)=>{
            state.value.registration.isRegistrationLoading = false;
            state.value.registration.registrationList = [];
            state.value.registration.errorRegistration = "Oops! something went wrong";
        })

    }
})
export const {adminLogin,adminLogout} = slice.actions
export default slice.reducer;