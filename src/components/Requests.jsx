import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import newRequestIcon1 from "../icons/newRequestIcon1.png";
import pendingRequestsIcon1 from "../icons/pendingRequestsIcon1.png";
import completedRequestsIcon1 from "../icons/completedRequestsIcon1.png";
import { getUserRequests, getAdminRequests } from "../services/requestService";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";

function Requests(props) {
  const [pendingRequestsCurrentPage, setPendingRequestsCurrentPage] =
    useState(1);
  const [completedRequestsCurrentPage, setCompletedRequestsCurrentPage] =
    useState(1);
  const { id, authorization, roles } = useSelector(
    (state) => state.loadUser.value
  );
  const [allPendingRequests, setAllPendingRequests] = useState([]);
  const [allCompletedRequests, setAllCompletedRequests] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [completedRequests, setCompletedRequests] = useState([]);
  const pageSize = 5;

  useEffect(() => {
    const controller = new AbortController();
    if (!allPendingRequests.length && !allCompletedRequests.length)
      getRequests();
    return () => controller.abort();
  });

  useEffect(() => {
    if (!pendingRequests.length && allPendingRequests.length)
      setPendingRequests(
        paginate(allPendingRequests, pendingRequestsCurrentPage, pageSize)
      );
  });

  useEffect(() => {
    if (!completedRequests.length && allCompletedRequests.length)
      setCompletedRequests(
        paginate(allCompletedRequests, completedRequestsCurrentPage, pageSize)
      );
  });

  const getRequests = async () => {
    let [allPendingRequests, allCompletedRequests] = [[], []];
    try {
      const roleNameIndex = roles.findIndex(
        (role) => role.roleName === "ADMIN"
      );
      roleNameIndex === -1
        ? ([allPendingRequests, allCompletedRequests] = await getUserRequests(
            id,
            authorization
          ))
        : ([allPendingRequests, allCompletedRequests] = await getAdminRequests(
            authorization
          ));

      setAllPendingRequests(allPendingRequests);
      setAllCompletedRequests(allCompletedRequests);
    } catch (error) {
      console.log(error);
    }
  };

  const renderRequests = (badge, title, requests) => {
    return (
      <Fragment>
        <div className="flex flex-row place-items-center text-sm w-auto border shadow-sm rounded-t-md bg-cyan-50 sm:text-base">
          <div className="border-r w-[72px] justify-center p-3 sm:w-24">
            <img src={badge} alt="pendingreq" />
          </div>
          <span className="basis-3/4 pl-4 sm:pl-8 capitalize">{title}</span>
        </div>
        <div className="border-b shadow-sm rounded-md">
          <table className="w-full text-center text-xs font-normal sm:text-sm">
            <thead>
              <tr className="capitalize">
                <th className="pl-4 py-2 border bg-gray-300">id</th>
                <th className="pl-4 py-2 border bg-gray-300">subject</th>
                <th className="pl-4 py-2 border bg-gray-300 hidden sm:table-cell">
                  date
                </th>
                <th className="pl-4 py-2 border bg-gray-300 hidden md:table-cell">
                  requester
                </th>
                <th className="pl-4 py-2 border bg-gray-300 hidden md:table-cell">
                  status
                </th>
              </tr>
            </thead>
            <tbody>
              {requests.map((item, index) => (
                <tr key={index}>
                  <td className="pl-4 py-2 border bg-gray-100">
                    <Link
                      to={"/requests/request-status"}
                      state={{ requestId: item.id }}
                    >
                      {item.id}
                    </Link>
                  </td>
                  <td className="pl-4 py-2 border bg-gray-100">
                    {item.subject}
                  </td>
                  <td className="pl-4 py-2 border bg-gray-100 hidden sm:table-cell">
                    {item.created}
                  </td>
                  <td className="pl-4 py-2 border bg-gray-100 hidden md:table-cell">
                    {item.requester}
                  </td>
                  <td className="pl-4 py-2 border bg-gray-100 hidden md:table-cell">
                    {item.isCompleted ? "Completed" : "Pending"}
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
        <section className="flex flex-row place-items-center text-sm my-4 w-auto border shadow-sm rounded-md bg-cyan-50 sm:text-base">
          <div className="inline-block border-r w-[72px] justify-center p-3 sm:w-24">
            <Link to="/requests/new-request">
              <img src={newRequestIcon1} alt="newreq" />
            </Link>
          </div>
          <span className="basis-3/4 pl-4 sm:pl-8">New request</span>
        </section>
        <section className="my-4 border shadow-sm rounded-md">
          {renderRequests(
            pendingRequestsIcon1,
            "Pending Requests",
            pendingRequests
          )}
          <Pagination
            itemsCount={allPendingRequests.length}
            pageSize={pageSize}
            currentPage={pendingRequestsCurrentPage}
            onPageChange={setPendingRequestsCurrentPage}
          />
        </section>
        <section className="my-4 border shadow-sm rounded-md">
          {renderRequests(
            completedRequestsIcon1,
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
