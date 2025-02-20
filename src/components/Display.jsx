import React, { useState } from "react";

export default function Display({ values }) {
  // Join the array into a string separated by spaces
  const display = values.join("");
  return (
    <div>
      {/* display the result and the problem */}
      <input
        id="display"
        placeholder="0"
        type="text"
        value={display}
        readOnly
        style={{ fontFamily: "digital-clock-font" }}
        className="cursor-default focus:outline-none rounded-lg 
        mb-3 bg-white h-24 leading-loose w-10/12 px-2 border-black text-right text-4xl font-bold text-black"
      />
    </div>
  );
}
