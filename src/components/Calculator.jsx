import React, { useState } from "react";
import { FaBackspace } from "react-icons/fa";

export default function Calculator({ values, setValues }) {
  function handleClick(value) {
    const index = values.length - 1;
    if (value === "Del") {
      //if statement to selet previous number
      const updatedValues = values.slice(0, index);
      setValues(updatedValues);
      return;
    } else if (value === "CE" || value === "c") {
      // if statement to clear display
      setValues([]);
      return;
    } else if (value === "=") {
      // Handle the calculation
      try {
        // Join the array into a string and evaluate it
        const result = eval(values.join(""));

        // If result is finite (e.g., no Infinity or NaN), show the result
        if (Number.isFinite(result)) {
          setValues([result]);
        } else {
          setValues(["Error"]);
        }
      } catch (error) {
        // If there's any error in evaluation, display Error
        setValues(["Error"]);
      }
      return;
    }
    // set the values to be displayed
    setValues([...values, value]);
  }

  return (
    <div className="font-bold">
      <div>
        <button
          name="CE"
          onClick={(e) => {
            handleClick(e.target.name);
          }}
          className="rounded-lg bg-gray-300 hover:bg-gray-400 p-2 mx-2 m-1 w-15 h-15"
        >
          CE
        </button>
        <button
          name="c"
          onClick={(e) => {
            handleClick(e.target.name);
          }}
          className="rounded-lg bg-gray-300 hover:bg-gray-400 w-15 h-15 p-2 mx-2 m-1"
        >
          C
        </button>
        <button
          name="Del"
          onClick={(e) => {
            handleClick(e.target.name);
          }}
          className="rounded-lg text-lg bg-gray-300 hover:bg-gray-400 w-15 h-15 p-2 mx-2 m-1"
        >
          Del
        </button>
        <button
          name="/"
          onClick={(e) => {
            handleClick(e.target.name);
          }}
          className="rounded-lg bg-gray-300 hover:bg-gray-400 w-15 h-15 p-2 mx-2 m-1"
        >
          /
        </button>
      </div>
      <div>
        <button
          name="7"
          onClick={(e) => {
            handleClick(e.target.name);
          }}
          className="rounded-lg bg-gray-300 hover:bg-gray-400 w-15 h-15 p-2 mx-2 m-1"
        >
          7
        </button>
        <button
          name="8"
          onClick={(e) => {
            handleClick(e.target.name);
          }}
          className="rounded-lg bg-gray-300 hover:bg-gray-400 w-15 h-15 p-2 mx-2 m-1"
        >
          8
        </button>
        <button
          name="9"
          onClick={(e) => {
            handleClick(e.target.name);
          }}
          className="rounded-lg bg-gray-300 hover:bg-gray-400 w-15 h-15 p-2 mx-2 m-1"
        >
          9
        </button>
        <button
          name="*"
          onClick={(e) => {
            handleClick(e.target.name);
          }}
          className="rounded-lg bg-gray-300 hover:bg-gray-400 w-15 h-15 p-2 mx-2 m-1"
        >
          X
        </button>
      </div>{" "}
      <div>
        <button
          name="4"
          onClick={(e) => {
            handleClick(e.target.name);
          }}
          className="rounded-lg bg-gray-300 hover:bg-gray-400 w-15 h-15 p-2 mx-2 m-1"
        >
          4
        </button>
        <button
          name="5"
          onClick={(e) => {
            handleClick(e.target.name);
          }}
          className="rounded-lg bg-gray-300 hover:bg-gray-400 w-15 h-15 p-2 mx-2 m-1"
        >
          5
        </button>
        <button
          name="6"
          onClick={(e) => {
            handleClick(e.target.name);
          }}
          className="rounded-lg bg-gray-300 hover:bg-gray-400 w-15 h-15 p-2 mx-2 m-1"
        >
          6
        </button>
        <button
          name="-"
          onClick={(e) => {
            handleClick(e.target.name);
          }}
          className="rounded-lg bg-gray-300 hover:bg-gray-400 w-15 h-15 p-2 mx-2 m-1"
        >
          -
        </button>
      </div>{" "}
      <div>
        <button
          name="1"
          onClick={(e) => {
            handleClick(e.target.name);
          }}
          className="rounded-lg bg-gray-300 hover:bg-gray-400 w-15 h-15 p-2 mx-2 m-1"
        >
          1
        </button>
        <button
          name="2"
          onClick={(e) => {
            handleClick(e.target.name);
          }}
          className="rounded-lg bg-gray-300 hover:bg-gray-400 w-15 h-15 p-2 mx-2 m-1"
        >
          2
        </button>
        <button
          name="3"
          onClick={(e) => {
            handleClick(e.target.name);
          }}
          className="rounded-lg bg-gray-300 hover:bg-gray-400 w-15 h-15 p-2 mx-2 m-1"
        >
          3
        </button>
        <button
          name="+"
          onClick={(e) => {
            handleClick(e.target.name);
          }}
          className="rounded-lg bg-gray-300 hover:bg-gray-400 w-15 h-15 p-2 mx-2 m-1"
        >
          +
        </button>
      </div>{" "}
      <div>
        <button
          name="("
          onClick={(e) => {
            handleClick(e.target.name);
          }}
          className="rounded-lg  bg-gray-300 hover:bg-gray-400 w-15 h-15 p-2 mx-2 m-1"
        >
          (
        </button>
        <button
          name="0"
          onClick={(e) => {
            handleClick(e.target.name);
          }}
          className="rounded-lg bg-gray-300 hover:bg-gray-400 w-15 h-15 p-2 mx-2 m-1"
        >
          0
        </button>
        <button
          name=")"
          onClick={(e) => {
            handleClick(e.target.name);
          }}
          className="rounded-lg bg-gray-300 hover:bg-gray-400 w-15 h-15 p-2 mx-2 m-1"
        >
          )
        </button>
        <button
          name="="
          onClick={(e) => {
            handleClick(e.target.name);
          }}
          className="rounded-lg text-white bg-red-600 hover:bg-red-400 w-15 h-15 p-2 mx-2 m-1"
        >
          =
        </button>
      </div>
    </div>
  );
}
