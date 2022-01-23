import React, { Component, Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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

const initialState = {
  isSignedIn: false,
  user: {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
  },
  redirectAfterLogin: false,
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isSignedIn && !prevState.isSignedIn)
      this.handleRedirectAfterLoggin();
  }

  loadUser = (user) => {
    this.setState({ ...this.state, ...{ user }, ...{ isSignedIn: true } });
  };

  handleRedirectAfterLoggin = () => {
    this.setState({ ...this.state, ...{ redirectAfterLogin: true } });
  };

  render() {
    return (
      <div className="flex flex-col h-screen items-center">
        {this.state.isSignedIn ? (
          <Fragment>
            {console.log("home ", this.state)}
            <NavBar logoLink={logo} />
            {!this.state.redirectAfterLogin && (
              <Navigate to="/home" replace={true} />
            )}
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
            {console.log("landing page ", this.state)}
            <Route
              path="/"
              element={<LandingPage loadUser={this.loadUser} />}
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        )}
      </div>
    );
  }
}

export default App;
