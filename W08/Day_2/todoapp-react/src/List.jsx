import { ToDoItem } from "./ToDoItem";

export function ToDoList({ todos, toggleTodo, deleteTodo}) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          // always remember to put a unique identifier to specifically change an item.
          <ToDoItem todo={todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        );
      })}
    </ul>
  );
}
