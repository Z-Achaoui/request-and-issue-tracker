import React from "react";
import Joi from "joi";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schemaObject = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="box-border min-w-[280px] max-w-[360px] p-4 m-12 container mx-auto flex flex-col justify-start h-auto shadow-md rounded-lg"
      >
        <h1 className="mt-1 mb-6 text-center text-3xl capitalize">Sign In</h1>
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password", "password")}
        {this.renderButton("sing in")}
        <div className="relative mx-4 mt-3 text-xs">
          <span className="absolute left-0">Forgot your password</span>
          <span className="absolute right-0">Sign up</span>
        </div>
        <p className="mt-10 mx-4 text-xs text-center">
          Copyright © MyWebsite 2022
        </p>
      </form>
    );
  }
}

export default LoginForm;
