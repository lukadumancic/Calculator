import React from "react";

interface ErrorProps {
  error: string;
}

const Error = (props: ErrorProps) => {
  const { error } = props;

  return <span className="result-error">{error}</span>;
};

export default Error;
