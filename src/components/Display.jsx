import React, { useState } from "react";

export default function Display({ values }) {
  // Join the array into a string separated by spaces
  const display = values.join(" ");

  return (
    <div>
      <input
        placeholder="0"
        type="text"
        value={display}
        readOnly
        className="w-10/12 focus:outline-none rounded-lg 
        mb-3 h-15 bg-white p-4 border-black text-right text-2xl font-bold"
      />
    </div>
  );
}
