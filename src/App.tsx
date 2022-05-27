import React from "react";
import "./App.css";
import Style from "./pages/Style";

function App() {
  const color = "#ececec";
  return (
    <div className="App">
      <Style color={color} text={"Hi"} />
    </div>
  );
}

export default App;
