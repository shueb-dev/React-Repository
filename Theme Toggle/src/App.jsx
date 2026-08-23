import { useState } from "react";

function App() {
  const [darkMode, setDarkmode] = useState(false);

  function ThemeToggle() {
    setDarkmode(!darkMode);
  }

  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        height: "100vh",
      }}
    >
      <button onClick={ThemeToggle}>
        {darkMode ? "dark mode" : "light mode"}
      </button>

      <h1 style={{ color: darkMode ? "white" : "black" }}>Hello!</h1>
    </div>
  );
}

export default App;
