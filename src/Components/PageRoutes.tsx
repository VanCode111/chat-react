import React from "react";
import { pages } from "../routes";
import { routeType } from "../routes";
import { Route } from "react-router-dom";

const PageRoutes = () => {
  return (
    <>
      {pages.map((item: routeType) => {
        return <Route path={item.path} component={item.component} exact />;
      })}
    </>
  );
};

export default PageRoutes;
