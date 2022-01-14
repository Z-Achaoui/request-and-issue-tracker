import React, { Fragment } from "react";
import MessageInput from "./common/MessageInput";

function RequestForm() {
  const handleChange = () => {
    return null;
  };

  return (
    <Fragment>
      <header className="flex-initial justify-center items-center w-full min-h-fit text-3xl p-8 text-cyan-700 font-semibold italic">
        <h1>New Request</h1>
      </header>
      <div className="md:grid md:grid-cols-5 w-full">
        <section className="col-start-2 col-span-3 flex flex-col justify-center max-w-[528px]">
          <span className="mx-4 mb-2 inline-block text-sm text-cyan-700 font-semibold">
            Subject
          </span>
          <input
            onChange={handleChange}
            placeholder={"Subject"}
            className="mx-2 p-2 align-middle bg-white border shadow-md border-gray-300 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-cyan-500 rounded-md text-xs focus:ring-1"
          />
        </section>
        <section className="col-start-2 col-span-3 flex flex-col justify-center w-full">
          <span className="mx-4 mt-8 mb-2 inline-block text-sm text-cyan-700 font-semibold">
            Description
          </span>
          <MessageInput disabled={false} placeholder={"Request details"} />
        </section>
      </div>
      <div className="flex-auto"></div>
      <footer className="mt-4 text-sm text-center justify-around h-6 w-full bg-gradient-to-r from-sky-800 to-cyan-600 text-white">
        Footer
      </footer>
    </Fragment>
  );
}

export default RequestForm;
