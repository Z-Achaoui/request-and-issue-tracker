import React from "react";
import _ from "lodash";

function Pagination(props) {
  const { itemsCount, pageSize, currentPage, onPageChange, target } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <ul className="flex flex-row justify-center items-center text-xs text-center my-4">
      {pages.map((page) => (
        <li
          key={page}
          className={
            "flex flex-row justify-center items-center border w-6 h-6 hover:bg-sky-300/30 " +
            (currentPage === page ? "bg-sky-300" : "")
          }
        >
          <button
            onClick={() => onPageChange(target, page)}
            className="cursor-pointer w-full"
          >
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
