import React from "react";
import Players from "./components/Players";
import NavBar from "./components/navBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Players />
    </div>
  );
}

export default App;
