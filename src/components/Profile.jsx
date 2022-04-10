import React from "react";
import { useSelector } from "react-redux";

function Profile(props) {
  const { firstName, lastName, email } = useSelector(
    (state) => state.loadUser.value
  );
  return (
    <div className="flex flex-col items-center w-full h-full max-w-screen-xlg bg-white">
      <header className="flex-initial justify-center items-center w-full min-h-fit text-3xl p-8 text-cyan-700 font-semibold italic">
        <h1>Account information</h1>
      </header>
      <section className="flex w-full px-8 justify-start">
        <table className="p-4 text-base text-left text-cyan-800">
          <tbody>
            <tr>
              <th className="xsm:px-2 py-2">Name:</th>
              <td className="px-2 xsm:px-6 py-2 italic">{`${firstName} ${lastName}`}</td>
            </tr>
            <tr>
              <th className="xsm:px-2 py-2">Email:</th>
              <td className="px-2 xsm:px-6 py-2 italic">{email}</td>
            </tr>
            <tr>
              <th className="xsm:px-2 py-2">Password:</th>
              <td className="px-2 xsm:px-6 py-2 italic">
                **************
                <a className="underline text-cyan-600 text-sm px-4" href="#">
                  renew password
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <div className="flex-auto"></div>
      <footer className="flex justify-center items-center mt-4 text-xs h-6 w-full bg-gradient-to-r from-sky-800 to-cyan-600 text-white">
        <span>Copyright © MyWebsite 2022</span>
      </footer>
    </div>
  );
}

export default Profile;
