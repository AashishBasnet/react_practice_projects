import { useState } from "react";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div
      id="auth-inputs"
      className="w=full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800"
    >
      <div className="flex flex-col gap-2 mb-6">
        <p className="paragraph">
          <Input
            invalid={emailNotValid}
            label="Email"
            type="email"
            // style={{
            //   backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db;",
            // }}
            // className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p className="paragraph">
          <Input
            invalid={passwordNotValid}
            type="password"
            label="Password"
            // className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            // style={{
            //   backgroundColor: passwordNotValid ? "#fed2d2" : "#d1d5db;",
            // }}
          />
        </p>
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
