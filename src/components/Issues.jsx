import React, { Fragment } from "react";

function Issues(props) {
  return (
    <Fragment>
      <header className="flex-initial justify-center items-center w-full min-h-fit text-2xl p-4">
        <h1>Issues</h1>
      </header>
      <div className="flex-auto"></div>
      <footer className="mt-4 text-sm text-center justify-around h-auto bg-gradient-to-r from-sky-800 to-cyan-600 text-white">
        Footer
      </footer>
    </Fragment>
  );
}

export default Issues;
