import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;
  function handleUserInput(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <main>
        <UserInput userInput={userInput} onInputChange={handleUserInput} />
        {!inputIsValid && (
          <p className="center">Please enter a duration greater than zero</p>
        )}
        {inputIsValid && <Results input={userInput} />}
      </main>
    </>
  );
}

export default App;
