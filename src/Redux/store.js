import { configureStore } from '@reduxjs/toolkit';
import bmiReducer from './slice/bmiSlice';

export default configureStore({
  reducer: {
    bmi: bmiReducer,
  },
});
