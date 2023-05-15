import React from "react";

export interface ErrorTextProps {
  error: string;
}

const ErrorText: React.FunctionComponent<ErrorTextProps> = (props) => {
  const { error } = props;

  if (error === "") return null;

  return (
    <small className="flex text-center text-danger text-xl text-red-500">
      {error}
    </small>
  );
};

export default ErrorText;
