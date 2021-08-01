import React from "react";
import Card from "../../../Components/Card";
import Button from "../../../Components/Button";
import { Form, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { FormikProps } from "formik";
import { MyFormValues } from "../containers/LoginForm";

const LoginForm: React.FC<FormikProps<MyFormValues>> = (props) => {
  const {
    touched,
    errors,
    isSubmitting,
    values,
    handleSubmit,
    handleChange,
    handleBlur,
  } = props;
  return (
    <div className="auth">
      <div className="auth__wrapper">
        <h2 className="auth__title">Войдите в аккаунт</h2>
        <p className="auth__desc">Пожалуйста, войдите в свой аккаунт</p>
        <Card className="auth__card">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="username"
              validateStatus={
                touched.email ? (errors.email ? "error" : "success") : ""
              }
              help={touched.email ? (errors.email ? errors.email : null) : null}
            >
              <Input
                id="email"
                className="auth__input"
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </Form.Item>
            <Form.Item
              name="password"
              validateStatus={
                touched.password ? (errors.password ? "error" : "success") : ""
              }
              help={
                touched.password
                  ? errors.password
                    ? errors.password
                    : null
                  : null
              }
            >
              <Input
                id="password"
                className="auth__input"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Пароль"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" className="auth__button" size="large">
                Войти
              </Button>
            </Form.Item>
            <Link to="/registration" className="auth__link-auth">
              Зарегистрироваться
            </Link>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
