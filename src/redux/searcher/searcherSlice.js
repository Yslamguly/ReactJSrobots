import {createSlice} from "@reduxjs/toolkit";

export const searcherSlice = createSlice({
    name:'searcher',
    initialState:{
        value : ''
    },
    reducers:{
        changeSearchField:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const {changeSearchField} = searcherSlice.actions

export const selectSearcherField = (state) => state.searcher.value
export default searcherSlice.reducer
