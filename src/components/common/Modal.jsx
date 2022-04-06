import React from "react";

function Modal(props) {
  return (
    props.showModal && (
      <div className="fixed z-50 h-full w-full bg-opacity-50 bg-cyan-50 flex justify-center items-center center">
        <div className="min-w-[250px] min-h-[190px] h-48 w-[400px] rounded-md shadow-md flex flex-col items-center justify-center bg-white">
          <div className="bg-cyan-600 h-10 w-full text-white text-lg text-center rounded-t-md font-semibold uppercase tracking-wide flex justify-center items-center">
            <span>{"Message"}</span>
          </div>
          <div className="bg-slate-50 bg-opacity-100 flex-1 w-full px-4 py-4 text-center text-sm font-semibold tracking-wide">
            Session expired you will be redirected to Login
          </div>
          <button
            onClick={() => console.log("clicked")}
            className="h-10 w-1/4 my-2 p-2 outline-orange-400 bg-cyan-600 border rounded-md hover:bg-cyan-500 text-white text-sm font-semibold uppercase tracking-wide"
          >
            Ok
          </button>
        </div>
      </div>
    )
  );
}

export default Modal;
