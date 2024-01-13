import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { options } from "./constants";
import "./Card.css";

export const Card = ({
  children = "I'm a card!",
  color = "primary",
  size = "sm",
  isClickable,
  isDragable,
}) => {
  return (
    <div
      className={classNames("card", {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
        "is-clickable": isClickable,
        "is-dragable": isDragable,
      })}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  isClickable: PropTypes.bool,
  isDragable: PropTypes.bool,
};

export default Card;