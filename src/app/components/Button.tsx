import React from "react";

type Props = {
  children: string;
  onClick: () => void;
};

export const Button = ({ children, onClick }: Props) => {
  return (
    <button className="btn btn-primary w-full" onClick={onClick}>
      {children}
    </button>
  );
};
