import React, { Fragment } from "react";
import MessageUnit from "./MessageUnit";

function MessageFeed(props) {
  return (
    <Fragment>
      {props.messages.map((message) => (
        <MessageUnit key={message.id} message={message} />
      ))}
    </Fragment>
  );
}

export default MessageFeed;
