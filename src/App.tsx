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

  //For the Enter Button
  function formSubmit(event: React.FormEvent) {
    //Prevents the default from occurring
    event.preventDefault();
    //Setting the values in the Card values(after splitting it by commas ignoring spaces) form to this variable
    const cardValues = cardValueInput.current!.value.split(/,\s*/);
    //Setting the values in the Deck Values form to this variable
    const deckValues = parseInt(cardDeckInput.current!.value);

    //Checks if there is a value that works for deck values
    if (isNaN(deckValues)) {
      //Returns error and exits the program
      toast(`${cardDeckInput.current!.value} is not a valid deck value.`, {
        type: "error",
      });
      return;
    }

    setCardValue(cardValues);
    //Sum is the key variable for the final results
    var sum = 0;
    //For Wong Halves references it with the map for Wonghalves then adds the appropriate numbers to sum
    for (const enteredValue of cardValues) {
      if (cardMapWong.has(enteredValue)) {
        sum += cardMapWong.get(enteredValue)!;
      } else {
        //Notification that an invalid number or character was added and ends program
        toast(`${enteredValue} is not a card value.`, { type: "error" });
        return;
      }
    }
    setWongHalvesRCount(sum);

    //Checks if the number is appropriate then changes the appropriate values
    if (isNaN(deckValues) && deckValues <= 0) {
      setWongHalvesCount(sum);
    } else {
      setWongHalvesCount(sum / deckValues);
    }
    //For Griffin's ultimate references it with the map for Griffin's ultimate then adds the appropriate numbers to sum
    sum = 0;
    for (const enteredValue of cardValues) {
      if (cardMapWong.has(enteredValue)) {
        sum += cardMapUltimate.get(enteredValue)!;
      } else {
        //Notification that an invalid number or character was added and ends program
        toast(`${enteredValue} is not a card value.`, { type: "error" });
        return;
      }
    }

    setGriffinURCount(sum);

    //Checks if the number is appropriate then changes the appropriate values
    if (isNaN(deckValues) && deckValues <= 0) {
      setGriffinUCount(sum);
    } else {
      setGriffinUCount(sum / deckValues);
    }
    //Sends notification that its complete
    toast("Complete");
  }

  //For the Reset Button
  function formReset() {
    //Sets the Griffin's Ultimate Count to 0
    setGriffinUCount(0);
    //Sets the Griffin's Ultimate Running Count to 0
    setGriffinURCount(0);
    //Sets the Wong Halves Count to 0
    setWongHalvesCount(0);
    //Sets the Wong Halves Running Count to 0
    setWongHalvesRCount(0);
    toast("Reset", { type: "success" });
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
              onClick={formReset}
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
