import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAdminRequests } from "../services/requestService";
import { paginate } from "../utils/paginate";
import Pagination from "./common/Pagination";
import RequestsItems from "./RequestsItems";
import pendingRequestsIcon1 from "../icons/pendingRequestsIcon1.png";

function HomeAdmin(props) {
  const [pendingRequestsCurrentPage, setPendingRequestsCurrentPage] =
    useState(1);
  const { authorization } = useSelector((state) => state.loadUser.value);
  const [allPendingRequests, setAllPendingRequests] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const pageSize = 10;

  useEffect(() => {
    const controller = new AbortController();
    if (!allPendingRequests.length) getRequests();
    return () => controller.abort();
  });

  useEffect(() => {
    if (!pendingRequests.length && allPendingRequests.length)
      setPendingRequests(
        paginate(allPendingRequests, pendingRequestsCurrentPage, pageSize)
      );
  }, [
    pendingRequests,
    allPendingRequests,
    pendingRequestsCurrentPage,
    pageSize,
  ]);

  const getRequests = async () => {
    try {
      const allRequests = await getAdminRequests(authorization);
      const allPendingRequests = allRequests[0];
      setAllPendingRequests(allPendingRequests);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <h2 className="self-start text-2xl mx-4 mb-2 text-cyan-700 font-semibold italic md:mt-8">
        Pending requests
      </h2>
      <div className="grid grid-flow-row-dense w-3/4 text-cyan-700 font-semibold">
        <section className="my-4 border shadow-sm rounded-md">
          <RequestsItems
            badge={pendingRequestsIcon1}
            title={"Pending Requests"}
            requests={pendingRequests}
          />
          <Pagination
            itemsCount={allPendingRequests.length}
            pageSize={pageSize}
            currentPage={pendingRequestsCurrentPage}
            onPageChange={setPendingRequestsCurrentPage}
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

export default HomeAdmin;
