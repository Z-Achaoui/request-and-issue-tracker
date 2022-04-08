import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { login } from "../app/loginSlice";
import { loadUser } from "../app/userSlice";
import { useState } from "react";
import Button from "./common/Button";
import Input from "./common/Input";
import { loginUser } from "../services/authService";

function LoginForm(props) {
  const initialState = {
    data: { username: "", password: "" },
    errors: {},
    readyToSubmit: false,
  };
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schemaObject = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
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
    const { username, password } = state.data;
    try {
      const response = await loginUser(username, password);

      if (response === "user not found") {
        alert("user not found");
        setState({ ...state, readyToSubmit: false });
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
        <h1 className="mt-1 mb-6 text-center text-3xl capitalize">Sign In</h1>
        {renderInput("username", "Username")}
        {renderInput("password", "Password", "password")}
        {renderButton("sing in")}
        <div className="relative mx-4 mt-3 text-xs">
          <span className="absolute left-0">Forgot your password</span>
          <span className="absolute right-0">Sign up</span>
        </div>
        <p className="mt-10 mx-4 text-xs text-center">
          Copyright © MyWebsite 2022
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
