import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  function waitListNames(e) {
    setName(e.target.value);
  }

  function Join() {
    if (names.length <= 5) {
      setNames([...names, name]);
    } else {
      alert("the waitlist is full");
    }
    setName("");
  }

  return (
    <div>
      <h2>Tonight's WaitList</h2>
      <hr />

      <input onChange={waitListNames} value={name} placeholder="Your Name" />
      <button onClick={Join}>Join</button>
      <p>{name}</p>
      <hr />
      <ul>
        {names.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
