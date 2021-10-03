import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";

const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;
  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input name="username" type="text" />
        </div>
        <div>
          {displayName === "Sign Up" && (
            <div>
              <div>
                <label htmlFor="nameofuser">
                  <small>Name</small>
                </label>
                <input name="nameofuser" type="nameofuser" />
              </div>
              <div>
                <label htmlFor="email">
                  <small>Email</small>
                </label>
                <input name="email" type="email" />
              </div>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      formName === "signup"
        ? dispatch(
            authenticate(
              username,
              password,
              formName,
              evt.target.email.value,
              evt.target.nameofuser.value
            )
          )
        : dispatch(authenticate(username, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
