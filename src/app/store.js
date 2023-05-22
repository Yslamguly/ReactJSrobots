import {configureStore} from "@reduxjs/toolkit";
import searcherReducer from '../redux/searcher/searcherSlice'

export default configureStore({
    reducer:{
        searcher:searcherReducer
    }
})
