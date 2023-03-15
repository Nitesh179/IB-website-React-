import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import webApi from "./webApi";
import WebService from "./webService";

export const fetchPlacement=createAsyncThunk('/placement/fetchPlacement',async(data)=>{
    let response=await WebService.getApi(webApi.LOAD_PLACEMENT);
    if(response.data.status){
        return response.data.result;
    }
});

const slice=createSlice({
name:'placement',
initialState:{
    value:{
        placementList:[],
        isPlacementLoading:"",
        placementError:''
    }
},

reducers:{
    updatePlacement:(state,action)=>{
        state.value.placementList.unshift(action.payload);
    },
    deletePlacement:(state,action)=>{
        state.value.placementList.splice(action.payload,1);
    }
},

extraReducers:(builder)=>{
    builder.addCase(fetchPlacement.pending,(state,action)=>{
        state.value.isPlacementLoading=true;
    })
    builder.addCase(fetchPlacement.fulfilled,(state,action)=>{
        state.value.isPlacementLoading=false;
        state.value.placementList=action.payload;
    })
    builder.addCase(fetchPlacement.rejected,(state,action)=>{
        state.value.isPlacementLoading=false;
        state.value.placementList=[];
        state.value.placementError='Oops!.. something went wrong'
    })
}
})

export const {updatePlacement,deletePlacement}=slice.actions;
export default slice.reducer;