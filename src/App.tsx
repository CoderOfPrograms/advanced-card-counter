import React, { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import { Button, Form } from "react-bootstrap";
import SomeComponent from "./SomeComponent";

import cardMapDefaultValues from "./cardValues.json";

const cardMapWong = new Map<string, number>(
  Object.entries(cardMapDefaultValues)
);
import cardMapDefaultValues2 from "./cardValues2.json";
const cardMapUltimate = new Map<string, number>(
  Object.entries(cardMapDefaultValues2)
);

function App() {
  const cardValueInput = useRef<HTMLInputElement>(null);
  // const [text, setText] = useState("Hello!");

  function formSubmit(event: React.FormEvent) {
    event.preventDefault();

    cardValueInput.current!.value = "";
  }

  return (
    <div className="App">
      <div className="bg-orange-600">
        <h1>Advanced Card Counter</h1>
      </div>
      <div className="m-4">
        <Form name="myForm" onSubmit={formSubmit} className="my-4">
          <Form.Group className="mb-3" controlId="formCardName">
            <Form.Label>Card Name</Form.Label>
            <Form.Control type="text" placeholder="Number of Decks Ex: '3'" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCardValue">
            <Form.Label>Value</Form.Label>
            <Form.Control
              type="value"
              placeholder="Card Values Ex:'3,4,5,6,7,A,K,Q,J'"
              ref={cardValueInput}
            />
          </Form.Group>
          <div className="flex w-full justify-center">
            <Button type="submit" className="mx-4 px-4 py-2">
              Enter
            </Button>
            <Button type="submit" className="mx-4 px-4 py-2">
              Reset
            </Button>
          </div>
        </Form>
        <SomeComponent></SomeComponent>
      </div>
    </div>
  );
}

export default App;
