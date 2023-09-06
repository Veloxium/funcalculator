import React from "react";

function Btn({name, onclick}) {
  return (
    <button
      onClick={onclick}
      className={
        name == "="
          ? "btn w-full h-12 flex justify-center items-center col-span-2"
          : "btn w-full h-12 flex justify-center items-center"
      }
    >
      <p className="mono text-2xl text-white">{name}</p>
    </button>
  );
}

export default Btn;
