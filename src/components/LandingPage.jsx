import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../app/loginSlice";
import { loadUser } from "../app/userSlice";
import { loginUser } from ".././services/authService";

function LandingPage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTourAccountLogin = async () => {
    const username = "tourguide@example.com";
    const password = "123456789";
    try {
      const [user, jwt] = await loginUser(username, password);
      dispatch(
        loadUser({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          authorization: jwt,
          roles: user.roles,
        })
      );
      dispatch(login());
    } catch (err) {
      console.log(err);
    }
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
