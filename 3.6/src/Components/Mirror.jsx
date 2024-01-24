import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Mirror({ Message }) {
  const [color, setColor] = useState(Message);

  const handleChangeColor = () => {
    setColor("red");
  };
  return (
    <>
      <div style={{ color }}>hello world</div>
      <button onClick={handleChangeColor}>Change Color From Child</button>
    </>
  );
}
