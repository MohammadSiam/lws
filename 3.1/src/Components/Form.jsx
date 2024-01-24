import { useState } from "react";
import "../../src/styles.css";

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "dhaka") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 1500);
  });
}

export default function Form() {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("typing");
  const [error, setError] = useState(null);
  const handleTextChange = (e) => {
    setError(null);
    setAnswer(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (error) {
      setStatus("typing");
      setError(error);
    }
  };
  if (status === "success") {
    return <h1>Thats right!</h1>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>City quiz</h2>
        <p>What city is located on two continents?</p>
        <textarea
          value={answer}
          onChange={handleTextChange}
          disabled={status === "submitting"}
        ></textarea>
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        {status === "submitting" && <p>Loading...</p>}
        {error && <p className="Error">{error.message}</p>}
      </form>
    </div>
  );
}
