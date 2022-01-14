import React, { Fragment } from "react";

function RequestSummary(props) {
  const { id, completed, created, last_update, body } = props.request;
  return (
    <Fragment>
      <section className="w-full">
        <span className="inline-block mb-2 font-semibold underline">
          Informations:
        </span>
        <table className="table-auto border-collapse border w-full p-4 text-left text-sm">
          <tbody>
            <tr>
              <th className="px-2 py-2 border bg-gray-300">Number</th>
              <td className="px-2 py-2 border bg-gray-100 italic">{id}</td>
            </tr>
            <tr>
              <th className="px-2 py-2 border bg-gray-300">Status</th>
              <td className="px-2 py-2 border bg-gray-100 italic">
                {completed ? "Completed" : "Pending"}
              </td>
            </tr>
            <tr>
              <th className="px-2 py-2 border bg-gray-300">Created</th>
              <td className="px-2 py-2 border bg-gray-100 italic">{created}</td>
            </tr>
            <tr>
              <th className="px-2 py-2 border bg-gray-300">Last Update</th>
              <td className="px-2 py-2 border bg-gray-100 italic">
                {last_update}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="hidden mt-8 w-full sm:block">
        <span className="inline-block mb-2 font-semibold underline">
          Request Details:
        </span>
        <div>
          <table className="table-auto border-collapse border w-full p-4 text-left text-sm">
            <thead>
              <tr>
                <th className="px-2 py-2 border bg-gray-300">
                  Request Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 py-2 border bg-gray-100 italic">{body}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Fragment>
  );
}

export default RequestSummary;
