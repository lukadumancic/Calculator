import React, { useRef, useState } from "react";

import MathExpressionInput from "components/inputs/MathExpressionInput";
import MathKeyboard from "components/MathKeyboard";
import ResultContainer from "components/Result";

import "styles/calculator.css";

const Calculator = () => {
  const mathInputRef = useRef<any>(null);
  const [isKeyboardDisplayed, setIsKeyboardDisplayed] = useState(false);
  const [calculatorInputValue, setCalculatorInputValue] = useState("");

  const onSubmit = () => {};

  return (
    <div className="calculator-container">
      <MathExpressionInput
        ref={mathInputRef}
        value={calculatorInputValue}
        onSubmit={onSubmit}
        showKeyboard={() => setIsKeyboardDisplayed(true)}
        setValue={setCalculatorInputValue}
      />
      <ResultContainer
        onClick={() => {
          setIsKeyboardDisplayed((isDisplayed) => !isDisplayed);
          if (!isKeyboardDisplayed) {
            mathInputRef.current.focus();
          }
        }}
      />
      <MathKeyboard
        isDisplayed={isKeyboardDisplayed}
        onKeyEnter={(key: string) => {
          setCalculatorInputValue((value) => value + key);
        }}
        moveCursorLeft={() => {
          mathInputRef.current.moveFocusPosition(-1);
        }}
        moveCursorRight={() => {
          mathInputRef.current.moveFocusPosition(1);
        }}
        onSubmit={onSubmit}
        deleteKey={() => {
          setCalculatorInputValue((value) => value.slice(0, value.length - 1));
        }}
        deleteAll={() => {
          setCalculatorInputValue("");
        }}
      />
    </div>
  );
};

export default Calculator;
