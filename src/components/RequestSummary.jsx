import React, { Fragment } from "react";

function RequestSummary(props) {
  const { id, completed, created, last_update } = props.request;
  return (
    <Fragment>
      <section className="w-full">
        <span className="inline-block mb-2 font-semibold underline">
          Informations:
        </span>
        <table className="table-auto border-collapse border w-full p-4 text-left text-xs">
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
        <div>Reminder of the user entries on the request form</div>
      </section>
    </Fragment>
  );
}

export default RequestSummary;
