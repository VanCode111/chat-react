import { IndexType } from "typescript";
import { FormikErrors } from "formik";

interface validationsType {
  email?: string;
  name?: string;
  password?: string;
  repeatPassword?: string;
}

export function validations(values: validationsType, isLogin?: boolean) {
  const errors: FormikErrors<validationsType> = {};
  const validations: any = {
    email: () => {
      if (!values.email) {
        errors.email = "Введите ваш email";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Некорректный email";
      }
    },
    name: () => {
      if (!values.name) {
        errors.name = "Введите ваше имя";
      }
    },
    password: () => {
      if (!values.password) {
        errors.password = "Введите пароль";
      } else if (values.password.length < 6 && !isLogin) {
        errors.password = "Пароль должен содержать более 5 символов";
      }
    },
    repeatPassword: () => {
      if (values.repeatPassword !== values.password) {
        errors.repeatPassword = "Пароли не совпадают";
      }
    },
  };
  Object.keys(values).forEach((key: string) => {
    if (validations[key]) {
      validations[key]();
    }
  });
  return errors;
}
