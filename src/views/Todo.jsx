import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Sortable } from "../components/Sortable";

export default function Todo() {
  const [items, setItems] = useState([
    {
      uuid: uuidv4(),
      title: "Learn React"
    }
  ]);

  const handleItemAdd = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setItems([
      ...items,
      {
        ...data,
        uuid: uuidv4()
      }
    ]);
    event.target.reset();
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleItemAdd}>
        <label htmlFor="title">Item</label>
        <input type="text" id="title" name="title" />
        <button type="submit">Add item to the todo list</button>
      </form>

      <Sortable
        keyId="uuid"
        items={items}
        setItems={setItems}
        content={(item) => {
          return (
            <div>
              <span
                style={{
                  fontSize: "0.5rem",
                  position: "absolute",
                  right: "0",
                  margin: "0 1rem",
                  color: "gray"
                }}
              >
                {item.uuid}
              </span>
              <span>{item.title}</span>
            </div>
          );
        }}
      />
    </>
  );
}
