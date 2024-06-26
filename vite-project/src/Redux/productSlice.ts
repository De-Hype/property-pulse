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

export const fetchAboutListing = createAsyncThunk<AxiosResponse<any>,{id:string}, {rejectValue:string}>(
    "product/about/id", async({id})=>{
        const results = await axios.get(`https://estatery-m505.onrender.com/v1/api/property/about-listing/${id}`);
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

export const storeListing = createAsyncThunk<AxiosResponse<any>,{page:number}, {rejectValue:string}>(
    "product/store", async({page})=>{
        const results = await axios.get(`https://estatery-m505.onrender.com/v1/api/property/store-listing?page=${page}`);
        return results
    }
)   

export interface productState{
    home_product :any
    search_result:any[]
    search_location_listing:any[]
    store_listing:any
    about_listing:any
    currentPage:number
    error:string
    loading:boolean
}
const initialState : productState = {
    error:"",
    currentPage:1,
    loading: false,
    home_product:null,
    search_result:[],
    search_location_listing:[],
    store_listing:null,
    about_listing:null
}
export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        seeSearchResult:(state, action) =>{
            state.search_result = action.payload;
        },
        incrementPage:(state)=>{
            ++state.currentPage;
        },
        decrementPage:(state)=>{
            --state.currentPage
        }
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
        builder.addCase(fetchAboutListing.pending, (state)=>{
            state.loading = true;
        })
        builder.addCase(fetchAboutListing.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = "";
            state.about_listing = action.payload;
            
        })
        builder.addCase(fetchAboutListing.rejected, (state, action)=>{
            state.loading = false;
            state.error = `${action.payload}`
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

export const {seeSearchResult, incrementPage, decrementPage}=productSlice.actions;
export default productSlice.reducer;
