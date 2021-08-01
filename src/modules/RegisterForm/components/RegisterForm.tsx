import React, { useState } from "react";
import Card from "../../../Components/Card";
import Button from "../../../Components/Button";
import { Form, Input } from "antd";
import { FormikProps } from "formik";
import { MyFormValues } from "../containers/RegisterForm";
import {
  UserOutlined,
  MailOutlined,
  InfoCircleOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const RegisterForm: React.ComponentType<FormikProps<MyFormValues>> = (
  props
) => {
  const {
    touched,
    errors,
    isSubmitting,
    values,
    handleSubmit,
    handleChange,
    handleBlur,
  } = props;
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const registration = () => {
    setIsAuth(false);
  };

  console.log(`My name is ${handleSubmit}`);
  return (
    <div className="auth__registration">
      <h2 className="auth__title">Зарегистрируйтесь</h2>
      <p className="auth__desc">
        Для входа в чат, вам нужно зарегистрироваться
      </p>
      <Card className="auth__card">
        {!isAuth ? (
          <Form
            name="normal_login"
            className="login-form"
            onFinish={handleSubmit}
          >
            <Form.Item
              name="email"
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
              name="username"
              validateStatus={
                touched.name ? (errors.name ? "error" : "success") : ""
              }
              help={touched.name ? (errors.name ? errors.name : null) : null}
            >
              <Input
                id="name"
                className="auth__input"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Ваше имя"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
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
                className="auth__input"
                id="password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Пароль"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </Form.Item>
            <Form.Item
              name="RepeatPassword"
              validateStatus={
                touched.repeatPassword
                  ? errors.repeatPassword
                    ? "error"
                    : "success"
                  : ""
              }
              help={
                touched.repeatPassword
                  ? errors.repeatPassword
                    ? errors.repeatPassword
                    : null
                  : null
              }
            >
              <Input
                id="repeatPassword"
                className="auth__input"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Повторите пароль"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.repeatPassword}
              />
            </Form.Item>
            <Form.Item>
              <Button
                onClick={registration}
                type="primary"
                htmlType="submit"
                className="auth__button"
                size="large"
              >
                ЗАРЕГИСТРИРОВАТЬСЯ
              </Button>
            </Form.Item>
            <Link to="/login" className="auth__link-auth">
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className="auth__access">
            <InfoCircleOutlined className="auth__icon-info" />
            <h3 className="auth__access-title">Подтвердите свой аккаунт</h3>
            <p className="auth__access-desc">
              На Вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта.
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default RegisterForm;
