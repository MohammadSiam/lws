import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  return (
    <>
      <h2>Lets check you in!!!</h2>
      <form action="">
        <label htmlFor="">First Name</label>
        <input value={firstName} onChange={handleChangeFirstName} type="text" />
        <br />
        <br />
        <label htmlFor="">Last Name</label>
        <input value={lastName} onChange={handleChangeLastName} type="text" />
      </form>
      <p>
        Your ticket will be issued to: <b> {firstName + " " + lastName} </b>
      </p>
    </>
  );
}
