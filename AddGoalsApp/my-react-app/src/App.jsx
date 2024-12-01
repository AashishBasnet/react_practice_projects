import "./index.css";
import { useState } from "react";
import PrintValue from "./components/PrintValue";
import UserInput from "./components/UserInput";
function App() {
  const [inputValue, setInputValue] = useState("Learn React");
  const [clickedValue, setClickedValue] = useState("");
  // let [stateCount, setStateCount] = useState(1);
  function handleOnChange(value) {
    setInputValue(value);
  }
  function handleClick() {
    setClickedValue(inputValue);
  }

  return (
    <>
      <UserInput
        inputValue={inputValue}
        buttonClick={handleClick}
        onInputChange={handleOnChange}
      />
      <PrintValue value={clickedValue} />
    </>
  );
}

export default App;
