import React from "react";

function MessageFeed(props) {
  return (
    <div className="flex flex-row w-full">
      <div className="p-4 w-1/2 border-r">
        <div className="p-4 rounded-md bg-gray-200 shadow-md">
          <span>
            dd/mm/yyyy, hh:mm - <b>Help Desk</b> :
          </span>
          <p className="italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            illo optio fuga, iure maxime dolores. Illo tempora, blanditiis sunt
            sapiente ipsam corrupti est, ab nobis enim cum reiciendis odio!
            Iure.
          </p>
        </div>
      </div>
      <div className="p-4 w-1/2 border-l">
        <div className="p-4 rounded-md bg-gray-200 shadow-md">
          <span>
            dd/mm/yyyy, hh:mm - <b>Username</b> :
          </span>
          <p className="italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            illo optio fuga, iure maxime dolores. Illo tempora, blanditiis sunt
            sapiente ipsam corrupti est, ab nobis enim cum reiciendis odio!
            Iure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessageFeed;
