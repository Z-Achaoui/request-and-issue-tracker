import React from "react";

function Issues(props) {
  return (
    <div className="flex-auto flex flex-col items-center w-full h-full max-w-screen-xlg bg-white">
      <header className="flex-initial justify-center items-center w-full min-h-fit text-3xl p-8 text-cyan-700 font-semibold italic">
        <h1>Issues</h1>
      </header>
      <div className="flex-auto"></div>
      <footer className="flex justify-center items-center py-4 mt-4 text-xs h-6 w-full bg-gradient-to-r from-sky-800 to-cyan-600 text-white">
        <span>Copyright © MyWebsite 2022</span>
      </footer>
    </div>
  );
}

export default Issues;
