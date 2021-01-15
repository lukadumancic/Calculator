import { configureStore, combineReducers } from "@reduxjs/toolkit";

import calculatorReducer from "./slices/calculatorSlices";

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
