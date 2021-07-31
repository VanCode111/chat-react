import React from "react";
import { RegisterForm } from "../../modules";
import "./Auth.scss";
import { routeType, auth } from "../../routes";
import { Route } from "react-router-dom";

const Auth = () => {
  return (
    <div className="auth">
      <div className="auth__wrapper">
        {auth.map((item: routeType) => {
          return <Route exact path={item.path} component={item.component} />;
        })}
      </div>
    </div>
  );
};

export default Auth;
