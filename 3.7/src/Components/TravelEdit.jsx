import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

export default function TravelEdit() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find((item) => item.id === selectedId);

  const handleInput = (id, e) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <>
      <h1>Whats your travel snack?</h1>
      {items.map((item) => (
        <ul key={item.id}>
          <li>
            <input
              type="text"
              value={item.title}
              onChange={(e) => {
                handleInput(item.id, e);
              }}
            />
            <button
              onClick={() => {
                setSelectedId(item.id);
              }}
            >
              Choose
            </button>
          </li>
        </ul>
      ))}
      <p>You selected {selectedItem.title}</p>
    </>
  );
}
