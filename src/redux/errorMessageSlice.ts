import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ErrorMessageState } from 'types/errorMessageState';

const initialState: ErrorMessageState = {
  errorMessageTitle: 'Error',
  errorMessageContent: {
    name: ['default'],
  },
  isVisible: false,
};

export const errorMessageSlice = createSlice({
  name: 'errorMessage',
  initialState,
  reducers: {
    updateErrorMessageTitle: (state, action: PayloadAction<string>) => {
      return { ...state, errorMessageTitle: action.payload };
    },
    updateErrorMessageContent: (
      state,
      action: PayloadAction<{
        [key: string]: string[];
      }>
    ) => {
      return { ...state, errorMessageContent: action.payload };
    },
    setErrorAsVisible: (state) => {
      return { ...state, isVisible: true };
    },
    setErrorAsHidden: (state) => {
      return { ...state, isVisible: false };
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
