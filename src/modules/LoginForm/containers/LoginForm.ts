import LoginForm from "../components/LoginForm";
import { withFormik, FormikErrors } from "formik";
import React from "react";
import { validations } from "../../../Validations";
export interface MyFormValues {
  email: string;
  password: string;
}

export default withFormik({
  mapPropsToValues: (): MyFormValues => ({
    email: "",
    password: "",
  }),

  validate: (values) => validations(values, true),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm",
})(LoginForm);
