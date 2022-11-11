import React, { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import { Button, Form } from "react-bootstrap";
//Map of card values for Wong Halves Calculation
import cardMapDefaultValues from "./cardValues.json";

const cardMapWong = new Map<string, number>(
  Object.entries(cardMapDefaultValues)
);
//Map of card values for Griffin's Ultimate Calculation
import cardMapDefaultValues2 from "./cardValues2.json";

const cardMapUltimate = new Map<string, number>(
  Object.entries(cardMapDefaultValues2)
);

//Constants for spans
const wongHalvesRunning = "Wong Halves Running Count: ";
const wongHalvesTrue = "Wong Halves True Count: ";
const griffinURunning = "Griffin's Ultimate Running Count: ";
const griffinUTrue = "Griffin's Ultimate True Count: ";

function App() {
  //Input Value for Card
  const cardValueInput = useRef<HTMLInputElement>(null);
  //Wong Halves Count Value
  const [wongHalvesCount, setWongHalvesCount] = useState("");

  //Form Submit
  function formSubmit(event: React.FormEvent) {
    event.preventDefault();

    cardValueInput.current!.value = "";
  }

  return (
    //Formatting overall
    <div className="App flex flex-col items-center">
      {/* Title of Website*/}
      <div className="bg-orange-600 text-white p-4 px-6 w-full">
        <h1>Advanced Card Counter</h1>
      </div>
      {/* Form code */}
      <div className="m-4 container">
        {/*Number of Decks form*/}
        <Form name="myForm" onSubmit={formSubmit} className="my-4">
          <Form.Group className="mb-3" controlId="formCardName">
            <Form.Label>Number of Decks</Form.Label>
            <Form.Control type="text" placeholder="Number of Decks Ex: '3'" />
          </Form.Group>
          {/*Card Values Form*/}
          <Form.Group className="mb-3" controlId="formCardValue">
            <Form.Label>Card Value{"(s)"}</Form.Label>
            <Form.Control
              type="value"
              placeholder="Card Values Ex: '3,4,5,6,7,A,K,Q,J'"
              ref={cardValueInput}
            />
          </Form.Group>
          <div className="flex w-full justify-center">
            {/* Enter Button */}
            <Button type="submit" className="mx-4 px-4 py-2">
              Enter
            </Button>
            {/* Reset Button */}
            <Button type="submit" className="mx-4 px-4 py-2">
              Reset
            </Button>
          </div>
        </Form>
        <div>
          {/*Wong Halves Values to be displayed  */}
          <span>Wong Halves Running Count: {wongHalvesCount}</span>
          <span>{wongHalvesTrue}</span>
        </div>
        <div className="mt-2">
          {/*Griffin's Ultimate Values to be displayed  */}
          <span>{griffinURunning}</span>
          <span>{griffinUTrue}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
