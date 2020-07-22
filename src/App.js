import React from "react";
import "./App.css";
import Data from "./components/Data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="head">The Rick and Morty character DB</h2>
        <Data />
      </header>
    </div>
  );
}

export default App;
