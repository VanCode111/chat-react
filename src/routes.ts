import Auth from "./pages/Auth";
import { RegisterForm, LoginForm } from "./modules";
import { FC } from "react";

export interface routeType {
  path: string[] | string;
  component: FC;
}

export const pages: routeType[] = [
  {
    path: ["/login", "/"],
    component: Auth,
  },
  {
    path: "/registration",
    component: Auth,
  },
];

export const auth: routeType[] = [
  {
    path: "/registration",
    component: RegisterForm,
  },
  {
    path: ["/login", "/"],
    component: LoginForm,
  },
];
