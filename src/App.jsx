import React, { useState } from "react";
import Calculator from "./components/Calculator";
import Display from "./components/Display";

export default function App() {
  const [values, setValues] = useState([]);

  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <div className="w-auto bg-gray-100 text-center rounded-2xl bg-opacity-5">
        <div className="p-2 py-5">
          <Display values={values} />
          <Calculator values={values} setValues={setValues} />
        </div>
      </div>
    </div>
  );
}
