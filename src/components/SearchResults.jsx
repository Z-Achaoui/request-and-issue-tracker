import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../app/loginSlice";
import { resetUser } from "../app/userSlice";
import searchIcon1 from "../icons/searchIcon1.png";
import { getAdminRequests, getUserRequests } from "../services/requestService";
import { paginate } from "../utils/paginate";
import Pagination from "./common/Pagination";
import RequestsItems from "./RequestsItems";

function SearchResults(props) {
  const { state } = useLocation();
  const [searchInput, setSearchInput] = useState(state);
  const [currentPage, setCurrentPage] = useState(1);
  const { id, authorization, roles } = useSelector(
    (state) => state.loadUser.value
  );
  const [allRequests, setAllRequests] = useState([]);
  const [allFilteredRequests, setAllFilteredRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const pageSize = 10;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    getRequests();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!allFilteredRequests.length && allRequests.length) {
      setAllFilteredRequests(
        allRequests.filter((r) =>
          r.subject.toUpperCase().includes(state.toUpperCase())
        )
      );
    }
  });

  useEffect(() => {
    if (!filteredRequests.length && allFilteredRequests.length) {
      setFilteredRequests(paginate(allFilteredRequests, currentPage, pageSize));
      setSearchInput(state);
    }
  });

  useEffect(() => {
    document.getElementById("search-input").value = "";
    if (state && state !== searchInput) {
      setAllFilteredRequests(
        allRequests.filter((r) =>
          r.subject.toUpperCase().includes(state.toUpperCase())
        )
      );
      setFilteredRequests([]);
    }
  }, [state, searchInput, allRequests]);

  const getRequests = async () => {
    let response = [];
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
        navigate("/");
      } else {
        setAllRequests(response.flat());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectedtPage = (target, page) => {
    setCurrentPage(page);
    setFilteredRequests([]);
  };

  return (
    <div className="flex flex-col items-center w-full h-full max-w-screen-xlg bg-white">
      <header className="flex-initial justify-center items-center w-full min-h-fit text-3xl p-8 text-cyan-700 font-semibold italic">
        <h1>Search Results</h1>
      </header>
      <div className="grid grid-flow-row-dense w-3/4 text-cyan-700 font-semibold">
        <section className="my-4 border shadow-sm rounded-md">
          <RequestsItems
            badge={searchIcon1}
            title={`Search Results for: "${searchInput}"`}
            requests={filteredRequests}
          />
          <Pagination
            itemsCount={allFilteredRequests.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handleSelectedtPage}
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

export default SearchResults;
