import React, { Fragment } from "react";
import Card from "./Card";
import requestIcon from "../icons/requestIcon.png";
import issueIcon from "../icons/issueIcon.png";
import supportIcon from "../icons/supportIcon.png";

function Home(props) {
  return (
    <Fragment>
      <header className="flex-initial justify-center items-center w-full min-h-fit text-2xl p-4">
        <h1>Home</h1>
      </header>
      <div className="mt-4 flex flex-col items-center justify-around md:grid md:grid-flow-col-dense md:justify-evenly">
        <Card imgLink={requestIcon} title={"Requests"} url={"/requests"} />
        <Card imgLink={issueIcon} title={"Issues"} url={"/issues"} />
        <Card imgLink={supportIcon} title={"Support"} url={"/support"} />
      </div>
      <div className="flex-auto"></div>
      <footer className="mt-4 text-sm text-center justify-around h-auto bg-gradient-to-r from-sky-800 to-cyan-600 text-white">
        Footer
      </footer>
    </Fragment>
  );
}

export default Home;
