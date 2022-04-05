import React from "react";

function Modal(props) {
  return (
    props.showModal && (
      <div className="absolute mt-32 h-36 w-96 z-50 rounded-md shadow-md border-l flex flex-col items-center">
        <div className="bg-sky-700 h-1/3 w-full"></div>
        <div className="bg-slate-50 bg-opacity-100 h-2/3 px-4 py-2">
          {" "}
          Session expired you will be redirect to Login
        </div>
      </div>
    )
  );
}

export default Modal;
