// src/services/redux/store.js
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'; 
// import rootReducer from './articleReducer'; 

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

import {configureStore} from '@reduxjs/toolkit';
import ProductReducer from '../redux_2/ProductSlice';
import rootReducer from '../redux/articleReducer';

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    environment: rootReducer,
    
  },
});
