import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../app/loginSlice";
import { resetUser } from "../app/userSlice";
import completedRequestsIcon1 from "../icons/completedRequestsIcon1.png";
import newRequestIcon1 from "../icons/newRequestIcon1.png";
import pendingRequestsIcon1 from "../icons/pendingRequestsIcon1.png";
import { getAdminRequests, getUserRequests } from "../services/requestService";
import { paginate } from "../utils/paginate";
import Pagination from "./common/Pagination";
import RequestsItems from "./RequestsItems";

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

  useEffect(() => {
    if (!completedRequests.length && allCompletedRequests.length)
      setCompletedRequests(
        paginate(allCompletedRequests, completedRequestsCurrentPage, pageSize)
      );
  }, [
    completedRequests,
    allCompletedRequests,
    completedRequestsCurrentPage,
    pageSize,
  ]);

  const getRequests = async () => {
    let response = "";
    try {
      const roleNameIndex = roles.findIndex(
        (role) => role.roleName === "ADMIN"
      );

      roleNameIndex === -1
        ? (response = await getUserRequests(id, authorization))
        : (response = await getAdminRequests(authorization));

      if (response === "session expired") {
        alert("session expired, you'll be redirected");
        dispatch(logout());
        dispatch(resetUser());
        navigate("/", { replace: true });
      } else {
        setAllPendingRequests(response[0]);
        setAllCompletedRequests(response[1]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectedPage = (target, page) => {
    if (target === "pending") {
      setPendingRequestsCurrentPage(page);
      setPendingRequests([]);
    }
    if (target === "completed") {
      setCompletedRequestsCurrentPage(page);
      setCompletedRequests([]);
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-full max-w-screen-xlg bg-white">
      <div className="mt-16 grid grid-flow-row-dense w-3/4 text-cyan-700 font-semibold">
        <section className="flex flex-row place-items-center text-sm my-4 w-auto border shadow-sm rounded-md bg-cyan-50 sm:text-base">
          <div className="inline-block border-r w-[72px] justify-center p-3 sm:w-24">
            <Link to="/requests/new-request">
              <img src={newRequestIcon1} alt="newreq" />
            </Link>
          </div>
          <Link to="/requests/new-request">
            <span className="basis-3/4 pl-4 sm:pl-8">New request</span>
          </Link>
        </section>
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
        <section className="my-4 border shadow-sm rounded-md">
          <RequestsItems
            badge={completedRequestsIcon1}
            title={"Completed Requests"}
            requests={completedRequests}
          />
          <Pagination
            itemsCount={allCompletedRequests.length}
            pageSize={pageSize}
            currentPage={completedRequestsCurrentPage}
            onPageChange={handleSelectedPage}
            target={"completed"}
          />
        </section>
      </div>
      <div className="flex-auto"></div>
      <footer className="mt-4 text-sm text-center justify-around h-6 w-full bg-gradient-to-r from-sky-800 to-cyan-600 text-white">
        Footer
      </footer>
    </div>
  );
}

export default Requests;
