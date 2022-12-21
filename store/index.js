import {configureStore} from '@reduxjs/toolkit';
import videogameSlice from "../reducers/index.js";

const store = configureStore({
    reducer:{
        VIDEOGAMES : videogameSlice
    }
})
export default store