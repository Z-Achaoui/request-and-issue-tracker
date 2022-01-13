import React, { Fragment } from "react";

function RequestSummary(props) {
  const requestSummary = [
    { id: "XXXX" },
    { status: "open" },
    { created: "hh:mm, dd/mm/yyyy" },
    { last_update: "hh:mm, dd/mm/yyyy" },
  ];
  return (
    <Fragment>
      <section className="w-full">
        <span className="inline-block mb-2 font-semibold underline">
          Informations:
        </span>
        <table className="table-auto border-collapse border w-full p-4 text-left text-xs">
          <tbody>
            {requestSummary.map((item, index) => {
              return (
                <tr key={index.toString()}>
                  <th className="px-2 py-2 border bg-gray-300">
                    {Object.keys(item)[0]}
                  </th>
                  <td className="px-2 py-2 border bg-gray-100 italic">
                    {Object.values(item)[0]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section className="hidden mt-8 w-full sm:block">
        <span className="inline-block mb-2 font-semibold underline">
          Request Details:
        </span>
        <div>Reminer of the user entries on the request form</div>
      </section>
    </Fragment>
  );
}

export default RequestSummary;
