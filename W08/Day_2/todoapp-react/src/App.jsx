import { useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./Form";
import { ToDoList } from "./List";
import { useEffect } from "react";

export default function App() {
  // useState is a React Hook that lets you add a state variable to your component.
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if(localValue === null) return [];

    return JSON.parse(localValue);
  });

  // useEffect is a React Hook that lets you synchronize a component with an external system.
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos]);

  function addTodo(title){
        setTodos((currentTodos) => {
          return [
            ...currentTodos,
            {
              id: crypto.randomUUID(),
              title,
              completed: false,
            },
          ];
        });
  }

  function toggleTodo(completed, id) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return {...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h2 className="header">To-do List</h2>
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}
