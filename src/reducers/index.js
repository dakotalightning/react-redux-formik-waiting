import { combineReducers } from "redux";

export const constants = {
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL"
};

export const login = ({ password, email }) => ({
  type: constants.LOGIN,
  email,
  password
});

export const exampleError = ({ password }) => {
  if (password !== "password") {
    return "Wrong Password";
  }
  return "An error occured, fix the thing.";
};

const LoginReducer = (session = { ok: false }, action) => {
  switch (action.type) {
    case constants.LOGIN: {
      return {
        ok: false
      };
    }
    case constants.LOGIN_SUCCESS: {
      return {
        ...session,
        ok: true
      };
    }
    case constants.LOGIN_FAIL: {
      return {
        ...session,
        error: exampleError(action),
        ok: false
      };
    }
    default:
      return session;
  }
};

export default combineReducers({
  session: LoginReducer
});
