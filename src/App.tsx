import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./App.scss";
//Map of card values for Wong Halves Calculation
import { toast } from "react-toastify";
import cardMapDefaultValues from "./cardValues.json";

//Making it a map
const cardMapWong = new Map<string, number>(
  Object.entries(cardMapDefaultValues)
);

//Map of card values for Griffin's Ultimate Calculation
import cardMapDefaultValues2 from "./cardValues2.json";

//Making it a map
const cardMapUltimate = new Map<string, number>(
  Object.entries(cardMapDefaultValues2)
);

//Constant for span1
const wongHalvesRunning = "Wong Halves Running Count: ";
//Constant for span2
const wongHalvesTrue = "Wong Halves True Count: ";
//Constant for span3
const griffinURunning = "Griffin's Ultimate Running Count: ";
//Constant for span4
const griffinUTrue = "Griffin's Ultimate True Count: ";

function App() {
  //Input Value for Card
  const cardValueInput = useRef<HTMLInputElement>(null);
  //Input Value for Deck
  const cardDeckInput = useRef<HTMLInputElement>(null);
  //Wong Halves True Count Value
  const [wongHalvesCount, setWongHalvesCount] = useState<string | number>(0);
  //Wong Halves Running Count Value
  const [wongHalvesRCount, setWongHalvesRCount] = useState<string | number>(0);
  //Griffin's Ultimate True Count Value
  const [griffinUCount, setGriffinUCount] = useState<string | number>(0);
  //Griffin's Ultimate Running Count Value
  const [griffinURCount, setGriffinURCount] = useState<string | number>(0);

  //Card values storage
  const [enteredValueCard, setCardValue] = useState<string[]>([]);
  //Deck values storage
  const [enteredValueDeck, setDeckValue] = useState<string | number>(1);

  //Form Submit
  function formSubmit(event: React.FormEvent) {
    event.preventDefault();
    const cardValues = cardValueInput.current!.value.split(/,\s*/);
    const deckValues = Number(cardDeckInput.current!.value);
    setCardValue(cardValues);

    var sum = 0;
    for (const enteredValue of cardValues) {
      if (cardMapWong.has(enteredValue)) {
        sum += cardMapWong.get(enteredValue)!;
      } else {
        //Notification for card value not existing
        toast(`${enteredValue} is not a card value.`, { type: "error" });
        return;
      }
    }
    setWongHalvesRCount(sum);
    //
    if (deckValues == NaN) {
      setWongHalvesCount(sum);
    } else {
      setWongHalvesCount(sum / deckValues);
    }
    sum = 0;
    for (const enteredValue of cardValues) {
      if (cardMapWong.has(enteredValue)) {
        sum += cardMapUltimate.get(enteredValue)!;
      } else {
        toast(`${enteredValue} is not a card value.`, { type: "error" });
        return;
      }
    }
    setGriffinURCount(sum);
    //
    if (deckValues == NaN) {
      setGriffinUCount(sum);
    } else {
      setGriffinUCount(sum / deckValues);
    }
    toast("Complete");
  }
  function formReset(event: React.FormEvent) {
    event.preventDefault();

    toast("Complete");
  }
  return (
    //Formatting overall
    <div className="App flex flex-col items-center">
      {/* Title of Website*/}
      <div
        //Color and formatting of title
        className="bg-orange-600
         text-white 
         p-4 
         px-6 
         w-full
         text-center"
      >
        <h1>Advanced Card Counter</h1>
      </div>
      {/* Form code */}
      <div
        //Margins
        className="m-4 
        container"
      >
        {/*Number of Decks form*/}
        <Form
          name="myForm"
          onSubmit={formSubmit}
          //Margins
          className="my-4"
        >
          <Form.Group
            //Margins
            className="mb-3"
            controlId="formCardName"
          >
            {/*Label*/}
            <Form.Label>Number of Decks</Form.Label>
            <Form.Control
              type="value"
              //Placeholder Values
              placeholder="Number of Decks Ex: '3'"
              ref={cardDeckInput}
            />
          </Form.Group>
          {/*Card Values Form*/}
          <Form.Group className="mb-3" controlId="formCardValue">
            {/*Label*/}
            <Form.Label>Card Value{"(s)"}</Form.Label>
            <Form.Control
              type="value"
              //Placeholder Values
              placeholder="Card Values Ex: '3,4,5,6,7,A,K,Q,J'"
              ref={cardValueInput}
            />
          </Form.Group>
          <div
            className="flex 
            w-full 
            justify-center"
          >
            {/* Enter Button */}
            <Button
              type="submit"
              //Margins and positioning
              className="mx-4 
              px-4 
              py-2"
            >
              {/*Name of the button*/}
              Enter
            </Button>
            {/* Reset Button */}
            <Button
              type="reset"
              onSubmit={formReset}
              //Margins and positioning
              className="mx-4 px-4 py-2"
            >
              {/*Name of the button*/}
              Reset
            </Button>
          </div>
        </Form>

        {/*Setting a flexbox */}
        <div className="w-full flex">
          {/*Wong Halves Values to be displayed  */}

          <span>
            {wongHalvesRunning} {wongHalvesRCount}
          </span>

          {/*Text Align Right  */}

          <span className="flex-1 text-right">
            {wongHalvesTrue} {wongHalvesCount}
          </span>
        </div>

        {/*Setting a flexbox */}
        <div className="w-full flex">
          {/*Griffin's Ultimate Values to be displayed  */}

          <span>
            {/*Griffin's Ultimate Running Values to be displayed  */}
            {griffinURunning} {griffinURCount}
          </span>

          {/*Text Align Right  */}

          <span className="flex-1 text-right">
            {/*Griffin's Ultimate True Values to be displayed  */}
            {griffinUTrue} {griffinUCount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
