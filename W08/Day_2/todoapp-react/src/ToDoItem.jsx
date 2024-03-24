export function ToDoItem({todo, toggleTodo, deleteTodo}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => toggleTodo(e.target.checked, todo.id)}
        />
        {todo.title}
      </label>
      <button
      onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}
