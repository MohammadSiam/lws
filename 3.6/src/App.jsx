import { useState } from "react";
import Mirror from "./Components/Mirror";

export default function App() {
  const [color, setColor] = useState("");
  const handleChangeColor = () => {
    setColor("blue");
  };
  return (
    <>
      <Mirror message={color} />
      <button onClick={handleChangeColor}>Change Color From Parent</button>
    </>
  );
}
