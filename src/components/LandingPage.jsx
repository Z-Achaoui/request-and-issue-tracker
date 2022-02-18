import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../app/loginSlice";
import { loadUser } from "../app/userSlice";

function LandingPage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTourAccountLogin = async () => {
    const jwt = await fetch("http://localhost:8080/login", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: "tourguide@example.com",
        password: "123456789",
      }),
    }).then((response) => response.headers.get("Authorization"));

    const user = await fetch("http://localhost:8080/users/user", {
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization: jwt,
      },
      body: JSON.stringify({
        email: "tourguide@example.com",
      }),
    }).then((response) => response.json());

    dispatch(login());
    dispatch(
      loadUser({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        authorization: jwt,
      })
    );
  };

  return (
    <div className="flex flex-col top-0 h-screen w-screen text-green-100 bg-gradient-to-r from-sky-800 to-cyan-600">
      <h1>Landing page</h1>
      <p>
        cover view port and display options : login, register or explore with
        example user
      </p>
      <button onClick={() => navigate("/login")}>Sign In</button>
      <button onClick={() => navigate("/register")}>Sign Up</button>
      <button onClick={handleTourAccountLogin}>
        Tour with predefined user account
      </button>
    </div>
  );
}

export default LandingPage;
