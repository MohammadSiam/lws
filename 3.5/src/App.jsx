import { useState } from "react";

// eslint-disable-next-line no-unused-vars
function sendMessage(message) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

function App() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing");
  // const [isSend, setIsSend] = useState(false);
  // const [isSent, setIsSent] = useState(false);
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = async () => {
    setStatus("sending");
    await sendMessage(text);
    setStatus("submitting");
  };

  if (status === "submitting") {
    return <h1>Thanks For Feedback!!!!</h1>;
  }

  return (
    <>
      <div>
        <p>How was your stay at the prancing pony?</p>
        <textarea
          value={text}
          onChange={handleChange}
          disabled={status === "sending"}
        ></textarea>
        <br />
        <button
          onClick={handleClick}
          disabled={text === "" || status === "sending"}
        >
          Send
        </button>
        {status === "sending" && <p>Sending...</p>}
      </div>
    </>
  );
}

export default App;
