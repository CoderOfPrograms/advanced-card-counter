import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import { Button } from "react-bootstrap";
import SomeComponent from "./SomeComponent";

function App() {
  return (
    <div className="App">
      <div className="bg-orange-600">
        <h1>Advanced Card Counter</h1>
      </div>
      <Button>Hello!</Button>
      <SomeComponent></SomeComponent>
    </div>
  );
}

export default App;
