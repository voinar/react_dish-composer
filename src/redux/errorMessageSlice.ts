import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ErrorMessageState {
  errorMessageTitle: string;
  errorMessageContent: {};
  isVisible: boolean;
}

const initialState: ErrorMessageState = {
  errorMessageTitle: 'Error',
  errorMessageContent: {},
  isVisible: true,
};

export const errorMessageSlice = createSlice({
  name: 'errorMessage',
  initialState,
  reducers: {
    updateErrorMessageTitle: (state, action: PayloadAction<string>) => {
      state.errorMessageTitle = action.payload;
    },
    updateErrorMessageContent: (state, action: PayloadAction<string>) => {
      state.errorMessageContent = action.payload;
    },
    setErrorAsVisible: (state) => {
      state.isVisible = true;
    },
    setErrorAsHidden: (state) => {
      state.isVisible = false;
    },
  },
});

export const {
  updateErrorMessageTitle,
  updateErrorMessageContent,
  setErrorAsVisible,
  setErrorAsHidden,
} = errorMessageSlice.actions;

export default errorMessageSlice.reducer;
