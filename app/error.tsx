"use client";

type Props = {
  error: Error;
  reset: () => void;
};

const error = ({ error, reset }: Props) => {
  return <div className="text-5xl">{error.message}</div>;
};

export default error;
