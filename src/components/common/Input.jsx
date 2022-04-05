import React from "react";

function Input({ name, label, type, value, error, onChange }) {
  return (
    <div className="mb-4 mx-4">
      <label
        htmlFor={name}
        className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={label}
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-cyan-500 block w-full rounded-md text-sm focus:ring-1"
      />
      {error && (
        <p className=" p-1 bg-red-200 rounded-sm text-xs text-red-800">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;
