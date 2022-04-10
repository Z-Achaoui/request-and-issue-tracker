import React from "react";
import Card from "./common/Card";
import requestIcon from "../icons/requestIcon.png";
import issueIcon from "../icons/issueIcon.png";
import supportIcon from "../icons/supportIcon.png";

function HomeUser(props) {
  return (
    <div className="flex flex-col items-center w-full h-full max-w-screen-xlg bg-white">
      <div className="mt-16 flex flex-col items-center justify-around md:grid md:grid-flow-col-dense md:justify-center">
        <Card
          imgLink={requestIcon}
          title={"Requests"}
          url={"/requests"}
          description={"Follow up on your past requests and make new ones."}
        />
        <Card
          imgLink={issueIcon}
          title={"Issues"}
          url={"/issues"}
          description={
            "Do you need to report an incident or follow up on past issues ? "
          }
        />
        <Card
          imgLink={supportIcon}
          title={"Support"}
          url={"/support"}
          description={"If your have any question, you can always contacts us."}
        />
      </div>
      <div className="flex-auto"></div>
      <footer className="flex justify-center items-center mt-4 text-xs h-6 w-full bg-gradient-to-r from-sky-800 to-cyan-600 text-white">
        <span>Copyright © MyWebsite 2022</span>
      </footer>
    </div>
  );
}

export default HomeUser;
