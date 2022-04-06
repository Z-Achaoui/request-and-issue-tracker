import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function RequestsItems(props) {
  const { badge, title, requests } = props;
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
                  <Link
                    to={"/requests/request-status"}
                    state={{ requestId: item.id }}
                  >
                    {item.subject}
                  </Link>
                </td>
                <td className="pl-4 py-2 border bg-gray-100 hidden sm:table-cell">
                  <Link
                    to={"/requests/request-status"}
                    state={{ requestId: item.id }}
                  >
                    {item.created}
                  </Link>
                </td>
                <td className="pl-4 py-2 border bg-gray-100 hidden md:table-cell">
                  <Link
                    to={"/requests/request-status"}
                    state={{ requestId: item.id }}
                  >
                    {item.requester}
                  </Link>
                </td>
                <td className="pl-4 py-2 border bg-gray-100 hidden md:table-cell">
                  <Link
                    to={"/requests/request-status"}
                    state={{ requestId: item.id }}
                  >
                    {item.isCompleted ? "Completed" : "Pending"}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default RequestsItems;
