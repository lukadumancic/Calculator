import React from "react";
import Result from "./Result";

interface MathResultContainerProps {
  onClick: () => void;
}

const MathResultContainer = (props: MathResultContainerProps) => {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <Result />
    </div>
  );
};

export default MathResultContainer;
