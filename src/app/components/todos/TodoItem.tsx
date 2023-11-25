import { IconTrash } from "@tabler/icons-react";
import React from "react";

type Props = {
  todos: string[];
  onClick: () => void;
};

export const TodoItem = ({ todos, onClick }: Props) => {
  return (
    <>
      {todos.map((todo, idx) => (
        <div
          className="flex justify-between w-full border-2 solid p-3 rounded-3xl"
          key={idx}
        >
          <p>{todo}</p>
          <button onClick={onClick}>
            <IconTrash />
          </button>
        </div>
      ))}
    </>
  );
};
