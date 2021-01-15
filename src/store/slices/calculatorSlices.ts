import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalculatorStore } from "types/Calculator";

const calculatorInitialState: CalculatorStore = {
  isEvaluating: false,
  expression: "",
  results: null,
  error: null,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: calculatorInitialState,
  reducers: {
    setIsEvaluating(state, action: PayloadAction<boolean>) {
      state.isEvaluating = action.payload;
    },
  },
});

export const { setIsEvaluating } = calculatorSlice.actions;
export default calculatorSlice.reducer;

export const calculateExpression = createAsyncThunk(
  "calculateExpression",
  async (_value, { dispatch, getState }) => {
    const { expression } = (getState() as any).calculator as CalculatorStore;
    console.log(expression);
  }
);
