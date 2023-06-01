import { useState } from "react";
import "./styles.css";
import Form from "./Form";
import List from "./List";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newItem) {
    setTodos((currTodos) => {
      return [
        ...currTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currTodos) => {
      return currTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currTodos) => {
      return currTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <Form addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <List toggleTodo={toggleTodo} deleteTodo={deleteTodo} todos={todos} />
    </>
  );
}
