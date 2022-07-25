import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./assets/scss/main.scss";
import Button from "./components/Button/Button";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button link="https://react.org" text="Go to docs" />
      </header>
    </div>
  );
}

export default App;
