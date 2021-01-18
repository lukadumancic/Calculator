import React from "react";

import Result from "./Result";
import Error from "./Error";
import "styles/results.css";

interface MathResultContainerProps {
  result: string | null;
  error: string | null;
  isEvaluating: boolean;
  onClick: () => void;
}

const MathResultContainer = (props: MathResultContainerProps) => {
  const { result, error, isEvaluating, onClick } = props;
  return (
    <div onClick={onClick} className="result-container">
      {isEvaluating && <span>Loading...</span>}
      {result && <Result result={result} />}
      {error && <Error error={error} />}
    </div>
  );
};

export default MathResultContainer;
