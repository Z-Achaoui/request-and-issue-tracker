import React, { Fragment } from "react";

function MessageUnit(props) {
  const { date, sender, body } = props.message;
  return (
    <Fragment>
      <div className="flex flex-row w-full">
        <div className="p-4 w-1/2 border-r">
          {sender !== "user" ? (
            <div className="p-4 rounded-md bg-gray-200 shadow-md">
              <span className="capitalize">
                {date} - <b>{sender}</b> :
              </span>
              <p className="italic">{body}</p>
            </div>
          ) : null}
        </div>
        <div className="p-4 w-1/2 border-l">
          {sender === "user" ? (
            <div className="p-4 rounded-md bg-gray-200 shadow-md">
              <span className="capitalize">
                {date} - <b>{sender}</b> :
              </span>
              <p className="italic">{body}</p>
            </div>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
}

export default MessageUnit;
