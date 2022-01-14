import React, { Fragment } from "react";
import Card from "./common/Card";
import requestIcon from "../icons/requestIcon.png";
import issueIcon from "../icons/issueIcon.png";
import supportIcon from "../icons/supportIcon.png";

function Home(props) {
  return (
    <Fragment>
      <header className="flex-initial justify-center items-center w-full min-h-fit text-3xl p-8 text-cyan-700 font-semibold italic">
        <h1>Home</h1>
      </header>
      <div className="mt-4 flex flex-col items-center justify-around md:grid md:grid-flow-col-dense md:justify-center">
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
      <footer className="mt-4 text-sm text-center justify-around h-6 w-full bg-gradient-to-r from-sky-800 to-cyan-600 text-white">
        Footer
      </footer>
    </Fragment>
  );
}

export default Home;
