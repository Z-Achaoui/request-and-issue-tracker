import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAdminRequests } from "../services/requestService";
import { useNavigate } from "react-router-dom";
import { paginate } from "../utils/paginate";
import Pagination from "./common/Pagination";
import RequestsItems from "./RequestsItems";
import pendingRequestsIcon1 from "../icons/pendingRequestsIcon1.png";
import { logout } from "../app/loginSlice";
import { resetUser } from "../app/userSlice";

function HomeAdmin(props) {
  const [pendingRequestsCurrentPage, setPendingRequestsCurrentPage] =
    useState(1);
  const { authorization } = useSelector((state) => state.loadUser.value);
  const [allPendingRequests, setAllPendingRequests] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const pageSize = 5;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    getRequests();
    return () => controller.abort();
  }, []);

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
      const response = await getAdminRequests(authorization);

      if (response === "session expired") {
        alert("session expired, you'll be redirected");
        dispatch(logout());
        dispatch(resetUser());
        navigate("/");
      } else {
        setAllPendingRequests(response[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectedPage = (target, page) => {
    setPendingRequestsCurrentPage(page);
    setPendingRequests([]);
  };

  return (
    <div className="flex flex-col items-center w-full h-full max-w-screen-xlg bg-white">
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
            onPageChange={handleSelectedPage}
            target={"pending"}
          />
        </section>
      </div>
      <div className="flex-auto"></div>
      <footer className="flex justify-center items-center mt-4 text-xs h-6 w-full bg-gradient-to-r from-sky-800 to-cyan-600 text-white">
        <span>Copyright © MyWebsite 2022</span>
      </footer>
    </div>
  );
}

export default HomeAdmin;
