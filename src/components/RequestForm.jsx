import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../app/loginSlice";
import { resetUser } from "../app/userSlice";
import { addRequest } from "../services/requestService";
import MessageInput from "./common/MessageInput";

function RequestForm() {
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loadUser.value);

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleRequestSubmit = async (requestBody) => {
    if (subject === "" || requestBody === "") {
      alert("please fil request and subject description");
      return;
    }
    try {
      const request = {
        subject,
        body: requestBody,
        requester: user.firstName,
        user: { id: user.id },
      };
      const response = await addRequest(request, user.authorization);
      if (response === "session expired") {
        alert("session expired, you'll be redirected");
        dispatch(logout());
        dispatch(resetUser());
        navigate("/");
      } else {
        document.getElementById("subject-input").value = "";
        navigate("/requests");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex-auto flex flex-col items-center w-full h-full max-w-screen-xlg bg-white">
      <header className="flex-initial justify-center items-center w-full min-h-fit text-3xl p-8 text-cyan-700 font-semibold italic">
        <h1>New Request</h1>
      </header>
      <div className="grid grid-cols-5 w-full">
        <section className="col-start-1 col-span-5 sm:col-start-2 sm:col-span-3 flex flex-col justify-center max-w-[528px]">
          <span className="mx-4 mb-2 inline-block text-sm text-cyan-700 font-semibold">
            Subject
          </span>
          <input
            id="subject-input"
            onChange={handleSubjectChange}
            placeholder={"Subject"}
            className="mx-2 p-2 align-middle bg-white border shadow-md border-gray-300 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-cyan-500 rounded-md text-xs focus:ring-1"
          />
        </section>
        <section className="col-start-1 col-span-5 sm:col-start-2 sm:col-span-3 flex flex-col justify-center w-full">
          <span className="mx-4 mt-8 mb-2 inline-block text-sm text-cyan-700 font-semibold">
            Description
          </span>
          <MessageInput
            parentHandleSubmit={handleRequestSubmit}
            disabled={false}
            placeholder={"Request details"}
          />
        </section>
      </div>
      <div className="flex-auto"></div>
      <footer className="flex justify-center items-center py-4 mt-4 text-xs h-6 w-full bg-gradient-to-r from-sky-800 to-cyan-600 text-white">
        <span>Copyright © MyWebsite 2022</span>
      </footer>
    </div>
  );
}

export default RequestForm;
