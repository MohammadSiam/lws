import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

export default function Traveller() {
  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState(initialItems);
  const [select, setSelect] = useState(items[0].title);
  const handleChoose = (e) => {
    setSelect(e.title);
  };
  return (
    <>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <button
              onClick={() => {
                handleChoose(item);
              }}
            >
              choose
            </button>
          </div>
        ))}
        <p>You picked :{select}</p>
      </div>
    </>
  );
}
