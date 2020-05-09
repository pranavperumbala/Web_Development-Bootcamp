import React, { useState } from "react";

function App() {
  let currentTime = new Date().toLocaleTimeString();

  function a() {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(a, 1000);

  const [time, setTime] = useState(currentTime);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={a}>Get Time</button>
    </div>
  );
}

export default App;
