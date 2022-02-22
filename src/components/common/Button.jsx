import React from "react";

function Button({ label }) {
  return (
    <button
      className="mt-4 mx-4 p-2 outline-orange-400
      bg-cyan-600 border rounded-md hover:bg-cyan-500 text-white text-sm font-semibold uppercase tracking-wide"
    >
      {label}
    </button>
  );
}

export default Button;
