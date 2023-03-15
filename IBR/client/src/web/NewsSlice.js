import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import webApi from "./webApi";
import WebService from "./webService";

export const fetchNews=createAsyncThunk('news/fetchNews',async(data)=>{
    let response = await WebService.getApi(webApi.LOAD_NEWS);
    if(response.data.status){
        return response.data.result;
    }
});

const slice = createSlice({
    name:"news",
    initialState:{
        value:{
            newsList:[],
            isNewsLoading:false,
            NewsError:""
        }
    },
    reducers:{
        updateNews:(state,action)=>{
            state.value.newsList.pop();
            state.value.newsList.unshift(action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchNews.pending,(state,action)=>{
            state.value.isNewsLoading = true;
        })
        builder.addCase(fetchNews.fulfilled,(state,action)=>{
            state.value.isNewsLoading = false;
            state.value.newsList = action.payload;
        })
        builder.addCase(fetchNews.rejected,(state,action)=>{
            state.value.isNewsLoading = false;
            state.value.newsList = [];
            state.value.NewsError = "Oops!.. something went wrong"
        })
    }
})
export const {updateNews} = slice.actions;
export default slice.reducer