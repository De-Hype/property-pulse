import  {createSlice} from "@reduxjs/toolkit";

export interface ActionState{
    filterClicked:boolean
}
const initialState = {
    filterClicked:false,
}

export const actionSlice:any = createSlice({
    name:"action",
    initialState,
    reducers:{
        changeFilterState:(state)=>{
            state.filterClicked= !state.filterClicked
        }
    }
})

export const {changeFilterState}=actionSlice.actions;
export default actionSlice.reducer;