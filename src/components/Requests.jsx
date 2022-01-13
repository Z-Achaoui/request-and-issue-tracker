import React, { Fragment } from "react";
import newRequest from "../icons/newRequestIcon1.png";
import pendingRequest from "../icons/pendingRequestsIcon1.png";
import completedRequest from "../icons/completedRequestsIcon1.png";
import {
  getPendingRequests,
  getCompletedRequests,
} from "../services/requestService";
import { Link } from "react-router-dom";

function Requests(props) {
  const renderPendingRequests = () => {
    return (
      <table className="w-full text-center text-sm font-normal">
        <thead>
          <tr>
            <th className="pl-4 py-2 border bg-gray-300">id</th>
            <th className="pl-4 py-2 border bg-gray-300">subject</th>
            <th className="pl-4 py-2 border bg-gray-300">date</th>
          </tr>
        </thead>
        <tbody>
          {getPendingRequests().map((item, index) => (
            <tr key={index}>
              <td className="pl-4 py-2 border bg-gray-100">{item.id}</td>
              <td className="pl-4 py-2 border bg-gray-100">{item.subject}</td>
              <td className="pl-4 py-2 border bg-gray-100">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  const renderCompletedRequests = () => {
    return (
      <table className="w-full text-center text-sm font-normal">
        <thead>
          <tr>
            <th className="pl-4 py-2 border bg-gray-300">id</th>
            <th className="pl-4 py-2 border bg-gray-300">subject</th>
            <th className="pl-4 py-2 border bg-gray-300">date</th>
          </tr>
        </thead>
        <tbody>
          {getCompletedRequests().map((item, index) => (
            <tr key={index}>
              <td className="pl-4 py-2 border bg-gray-100">{item.id}</td>
              <td className="pl-4 py-2 border bg-gray-100">{item.subject}</td>
              <td className="pl-4 py-2 border bg-gray-100">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  return (
    <Fragment>
      <header className="flex-initial justify-center items-center w-full min-h-fit text-3xl p-8 text-cyan-700 font-semibold italic">
        <h1>Requests</h1>
      </header>
      <div className="grid grid-flow-row-dense w-3/4 text-cyan-700 font-semibold">
        <section className="flex flex-row place-items-center my-4 w-auto border shadow-sm rounded-md bg-cyan-50">
          <div className="inline-block border-r w-24 justify-center p-3">
            <Link to="/requests/new-request">
              <img src={newRequest} alt="newreq" />
            </Link>
          </div>
          <span className="basis-3/4 pl-4 sm:pl-8">New request</span>
        </section>
        <section className="my-4 border shadow-sm rounded-md">
          <div className="flex flex-row place-items-center w-auto border shadow-sm rounded-t-md bg-cyan-50">
            <div className="border-r w-24 justify-center p-3">
              <img src={pendingRequest} alt="pendingreq" />
            </div>
            <span className="basis-3/4 pl-4 sm:pl-8">Pending Requests</span>
          </div>
          <div className="border-b shadow-sm rounded-md">
            {renderPendingRequests()}
          </div>
        </section>
        <section className="my-4 border shadow-sm rounded-md">
          <div className="flex flex-row place-items-center w-auto border shadow-sm rounded-t-md bg-cyan-50">
            <div className="border-r w-24 justify-center p-3">
              <img src={completedRequest} alt="pastreq" />
            </div>
            <span className="basis-3/4 pl-4 sm:pl-8">Request History</span>
          </div>
          <div className="border-b shadow-sm rounded-md">
            {renderCompletedRequests()}
          </div>
        </section>
      </div>
      <div className="flex-auto"></div>
      <footer className="mt-4 text-sm text-center justify-around h-6 w-full bg-gradient-to-r from-sky-800 to-cyan-600 text-white">
        Footer
      </footer>
    </Fragment>
  );
}

export default Requests;
