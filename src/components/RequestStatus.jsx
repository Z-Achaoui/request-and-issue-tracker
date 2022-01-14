import React, { Fragment } from "react";
import { getMessages } from "../services/messagesService";
import { getRequest } from "../services/requestService";
import MessageFeed from "./MessageFeed";
import MessageInput from "./common/MessageInput";
import RequestSummary from "./RequestSummary";

function RequestStatus(props) {
  const requestId = 1;
  const messages = getMessages(requestId);
  const request = getRequest(requestId);
  return (
    <Fragment>
      <header className="flex-initial w-full min-h-fit text-center text-2xl p-4">
        <h1>{`Request ${request.id} : ${request.subject}`}</h1>
      </header>
      <div className="grid grid-cols-2 grid-flow-row-dense place-items-center sm:grid-cols-3">
        <div className="col-span-2 w-full p-4 my-4 justify-center">
          <MessageInput
            disabled={request.completed}
            placeholder={"Write a new message..."}
          />
        </div>
        <div className="col-span-2">
          {request.completed ? (
            <div className="flex flex-col items-center justify-center text-center rounded-full shadow-md bg-gray-500 h-24 w-24">
              <p className="text-sm font-semibold">Closed</p>
              <p className="text-xs italic">{request.completion_date}</p>
            </div>
          ) : null}
        </div>
        <div className="row-start-5 col-span-2 flex flex-col w-full h-full p-4 my-4 text-sm items-center justify-start sm:col-start-3 sm:row-start-1 sm:row-end-5">
          <RequestSummary request={request} />
        </div>
        <div className="col-span-2 flex flex-col place-items-center w-full my-4 text-justify text-xs text-black">
          <MessageFeed messages={messages} />
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center text-center rounded-full shadow-md bg-lime-600 h-24 w-24">
          <p className="text-sm font-semibold">Started</p>
          <p className="text-xs italic">dd/mm/yyyy, hh:mm</p>
        </div>
      </div>
      <div className="flex-auto"></div>
      <footer className="mt-4 text-sm text-center justify-around h-6 w-full bg-gradient-to-r from-sky-800 to-cyan-600 text-white">
        Footer
      </footer>
    </Fragment>
  );
}

export default RequestStatus;
