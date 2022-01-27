import React, { Fragment, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./components/common/Navbar";
import Home from "./components/Home";
import Issues from "./components/Issues";
import LandingPage from "./components/LandingPage";
import LoginForm from "./components/loginForm";
import NoPage from "./components/NoPage";
import RegisterForm from "./components/registerForm";
import RequestForm from "./components/RequestForm";
import Requests from "./components/Requests";
import RequestStatus from "./components/RequestStatus";
import Support from "./components/Support";
import logo from "./icons/logo.png";

function App() {
  const isLoggedIn = useSelector((state) => state.accountLogin.value);
  const user = useSelector((state) => state.loadUser.value);

  const [redirectAfterLogin, setRedirectAfterLogin] = useState(false);

  useEffect(() => {
    if (isLoggedIn && !redirectAfterLogin) {
      setRedirectAfterLogin(true);
    }
  });

  return (
    <div className="flex flex-col h-screen items-center">
      {isLoggedIn ? (
        <Fragment>
          {console.log("home ", user)}
          <NavBar logoLink={logo} />
          {!redirectAfterLogin && <Navigate to="/home" replace={true} />}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/requests/new-request" element={<RequestForm />} />
            <Route
              path="/requests/request-status"
              element={<RequestStatus />}
            />
            <Route path="/issues" element={<Issues />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Fragment>
      ) : (
        <Routes>
          {console.log("landing page ", user)}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
