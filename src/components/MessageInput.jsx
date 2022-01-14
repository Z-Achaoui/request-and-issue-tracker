import React, { Fragment } from "react";
import { IoSendOutline, IoAttachOutline } from "react-icons/io5";

function MessageInput(props) {
  const handleChange = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <Fragment>
      <div className="flex flex-row items-start justify-center w-full">
        <textarea
          disabled={props.disabled}
          onChange={handleChange}
          wrap="hard"
          placeholder="Write a new message..."
          className="mx-2 p-2 align-middle block w-10/12 max-w-lg h-full resize-none overflow-hidden bg-white border shadow-md border-gray-300 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-cyan-500 rounded-md text-xs focus:ring-1"
        />
        <div className="flex flex-col justify-center items-center w-[6rem]">
          <button
            disabled={props.disabled}
            className="flex flex-row justify-center items-center mx-2 mb-px p-1 w-full border bg-gray-500 rounded-md shadow-md outline-orange-400  hover:bg-gray-400 text-white text-xs italic"
          >
            <span className="px-2 h-full self-center">Send</span>
            <IoSendOutline className="text-xs" />
          </button>
          <button
            disabled={props.disabled}
            className="flex flex-row justify-center items-center mx-2 p-0.5 w-full border bg-gray-500 rounded-md shadow-md outline-orange-400  hover:bg-gray-400 text-white text-xs italic"
          >
            <IoAttachOutline className="text-lg" />
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default MessageInput;
