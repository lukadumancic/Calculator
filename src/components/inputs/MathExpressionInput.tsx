import React, { forwardRef, useImperativeHandle, useRef } from "react";

interface MathExpressionInputProps {
  value: string;
  onSubmit: () => void;
  showKeyboard: () => void;
  setValue: (value: string) => void;
}

const MathExpressionInput = forwardRef(
  (props: MathExpressionInputProps, ref: any) => {
    const { value, onSubmit, showKeyboard, setValue } = props;
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      moveFocusPosition,
      setFocusPosition,
      getFocusPosition,
      focus,
    }));

    const moveFocusPosition = (moveCount: number) => {
      if (inputRef.current) {
        if (inputRef.current.selectionStart !== null) {
          let newSelectionPosition =
            inputRef.current.selectionStart + moveCount;
          if (newSelectionPosition < 0) {
            newSelectionPosition = 0;
          }
          setFocusPosition(newSelectionPosition);
        } else {
          inputRef.current.focus();
        }
      }
    };

    const setFocusPosition = (focusPosition: number) => {
      if (inputRef.current) {
        inputRef.current.selectionStart = focusPosition;
        inputRef.current.selectionEnd = focusPosition;
      }
    };

    const getFocusPosition = () => {
      return inputRef.current?.selectionStart;
    };

    const focus = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      onSubmit();
      event.preventDefault();
    };

    return (
      <div className="input-container">
        <form onSubmit={handleSubmit} className="calculator-input-container">
          <input
            ref={inputRef}
            value={value}
            onFocus={showKeyboard}
            onChange={(event) => setValue(event.target.value)}
            type="text"
            className="calculator-input"
          />
          <input
            type="submit"
            value="Calculate"
            className="calculator-submit-btn"
          />
        </form>
      </div>
    );
  }
);

export default MathExpressionInput;
