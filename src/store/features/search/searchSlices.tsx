import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CartState {
  year: string;
}

const initialState: CartState = {
  year: '',
};

const searchSlices = createSlice({
  name: 'searchSlices',
  initialState,
  reducers: {
    selectFilter: (state, action: PayloadAction<string>) => {
      state.year = action.payload;
    },
  },
});

export const { selectFilter } = searchSlices.actions;
export default searchSlices.reducer;
