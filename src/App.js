import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./components/common/Navbar";
import Modal from "./components/common/Modal";
import Home from "./components/Home";
import Issues from "./components/Issues";
import LandingPage from "./components/LandingPage";
import LoginForm from "./components/LoginForm";
import NoPage from "./components/NoPage";
import RegisterForm from "./components/RegisterForm";
import RequestForm from "./components/RequestForm";
import Requests from "./components/Requests";
import RequestStatus from "./components/RequestStatus";
import Support from "./components/Support";
import logo from "./icons/logo.png";
import SearchResults from "./components/SearchResults";

function App() {
  const isLoggedIn = useSelector((state) => state.accountLogin.value);
  const { sessionExpired } = useSelector((state) => state.loadUser.value);

  return (
    <div className="flex flex-col h-screen items-center">
      {isLoggedIn ? (
        <Fragment>
          <NavBar logoLink={logo} />
          <Modal showModal={sessionExpired} />
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
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Fragment>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage logoLink={logo} />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
