import React, { FC } from "react";
import "./styles/index.scss";
import Auth from "./pages/Auth";
import { BrowserRouter as Router } from "react-router-dom";
import PageRoutes from "./Components/PageRoutes";

const App: FC = () => {
  return (
    <Router>
      <PageRoutes />
    </Router>
  );
};

export default App;
