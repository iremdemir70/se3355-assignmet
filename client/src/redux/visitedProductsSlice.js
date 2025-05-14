import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const visitedProductsSlice = createSlice({
  name: 'visitedProducts',
  initialState,
  reducers: {
    addVisitedProduct: (state, action) => {
  const incoming = action.payload;
  const exists = state.products.find(
    p => p.id === incoming.id && p.source === incoming.source
  );
  if (!exists) {
    state.products.push(incoming);
  }
}
,
  },
});

export const { addVisitedProduct } = visitedProductsSlice.actions;
export default visitedProductsSlice.reducer;
