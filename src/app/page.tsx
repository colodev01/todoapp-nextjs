import Head from "next/head";
import ToDoList from "./ui/components/todo-list";

export default function Home() {
  return (
    <main>
      <ToDoList />
    </main>
  );
}
