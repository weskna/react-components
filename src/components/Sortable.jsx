import { useState } from "react";

export const Sortable = ({ keyId, items, setItems, content }) => {
  const [dragItem, setDragItem] = useState();
  const [dragOverItem, setDragOverItem] = useState();

  const handleSort = () => {
    const _items = [...items];
    const dragged = {
      start: null,
      end: null
    };

    _items.findIndex((item, index) => {
      if (item[keyId] === dragItem) {
        dragged.start = index;
      }
      if (item[keyId] === dragOverItem) {
        dragged.end = index;
      }
    });

    const draggedItem = _items.splice(dragged.start, 1)[0];
    _items.splice(dragged.end, 0, draggedItem);
    setDragItem(null);
    setDragOverItem(null);
    setItems(_items);
  };

  return (
    <>
      {items &&
        items.map((item) => (
          <div
            key={item[keyId]}
            draggable
            onDragStart={(e) => setDragItem(item[keyId])}
            onDragEnter={(e) => setDragOverItem(item[keyId])}
            onDragEnd={handleSort}
            style={{
              width: "100%",
              margin: "0.5rem 0",
              padding: "1rem 0",
              display: "flex",
              backgroundColor:
                dragItem === item[keyId]
                  ? "#bababa"
                  : dragOverItem === item[keyId]
                  ? "#d1d1d1"
                  : "#ededed"
            }}
          >
            <div style={{ cursor: "grab" }}>&#8942;</div>
            <div style={{ marginLeft: "0.5rem", width: "100%" }}>
              {content(item)}
            </div>
          </div>
        ))}
    </>
  );
};
