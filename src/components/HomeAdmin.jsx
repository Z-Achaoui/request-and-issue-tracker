import React, { Fragment } from "react";

function HomeAdmin(props) {
  return (
    <Fragment>
      <header className="flex-initial justify-center items-center w-full min-h-fit text-3xl p-8 text-cyan-700 font-semibold italic">
        <h1>Home Admin</h1>
      </header>
      <div className="mt-4 flex flex-col items-center justify-around md:grid md:grid-flow-col-dense md:justify-center"></div>
      <div className="flex-auto"></div>
      <footer className="mt-4 text-sm text-center justify-around h-6 w-full bg-gradient-to-r from-sky-800 to-cyan-600 text-white">
        Footer
      </footer>
    </Fragment>
  );
}

export default HomeAdmin;
