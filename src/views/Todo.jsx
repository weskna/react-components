import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Sortable } from "../components/Sortable";

export default function Todo() {
  const [items, setItems] = useState([
    {
      uuid: uuidv4(),
      title: "Learn React",
    },
  ]);

  const [edit, setEdit] = useState(false);
  const [editItem, setEditItem] = useState({});

  const handleItemAdd = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setItems([
      ...items,
      {
        ...data,
        uuid: uuidv4(),
      },
    ]);
    event.target.reset();
  };

  const handleItemDelete = (uuid) => {
    setItems(items.filter((item) => item.uuid !== uuid));
  };

  const submitItemEdit = () => {
    event.preventDefault();
    const _items = [...items];
    const index = _items.findIndex((item) => item.uuid === editItem.uuid);
    _items[index].title = editItem.title;
    setItems(_items);
    setEditItem({});
    setEdit(false);
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
            <div style={{ display: "flex" }}>
              {editItem.uuid !== item.uuid && <span>{item.title}</span>}
              {editItem.uuid === item.uuid && (
                <form onSubmit={submitItemEdit}>
                  <input
                    type="text"
                    id="editTitle"
                    name="title"
                    value={editItem.title}
                    onChange={(event) =>
                      setEditItem({ ...item, title: event.target.value })
                    }
                  />
                  <button type="submit">Update</button>
                </form>
              )}
              <button
                type="button"
                onClick={() => setEditItem(item)}
                style={{ marginLeft: "auto" }}
                disabled={edit}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => {
                  handleItemDelete(item.uuid);
                }}
                style={{ margin: "0 0.5rem" }}
                disabled={edit}
              >
                Remove
              </button>
            </div>
          );
        }}
      />
    </>
  );
}
