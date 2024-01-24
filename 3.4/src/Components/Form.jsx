import { useState } from "react";

export default function Form() {
  const [areas, setArea] = useState([{ id: 1 }]);
  const handleButton = () => {
    const nextId = areas.length + 1;
    setArea([...areas, { id: nextId }]);
  };
  return (
    <div>
      <form action="">
        {areas.map((area) => (
          <div key={area.id}>
            <textarea></textarea>
          </div>
        ))}
      </form>
      <button onClick={handleButton}>Add More</button>
    </div>
  );
}
