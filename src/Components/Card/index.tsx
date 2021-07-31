import React from "react";
import "./Card.scss";
import classNames from "classnames";

interface CardProps {
  className: string;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return <div className={classNames("card", className)}>{children}</div>;
};

export default Card;
