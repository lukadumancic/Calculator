import React from "react";

interface ResultProps {
  result: string;
}

const Result = (props: ResultProps) => {
  const { result } = props;

  return <span className="result">{result}</span>;
};

export default Result;
