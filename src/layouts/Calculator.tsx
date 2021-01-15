import React from "react";
import MathExpressionInput from "../components/inputs/MathExpressionInput";
import MathKeyboard from "../components/MathKeyboard";
import ResultContainer from "../components/Result";

const Calculator = () => {
  return <div>
      <MathExpressionInput />
      <ResultContainer />
      <MathKeyboard />
  </div>;
};

export default Calculator;
