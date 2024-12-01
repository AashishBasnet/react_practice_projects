import { useState } from "react";

export default function UserInput({ inputValue, onInputChange, buttonClick }) {
  return (
    <header className="mt-20">
      <div className=" bg-stone-400 shadow-lg shadow-stone-300/50  m-auto h-60 w-1/2 rounded-xl flex flex-col">
        <h3 className="mb-10 ml-6 text-3xl mt-6">Course Goal</h3>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => onInputChange(event.target.value)}
          className="w-80 h-10 ml-6 mb-10"
        />
        <button
          onClick={buttonClick}
          className="bg-orange-400 shadow-orange-400/50 ml-6 w-36 rounded-lg h-10"
        >
          Add Goal
        </button>
      </div>
    </header>
  );
}
