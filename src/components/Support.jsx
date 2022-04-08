import React, { Fragment, useState } from "react";

function Support(props) {
  const [data, setData] = useState("");
  const handleChange = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
    setData(e.target.value);
  };
  const handleSubmit = () => {
    document.getElementById("body").style.height = "inherit";
    setData("");
    alert("message submitted");
  };
  return (
    <div className="flex flex-col items-center w-full h-full max-w-screen-xlg bg-white">
      <header className="flex-initial justify-center items-center w-full min-h-fit text-3xl p-8 text-cyan-700 font-semibold italic">
        <h1>Contact us</h1>
      </header>
      <section className="flex w-full px-4 justify-center">
        <div className="flex flex-col items-center w-full min-w-[200px] max-w-[500px]">
          <textarea
            name="message"
            id="body"
            value={data}
            onChange={handleChange}
            placeholder="Type your message here..."
            className="m-2 p-2 h-full min-h-[120px] w-full resize-none overflow-hidden bg-white border shadow-md border-gray-300 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-cyan-500 rounded-md text-xs focus:ring-1"
          ></textarea>
          <button
            type="button"
            onClick={handleSubmit}
            className=" flex justify-center items-center h-8 w-52 my-2 p-2 outline-orange-400 bg-cyan-600 border rounded-md hover:bg-cyan-500 text-white text-sm font-semibold uppercase tracking-wide"
          >
            <span>Submit</span>
          </button>
        </div>
      </section>
      <div className="flex-auto"></div>
      <footer className="mt-4 text-sm text-center justify-around h-6 w-full bg-gradient-to-r from-sky-800 to-cyan-600 text-white">
        Footer
      </footer>
    </div>
  );
}

export default Support;
