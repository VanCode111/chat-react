import React from "react";
import Card from "../../../Components/Card";
import Button from "../../../Components/Button";
import { Form, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const LoginForm = () => {
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
              rules={[{ required: true, message: "Введите свой email" }]}
            >
              <Input
                className="auth__input"
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Введите свой пароль" }]}
            >
              <Input
                className="auth__input"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Пароль"
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
