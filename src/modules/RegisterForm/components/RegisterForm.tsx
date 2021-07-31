import React, { useState } from "react";
import Card from "../../../Components/Card";
import Button from "../../../Components/Button";
import { Form, Input } from "antd";
import {
  UserOutlined,
  MailOutlined,
  InfoCircleOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const registration = () => {
    setIsAuth(true);
  };
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
              name="username"
              rules={[{ required: true, message: "Введите свой email" }]}
            >
              <Input
                className="auth__input"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Ваше имя"
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
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Введите свой пароль" }]}
            >
              <Input
                className="auth__input"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Повторите пароль"
              />
            </Form.Item>
            <Form.Item>
              <Button
                onClick={registration}
                type="primary"
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
