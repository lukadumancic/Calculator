import React, { forwardRef, Ref, useImperativeHandle, useRef } from "react";

interface MathExpressionInputProps {
  onSubmit: () => void;
  setValue: (value: string) => void;
  value: string;
}

const MathExpressionInput = forwardRef(
  (props: MathExpressionInputProps, ref: any) => {
    const { onSubmit, value, setValue } = props;
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      moveFocusPosition,
    }));

    const moveFocusPosition = (moveCount: number) => {
      if (inputRef.current) {
        if (inputRef.current.selectionStart !== null) {
          let newSelectionPosition =
            inputRef.current.selectionStart + moveCount;
          if (newSelectionPosition < 0) {
            newSelectionPosition = 0;
          }
          inputRef.current.selectionStart = newSelectionPosition;
          inputRef.current.selectionEnd = newSelectionPosition;
        } else {
          inputRef.current.focus();
        }
      }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      onSubmit();
      event.preventDefault();
    };

    return (
      <div>
        <form className="calculator-input-container" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            type="text"
            className="calculator-input"
          />
          <input type="submit" value="Calculate" />
        </form>
      </div>
    );
  }
);

export default MathExpressionInput;
