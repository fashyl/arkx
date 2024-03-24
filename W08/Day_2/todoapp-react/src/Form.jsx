import { useState } from "react";

export function NewTodoForm(props){
  // const [state, setState] = useState(initialState)
  // const [age, setAge] = useState(28);
  // const [name, setName] = useState('Taylor');
  // const [todos, setTodos] = useState(() => createTodos());
  // basically reduce.

  const [newItem, setNewItem] = useState("Item 1");

    function handleSubmit(e) {
        e.preventDefault();
        if(newItem === "") return;
        props.onSubmit(newItem);
        setNewItem("");
      }
    
    return (
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
    )
}