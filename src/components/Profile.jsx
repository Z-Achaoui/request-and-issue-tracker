import React from "react";

function Profile(props) {
  return (
    <div className="flex flex-col items-center w-full h-full max-w-screen-xlg bg-white">
      <header className="flex-initial justify-center items-center w-full min-h-fit text-3xl p-8 text-cyan-700 font-semibold italic">
        <h1>Account information</h1>
      </header>
      <section className="flex w-full px-4 justify-center"></section>
      <div className="flex-auto"></div>
      <footer className="mt-4 text-sm text-center justify-around h-6 w-full bg-gradient-to-r from-sky-800 to-cyan-600 text-white">
        Footer
      </footer>
    </div>
  );
}

export default Profile;