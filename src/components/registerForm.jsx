import React from "react";
import Joi from "joi";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: { name: "", email: "", password: "" },
    errors: {},
  };

  schemaObject = {
    name: Joi.string().min(3).required().label("Name"),
    email: Joi.string().min(3).required().label("Email"),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{8,30}$"))
      .required()
      .label("Password"),
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
        <h1 className="mt-1 mb-6 text-center text-3xl capitalize">Sign Up</h1>
        {this.renderInput("name", "Name")}
        {this.renderInput("email", "Email", "email")}
        {this.renderInput("password", "Password", "password")}
        {this.renderButton("sign up")}
        <div className="relative mx-4 mt-3 text-xs">
          <span className="absolute left-0">
            Already have an acount ? Sign In
          </span>
        </div>
        <p className="mt-10 mx-4 text-xs text-center">
          Copyright © MyWebsite 2022
        </p>
      </form>
    );
  }
}

export default RegisterForm;
