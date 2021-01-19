import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  calculateExpression,
  calculatorSelector,
  setExpression,
} from "store/slices/calculatorSlices";
import MathExpressionInput from "components/inputs/MathExpressionInput";
import MathKeyboard from "components/MathKeyboard";
import ResultContainer from "components/Result";

import "styles/calculator.css";
import MathResultContainer from "components/Result/ResultContainer";

const Calculator = () => {
  const dispatch = useDispatch();
  const calculatorState = useSelector(calculatorSelector);

  const mathInputRef = useRef<any>(null);
  const [isKeyboardDisplayed, setIsKeyboardDisplayed] = useState(false);

  const setCalculatorInputValue = (calculatorInputValue: string) => {
    dispatch(setExpression(calculatorInputValue));
  };

  const onSubmit = () => {
    dispatch(calculateExpression());
  };

  const { expression } = calculatorState;

  return (
    <div className="calculator-container">
      <MathExpressionInput
        ref={mathInputRef}
        value={expression}
        onSubmit={onSubmit}
        showKeyboard={() => setIsKeyboardDisplayed(true)}
        setValue={setCalculatorInputValue}
      />
      <MathResultContainer
        result={calculatorState.result}
        error={calculatorState.error}
        isEvaluating={calculatorState.isEvaluating}
        onClick={() => {
          setIsKeyboardDisplayed((isDisplayed) => !isDisplayed);
          if (!isKeyboardDisplayed) {
            mathInputRef.current.focus();
          }
        }}
      />
      <MathKeyboard
        isDisplayed={isKeyboardDisplayed}
        onSubmit={onSubmit}
        onKeyEnter={(key: string) => {
          const position = mathInputRef.current.getFocusPosition();
          setCalculatorInputValue(
            expression.slice(0, position) +
              key +
              expression.slice(position, expression.length)
          );
          setImmediate(() =>
            mathInputRef.current.setFocusPosition(position + 1)
          );
        }}
        moveCursorLeft={() => {
          mathInputRef.current.moveFocusPosition(-1);
        }}
        moveCursorRight={() => {
          mathInputRef.current.moveFocusPosition(1);
        }}
        deleteKey={() => {
          const position = mathInputRef.current.getFocusPosition();
          if (position === 0) {
            return;
          }
          setCalculatorInputValue(
            expression.slice(0, position - 1) +
              expression.slice(position, expression.length)
          );
          setImmediate(() =>
            mathInputRef.current.setFocusPosition(position - 1)
          );
        }}
        deleteAll={() => {
          setCalculatorInputValue("");
        }}
      />
    </div>
  );
};

export default Calculator;
