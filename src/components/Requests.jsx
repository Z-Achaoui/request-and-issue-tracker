import React, { Fragment, useState } from "react";
import newRequest from "../icons/newRequestIcon1.png";
import pendingRequest from "../icons/pendingRequestsIcon1.png";
import completedRequest from "../icons/completedRequestsIcon1.png";
import {
  getPendingRequests,
  getCompletedRequests,
} from "../services/requestService";
import { Link } from "react-router-dom";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";

function Requests(props) {
  const [pendingRequestsCurrentPage, setPendingRequestsCurrentPage] =
    useState(1);
  const [completedRequestsCurrentPage, setCompletedRequestsCurrentPage] =
    useState(1);

  const pageSize = 2;
  const allPendingRequests = getPendingRequests();
  const pendingRequests = paginate(
    allPendingRequests,
    pendingRequestsCurrentPage,
    pageSize
  );
  const allCompletedRequests = getCompletedRequests();
  const completedRequests = paginate(
    allCompletedRequests,
    completedRequestsCurrentPage,
    pageSize
  );

  const renderRequests = (badge, title, requests) => {
    return (
      <Fragment>
        <div className="flex flex-row place-items-center w-auto border shadow-sm rounded-t-md bg-cyan-50">
          <div className="border-r w-24 justify-center p-3">
            <img src={badge} alt="pendingreq" />
          </div>
          <span className="basis-3/4 pl-4 sm:pl-8 capitalize">{title}</span>
        </div>
        <div className="border-b shadow-sm rounded-md">
          <table className="w-full text-center text-sm font-normal">
            <thead>
              <tr className="capitalize">
                <th className="pl-4 py-2 border bg-gray-300">id</th>
                <th className="pl-4 py-2 border bg-gray-300">subject</th>
                <th className="pl-4 py-2 border bg-gray-300">date</th>
                <th className="pl-4 py-2 border bg-gray-300">requester</th>
                <th className="pl-4 py-2 border bg-gray-300">status</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((item, index) => (
                <tr key={index}>
                  <td className="pl-4 py-2 border bg-gray-100">{item.id}</td>
                  <td className="pl-4 py-2 border bg-gray-100">
                    {item.subject}
                  </td>
                  <td className="pl-4 py-2 border bg-gray-100">
                    {item.created}
                  </td>
                  <td className="pl-4 py-2 border bg-gray-100">
                    {item.requester}
                  </td>
                  <td className="pl-4 py-2 border bg-gray-100">
                    {item.completed ? "Completed" : "Pending"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fragment>
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
          {renderRequests(pendingRequest, "Pending Requests", pendingRequests)}
          <Pagination
            itemsCount={allPendingRequests.length}
            pageSize={pageSize}
            currentPage={pendingRequestsCurrentPage}
            onPageChange={setPendingRequestsCurrentPage}
          />
        </section>
        <section className="my-4 border shadow-sm rounded-md">
          {renderRequests(
            completedRequest,
            "Completed Requests",
            completedRequests
          )}
          <Pagination
            itemsCount={allCompletedRequests.length}
            pageSize={pageSize}
            currentPage={completedRequestsCurrentPage}
            onPageChange={setCompletedRequestsCurrentPage}
          />
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
