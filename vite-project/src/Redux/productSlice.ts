import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import type {PayloadAction} from '@reduxjs/toolkit';
import axios, {AxiosResponse} from 'axios';
import { Server } from '../utils/Server';

export const fetchHomeProperty = createAsyncThunk<AxiosResponse<any>, undefined, {rejectValue:string}>(
    "product/items/getHome/Property", async()=>{
       const results = await axios.get(`https://estatery-m505.onrender.com/v1/api/property/homepage-listing`);
       //const results =await ax http://localhost:7070/v1/api/property/homepage-listing
        console.log(results)
        return results
    }
)  

export const searchResultProperty = createAsyncThunk<AxiosResponse<any>, undefined, {rejectValue:string}>(
    "product/search-results/Property", async()=>{
        const results = await axios.get(`${Server}/property`);
        return results
    }
)  

export const searchListingByLocation = createAsyncThunk<AxiosResponse<any>, undefined, {rejectValue:string}>(
    "product/search-location/Property", async()=>{
        const results = await axios.get(`${Server}/property`);
        return results
    }
) 

export const storeListing = createAsyncThunk<AxiosResponse<any>, undefined, {rejectValue:string}>(
    "product/store", async()=>{
        const results = await axios.get(`https://estatery-m505.onrender.com/v1/api/property/store-listing`);
       
        return results
    }
)   

export interface productState{
    home_product :any
    search_result:any[]
    search_location_listing:any[]
    store_listing:any
    error:string
    loading:boolean
}
const initialState : productState = {
    error:"",
    loading: false,
    home_product:null,
    search_result:[],
    search_location_listing:[],
    store_listing:null
}
export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        seeSearchResult:(state, action) =>{
            state.search_result = action.payload;
        },
    },
    extraReducers:(builder)=> {
        builder.addCase(fetchHomeProperty.pending, (state)=>{
            state.loading = true;
        })
        builder.addCase(fetchHomeProperty.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = "";
            state.home_product = action.payload;
            
        })
        builder.addCase(fetchHomeProperty.rejected, (state, action)=>{
            state.loading = false;
            state.error = `${action.payload}`
        })
        builder.addCase(searchResultProperty.pending,(state) =>{
            state.loading = true;
        } )
        builder.addCase(searchResultProperty.fulfilled,(state, action) =>{
            state.loading = false;
            state.error = "";
            state.search_result = [action.payload]
        } )
        builder.addCase(searchResultProperty.rejected, (state, action)=>{
            state.loading = false;
            state.error = `${action.payload}`
        })
        builder.addCase(searchListingByLocation.pending, (state)=>{
            state.loading = true;
        })
        builder.addCase(searchListingByLocation.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = "";
            state.search_location_listing = [action.payload]
        })
        builder.addCase(searchListingByLocation.rejected, (state, action)=>{
            state.loading = false;
            state.error =  `${action.payload}`
        })
        builder.addCase(storeListing.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(storeListing.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = "";
            state.store_listing = action.payload;
        } )
        builder.addCase(storeListing.rejected, (state, action)=>{
            state.loading = false;
            state.error = `${action.payload}`
        })
    },
})

export const {seeSearchResult}=productSlice.actions;
export default productSlice.reducer;
