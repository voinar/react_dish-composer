import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'redux/store';

// Define a type for the slice state
interface FormState {
  value: number;
  // firstName: string;
  form: {};
}

// Define the initial state using that type
const initialState: FormState = {
  value: 0,
  form: {
    form: {
      values: {
        // name: 'firstName',
        // preparation_time: 'ok',
      },
    },
  },
  // form: { firstName: 'default name' },
  // firstName: 'default name',
};

export const formSlice = createSlice({
  name: 'form',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = formSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.form.value;
// export const selectForm = (state: RootState) => state.form.form;

export default formSlice.reducer;
