import RegisterForm from "../components/RegisterForm";
import { withFormik, FormikErrors } from "formik";
import React from "react";
import { validations } from "../../../Validations";
export interface MyFormValues {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export default withFormik({
  mapPropsToValues: (): MyFormValues => ({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  }),

  validate: (values) => validations(values),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm",
})(RegisterForm);
