import React from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { useState } from "react";
import Button from "./common/Button";
import Input from "./common/Input";
import { useEffect } from "react";
import { registerUser } from "../services/resgisterService";

function RegisterForm(props) {
  const initialState = {
    data: { firstName: "", lastName: "", email: "", password: "" },
    errors: {},
    readyToSubmit: false,
  };
  const [state, setState] = useState(initialState);

  const navigate = useNavigate();

  const schemaObject = {
    firstName: Joi.string().min(3).required().label("First Name"),
    lastName: Joi.string().min(3).required().label("Last Name"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .label("Email"),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{8,30}$"))
      .message(`"Password" must be at least 3 alphanumeric characters`)
      .required()
      .label("Password"),
  };

  useEffect(() => {
    const controller = new AbortController();
    if (state.readyToSubmit) doSubmit();
    return () => controller.abort();
  });

  const validate = () => {
    const { error } = Joi.object(schemaObject).validate(
      { ...state.data },
      { abortEarly: false }
    );
    if (!error) return null;
    const errors = {};
    error.details.map((item) => (errors[item.path[0]] = item.message));
    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = Joi.object({ [name]: schemaObject[name] });
    const { error } = schema.validate({ ...obj });
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    const errors = { ...state.errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...state.data };
    data[input.name] = input.value;
    setState({ ...state, data, errors });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setState({ errors: errors || {} });
    if (errors) return;
    setState({ ...state, readyToSubmit: true });
  };

  const doSubmit = async () => {
    const { firstName, lastName, email, password } = state.data;
    try {
      await registerUser(firstName, lastName, email, password);
      navigate("/login", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const renderButton = (label) => {
    return <Button label={label} />;
  };

  const renderInput = (name, label, type = "text") => {
    const { data, errors } = state;
    return (
      <Input
        name={name}
        label={label}
        type={type}
        value={data[name]}
        onChange={handleChange}
        error={errors[name]}
      />
    );
  };

  return (
    <div className="flex flex-col items-center w-full h-full max-w-screen-xlg bg-white">
      <form
        onSubmit={handleSubmit}
        className="box-border min-w-[280px] max-w-[360px] p-4 m-12 container mx-auto flex flex-col justify-start h-auto shadow-md rounded-lg"
      >
        <h1 className="mt-1 mb-6 text-center text-3xl capitalize">Sign Up</h1>
        {renderInput("firstName", "First Name")}
        {renderInput("lastName", "Last Name")}
        {renderInput("email", "Email", "email")}
        {renderInput("password", "Password", "password")}
        {renderButton("sign up")}
        <div className="relative mx-4 mt-3 text-xs">
          <span className="absolute left-0">
            Already have an acount ? Sign In
          </span>
        </div>
        <p className="mt-10 mx-4 text-xs text-center">
          Copyright © MyWebsite 2022
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
