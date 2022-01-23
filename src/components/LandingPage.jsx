import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage(props) {
  const navigate = useNavigate();
  const handleTourAccountLogin = () => {
    //fetch to database tourguide@example.com & password
    //if id existing then Load User and navigate to home page

    props.loadUser({
      id: 1,
      firstName: "Tour",
      lastName: "Guide",
      email: "tourguide@example.com",
    });
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
