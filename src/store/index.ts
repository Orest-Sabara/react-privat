import { configureStore } from '@reduxjs/toolkit';

import converterReducer from './converterSlice';

const store = configureStore({
  reducer: {
    converter: converterReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
