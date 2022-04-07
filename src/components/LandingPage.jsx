import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from ".././services/authService";
import { login } from "../app/loginSlice";
import { loadUser } from "../app/userSlice";

function LandingPage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTourAccountLogin = async () => {
    const username = "tourguide@example.com";
    const password = "123456789";
    try {
      const response = await loginUser(username, password);

      if (response === "user not found") {
        alert("user not found");
        return;
      } else {
        const [user, jwt] = response;
        dispatch(
          loadUser({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            authorization: jwt,
            roles: user.roles,
            sessionExpired: false,
          })
        );
        dispatch(login());
        navigate(`/home`, { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col min-w-[280px] w-screen h-screen items-center justify-center py-8 bg-cyan-500 sm:py-24">
      <div className="h-full w-full text-green-100 bg-gradient-to-r from-sky-800 to-cyan-600 sm:grid sm:grid-flow-row sm:grid-cols-5">
        <div className="flex flex-col w-full justify-center p-2 sm:p-4 sm:col-span-3 sm:h-full">
          <div className="flex flex-col justify-center items-center text-3xl text-center sm:text-left sm:text-4xl sm:flex-row md:text-5xl">
            <img
              src={props.logoLink}
              alt="logo"
              className="h-20 items-center sm:h-24 md:h-32 "
            />
            <h1 className="ml-2 italic font-semibold tracking-normal">
              {"Request & Issue Tracker"}
            </h1>
          </div>
          <div className="mt-4 md:mt-12 self-center text-base sm:text-lg">
            <p className="pb-2">
              Welcome, to explore the site, you can go with one of the below
              options:
            </p>
            <ul className="px-4">
              <li className="list-disc list-inside">
                Sign in with your credentials
              </li>
              <li className="list-disc list-inside">
                Sign up, it's quick and easy
              </li>
              <li className="list-disc list-inside">
                Take a tour with the predefined user acount
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col h-1/3 w-full justify-center items-center p-2 sm:p-4 sm:col-span-2 sm:h-full">
          <button
            className="w-full my-2 sm:my-4 py-2 rounded-md bg-cyan-600 hover:bg-cyan-500"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
          <button
            className="w-full my-2 sm:my-4 py-2 rounded-md bg-cyan-600 hover:bg-cyan-500"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
          <button
            className="w-full my-2 sm:my-4 py-2 rounded-md bg-cyan-600 hover:bg-cyan-500"
            onClick={handleTourAccountLogin}
          >
            Predefined User Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
