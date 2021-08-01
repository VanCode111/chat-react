import RegisterForm from "../components/RegisterForm";
import { withFormik, FormikErrors } from "formik";
import React from "react";
export interface MyFormValues {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export default withFormik({
  mapPropsToValues: (): MyFormValues => ({
    name: "",
    email: "email",
    password: "",
    repeatPassword: "",
  }),

  validate: (values) => {
    const errors: FormikErrors<MyFormValues> = {};

    if (!values.name) {
      errors.name = "Введите ваше имя";
    }

    if (!values.email) {
      errors.email = "Введите ваш email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Некорректный email";
    }

    if (!values.password) {
      errors.password = "Введите пароль";
    } else if (values.password.length < 6) {
      errors.password = "Пароль должен содержать более 5 символов";
    }
    if (values.repeatPassword !== values.password) {
      errors.repeatPassword = "Пароли не совпадают";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm",
})(RegisterForm);
