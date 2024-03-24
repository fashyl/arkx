import { useState } from "react";
import "./styles.css";

export default function App() {
  // const [state, setState] = useState(initialState)
  // const [age, setAge] = useState(28);
  // const [name, setName] = useState('Taylor');
  // const [todos, setTodos] = useState(() => createTodos());
  // basically reduce.

  const [newItem, setNewItem] = useState("Item 1");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    // setTodos([...todos, {
    //   id: crypto.randomUUID(),
    //   title: newItem,
    //   completed: false,
    // }]);

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false,
        },
      ];
    });

    setNewItem("");
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
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add New item</button>
      </form>
      <h2 className="header">To-do List</h2>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            // always remember to put a unique identifier to specifically change an item.
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(e.target.checked, todo.id)}
                />
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
