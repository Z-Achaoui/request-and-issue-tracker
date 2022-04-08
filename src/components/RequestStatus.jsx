import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getMessages, addMessage } from "../services/messagesService";
import { closeRequest, getRequest } from "../services/requestService";
import { logout } from "../app/loginSlice";
import { resetUser } from "../app/userSlice";
import MessageInput from "./common/MessageInput";
import MessageFeed from "./MessageFeed";
import RequestSummary from "./RequestSummary";

function RequestStatus(props) {
  const [request, setRequest] = useState({});
  const [messages, setMessages] = useState([]);
  const { requestId } = useLocation().state;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { firstName, lastName, authorization, roles } = useSelector(
    (state) => state.loadUser.value
  );

  useEffect(() => {
    if (!request.hasOwnProperty("id")) {
      getUserRequest();
    }
  }, [request]);

  useEffect(() => {
    if (!request.hasOwnProperty("id") && !messages.lengh) getRequestMessages();
  }, [request, messages]);

  const getUserRequest = async () => {
    try {
      const response = await getRequest(requestId, authorization);

      if (response === "session expired") {
        alert("session expired, you'll be redirected");
        dispatch(logout());
        dispatch(resetUser());
        navigate("/");
      } else {
        setRequest(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRequestMessages = async () => {
    try {
      const response = await getMessages(requestId, authorization);

      if (response === "session expired") {
        alert("session expired, you'll be redirected");
        dispatch(logout());
        dispatch(resetUser());
        navigate("/");
      } else {
        setMessages(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleMessageSubmit = async (message) => {
    try {
      const response = await addMessage(
        requestId,
        authorization,
        message,
        firstName + " " + lastName
      );

      if (response === "session expired") {
        alert("session expired, you'll be redirected");
        dispatch(logout());
        dispatch(resetUser());
        navigate("/");
      } else {
        setMessages(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseRequest = async () => {
    try {
      const response = await closeRequest(requestId, authorization);

      if (response === "session expired") {
        alert("session expired, you'll be redirected");
        dispatch(logout());
        dispatch(resetUser());
        navigate("/");
      } else {
        setRequest(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-full max-w-screen-xlg bg-white">
      <header className="flex-initial w-full min-h-fit p-4 mt-4 text-center text-2xl text-cyan-700 font-semibold italic">
        <h1>{`Request # ${request.id} : ${request.subject}`}</h1>
      </header>
      <div className="w-full grid grid-cols-2 grid-flow-row-dense place-items-center sm:grid-cols-3">
        <div className="col-span-2 w-full p-4 my-4 justify-center">
          <MessageInput
            parentHandleSubmit={handleMessageSubmit}
            disabled={request.isCompleted}
            placeholder={"Write a new message..."}
          />
        </div>
        <div className="col-span-2">
          {request.isCompleted ? (
            <div className="flex flex-col items-center justify-center text-center rounded-full shadow-md bg-gray-500 h-24 w-24">
              <p className="text-sm font-semibold">Closed</p>
              <p className="text-[10px] italic">{request.completed}</p>
            </div>
          ) : null}
        </div>
        <div className="row-start-5 col-span-2 flex flex-col w-full h-full p-4 my-4 sm:border-l text-sm items-center justify-start sm:col-start-3 sm:row-start-1 sm:row-end-5">
          {roles.find((r) => r.roleName === "ADMIN") && (
            <button
              className="rounded-md shadow-md bg-red-500 outline-1 outline-red-600 px-2 py-1 italic self-end text-xs text-lime-300"
              onClick={handleCloseRequest}
              disabled={request.isCompleted}
            >
              Close Request
            </button>
          )}
          <RequestSummary request={request} />
        </div>
        <div className="col-span-2 flex flex-col place-items-center w-full my-4 text-justify break-words text-xs text-black">
          <MessageFeed messages={messages} />
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center text-center rounded-full shadow-md bg-lime-600 h-24 w-24">
          <p className="text-sm font-semibold">Started</p>
          <p className="text-[10px] italic">{request.created}</p>
        </div>
      </div>
      <div className="flex-auto"></div>
      <footer className="mt-4 text-sm text-center justify-around h-6 w-full bg-gradient-to-r from-sky-800 to-cyan-600 text-white">
        Footer
      </footer>
    </div>
  );
}

export default RequestStatus;
