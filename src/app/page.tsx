import Image from "next/image";
import { TodoPanel } from "./components/todos/TodoPanel";

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-[#1c1c1c] p-5 sm:p-24">
      <TodoPanel />
    </main>
  );
}
