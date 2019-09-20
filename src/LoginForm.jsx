import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = ({ onSubmit, isWaiting }) => (
  <Formik
    initialValues={{
      email: "",
      password: ""
    }}
    validationSchema={Yup.object().shape({
      password: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Required")
    })}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      <Form className="login-form">
        <div className="twelve columns">
          <label htmlFor="email">Your email</label>
          <Field type="email" name="email" className="u-full-width" />
          <ErrorMessage name="email" component="div" />
        </div>
        <div className="twelve columns">
          <label htmlFor="password">Password</label>
          <small>
            The password is <strong>password</strong>.
          </small>
          <Field type="password" name="password" className="u-full-width" />
          <ErrorMessage name="password" component="div" />
        </div>
        <button
          type="submit"
          className="button-primary u-full-width"
          disabled={isSubmitting && isWaiting}
        >
          {isSubmitting && isWaiting ? "Logging in ..." : "Login"}
        </button>
      </Form>
    )}
  </Formik>
);

export default LoginForm;
