import { configureStore } from '@reduxjs/toolkit'
// REDUCER_IMPORTS
import HomeReducer from './Containers/Home/HomeSlice.js';
import NotFoundReducer from './Containers/NotFound/NotFoundSlice.js';

export const store = configureStore({
    reducer: {
        // REDUCERS
        Home : HomeReducer,
        NotFound : NotFoundReducer,
    },
})