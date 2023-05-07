import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import errorMessageSlice from 'redux/errorMessageSlice';
import confirmationMessageSlice from 'redux/confirmationMessageSlice';

export const store = configureStore({
  reducer: {
    errorMessage: errorMessageSlice,
    confirmationMessage: confirmationMessageSlice,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
