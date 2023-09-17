import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPageStateSlice {
  page: string;
}

const initialState: IPageStateSlice = {
  page: 'portfolio',
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<string>) => {
        state.page = action.payload
    }
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
    // incrementAsync: (state) => {},
    // decrementAsync: (state) => {},
    // incrementByAmountAsync: (state, action: PayloadAction<number>) => {},
    // incrementByAmountAsyncSuccess: (state) => {},
    // incrementByAmountAsyncFailure: (state) => {},
  },
});

export const { actions: pageActions, reducer: pageReducer } =
  pageSlice;
