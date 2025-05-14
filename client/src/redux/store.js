import { configureStore } from '@reduxjs/toolkit';
import visitedProductsReducer from './visitedProductsSlice';

export const store = configureStore({
  reducer: {
    visitedProducts: visitedProductsReducer,
  },
});
