import { ErrorMessage, Field } from "formik";
import React from "react";
import PersonalError from "./personal/PersonalError";

const Input = (props) => {
  const { label, type, name, placeholder, formik } = props;
  // console.log(focused);
  const isError = formik.errors[name] && formik.touched[name];
  // console.log(formik.errors);
  return (
    <div className="displayform">
      <label className="form-label">{label}</label>
      <Field
        type={type}
        className={`form-control input_margin_bottom ${
          isError ? "input-err" : ""
        }`}
        placeholder={placeholder}
        name={name}
      />
      <ErrorMessage name={name} component={PersonalError} />
    </div>
  );
};

export default Input;
