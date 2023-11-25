"use client";
import React, { useState } from "react";
import { Button } from "@/app/components/Button";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

type Props = {};

export const TodoPanel = (props: Props) => {
  const [todos, setTodos] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("");
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const addTodo = () => {
    if (title.trim() == "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      setTodos((prev) => [...prev, title]);
      // setTitle("");
    }

    setTimeout(() => {
      setIsEmpty(false);
    }, 300);
  };

  const deleteTodo = () => {
    setTodos(todos.slice(0, -1));
  };

  return (
    <div className="bg-white max-w-sm w-full h-fit rounded-3xl p-6 grid gap-3 ">
      <h1 className="text-2xl text-black">Todo</h1>
      <div className="w-full h-full grid place-items-center gap-3">
        <div className="max-h-60 overflow-auto w-full h-full flex flex-col gap-3 items-center">
          {todos.length == 0 && <p className="text-sm">No todos yet</p>}
          <TodoItem todos={todos} onClick={deleteTodo} />
        </div>
        <TodoInput setTitle={setTitle} title={title} isEmpty={isEmpty} />
        <Button onClick={addTodo}>Add task</Button>
      </div>
    </div>
  );
};
