import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import calculatorService from "services/CalculatorService";
import { CalculatorStore } from "types/Calculator";

const calculatorInitialState: CalculatorStore = {
  isEvaluating: false,
  expression: "",
  result: null,
  error: null,
};

export const calculateExpression = createAsyncThunk(
  "calculateExpression",
  async (_, { dispatch, getState }) => {
    dispatch(setIsEvaluating(true));
    const { expression } = (getState() as any).calculator as CalculatorStore;
    try {
      const result = await calculatorService.calculateExpression(expression);
      dispatch(setIsEvaluating(false));
      return result;
    } catch (e) {
      dispatch(setIsEvaluating(false));
      throw e;
    }
  }
);

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: calculatorInitialState,
  reducers: {
    setExpression(state, action: PayloadAction<string>) {
      state.expression = action.payload;
      state.result = null;
      state.error = null;
    },
    setIsEvaluating(state, action: PayloadAction<boolean>) {
      state.isEvaluating = action.payload;
    },
  },
  extraReducers: {
    [calculateExpression.fulfilled as any]: (state, action) => {
      state.result = action.payload;
    },
    [calculateExpression.rejected as any]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export const { setExpression, setIsEvaluating } = calculatorSlice.actions;
export default calculatorSlice.reducer;

const state = (store: any) => store.calculator as CalculatorStore;
export const calculatorSelector = createSelector(state, (s) => s);
