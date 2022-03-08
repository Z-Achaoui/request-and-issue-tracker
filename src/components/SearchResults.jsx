import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import searchIcon1 from "../icons/searchIcon1.png";
import { getAdminRequests, getUserRequests } from "../services/requestService";
import { paginate } from "../utils/paginate";
import Pagination from "./common/Pagination";
import RequestsItems from "./RequestsItems";

function SearchResults(props) {
  const { searchInput } = useLocation().state;
  const [currentPage, setCurrentPage] = useState(1);
  const { id, authorization, roles } = useSelector(
    (state) => state.loadUser.value
  );
  const [allRequests, setAllRequests] = useState([]);
  const [allFilteredRequests, setAllFilteredRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const pageSize = 5;

  useEffect(() => {
    const controller = new AbortController();
    if (!allFilteredRequests.length) getRequests();
    return () => controller.abort();
  });

  useEffect(() => {
    if (!filteredRequests.length && allFilteredRequests.length)
      setFilteredRequests(paginate(allFilteredRequests, currentPage, pageSize));
  }, [filteredRequests, allFilteredRequests, currentPage, pageSize]);

  useEffect(() => {
    document.getElementById("search-input").value = "";
  }, [searchInput]);

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
      setAllRequests([allPendingRequests, allCompletedRequests].flat());
      setAllFilteredRequests(
        allRequests.filter((r) =>
          r.subject.toUpperCase().includes(searchInput.toUpperCase())
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  //   const updateFilteredRequests = () => {
  //     setAllFilteredRequests(
  //       allRequests.filter((r) =>
  //         r.subject.toUpperCase().includes(searchInput.toUpperCase())
  //       )
  //     );
  //     setFilteredRequests(paginate(allFilteredRequests, currentPage, pageSize));
  //   };

  const handleSelectedtPage = (target, page) => {
    setCurrentPage(page);
    setFilteredRequests([]);
  };

  return (
    <Fragment>
      <header className="flex-initial justify-center items-center w-full min-h-fit text-3xl p-8 text-cyan-700 font-semibold italic">
        <h1>Search Results</h1>
      </header>
      <div className="grid grid-flow-row-dense w-3/4 text-cyan-700 font-semibold">
        <section className="my-4 border shadow-sm rounded-md">
          <RequestsItems
            badge={searchIcon1}
            title={`Search Results for: "${searchInput}"`}
            requests={filteredRequests}
            searchInput={searchInput}
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
    </Fragment>
  );
}

export default SearchResults;
