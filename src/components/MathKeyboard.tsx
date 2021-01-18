import React from "react";
import "styles/keyboard.css";

const keys = [
  "(",
  "1",
  "2",
  "3",
  "*",
  ")",
  "4",
  "5",
  "6",
  "/",
  "[",
  "7",
  "8",
  "9",
  "-",
  "]",
  "0",
  ".",
  "%",
  "+",
];

interface MathKeyboardProps {
  onKeyEnter: (key: string) => void;
  onSubmit: () => void;
  moveCursorLeft: () => void;
  moveCursorRight: () => void;
  deleteKey: () => void;
  deleteAll: () => void;
}

const MathKeyboard = (props: MathKeyboardProps) => {
  const {
    onKeyEnter,
    moveCursorLeft,
    moveCursorRight,
    onSubmit,
    deleteAll,
    deleteKey,
  } = props;

  const actions = [
    {
      label: "<",
      callback: moveCursorLeft,
    },
    {
      label: ">",
      callback: moveCursorRight,
    },
    {
      label: "↵",
      callback: onSubmit,
    },
    {
      label: "⌫",
      callback: deleteKey,
    },
    {
      label: "X",
      callback: deleteAll,
    },
  ];

  return (
    <div className="keyboard-container">
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={() => action.callback()}
          onMouseDown={(event) => event.preventDefault()}
          className="keyboard-item"
        >
          <span>{action.label}</span>
        </button>
      ))}
      {keys.map((key) => (
        <button
          key={key}
          onClick={() => onKeyEnter(key)}
          onMouseDown={(event) => event.preventDefault()}
          className="keyboard-item"
        >
          <span>{key}</span>
        </button>
      ))}
    </div>
  );
};

export default MathKeyboard;
