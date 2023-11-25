import React from "react";
import clsx from "clsx";

type Props = {
  setTitle: any;
  title: string;
  isEmpty: boolean;
};

export const TodoInput = ({ setTitle, title, isEmpty }: Props) => {
  return (
    <input
      className={clsx(
        "form-control input input-bordered w-full h-12 rounded-3xl bg-transparent",
        isEmpty && "isEmpty"
      )}
      placeholder="type task"
      onChange={(e) => setTitle(e.target.value)}
    />
  );
};
