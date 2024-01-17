import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { options } from "./constants";
import styles from "./Card.module.css";
import { getClasses } from "../../helpers/styles";
import withStyles from "../../hoc/withStyles";

export const Card = ({
  getStyles,
  children,
  // the below two props are needed if using hoc, since hoc accepts these props and deals with it so this component doesn't have to
  // color = "primary",
  // size = "sm",
  isClickable,
  isDraggable,
}) => {
  // below is how cssModules maps classNames
  // {
  //   "card": "qVzYry2rVqvv0CZTuHDp",
  //   "color-primary": "GohFCj3UhmaoZgAibVJ7",
  //   "color-secondary": "qpxaXPYeX8ZsU49OX4eG",
  //   "size-sm": "CcNBlZ8Brm8YCOyt5Ltj",
  //   "size-lg": "SKxwv9VT6hRy_kO1cmR5",
  //   "is-clickable": "xJ6OLGu3c870csg1VzQL",
  //   "is-draggable": "eaZYxL4JKscf6r_6qzkX"
  // }

  // below is not needed if we're using hoc (hoc -> withStyles)
  // const getStyles = getClasses(styles)({
  //   color,
  //   size,
  // });

  return (
    <div
      // className={classNames(styles.card, {
      //   [styles[`color-${color}`]]: color,
      //   [styles[`size-${size}`]]: size,
      //   [styles["is-clickable"]]: isClickable,
      //   [styles["is-draggable"]]: isDraggable,
      // })}
      className={getStyles("card", ["color", "size"], {
        "is-clickable": isClickable,
        "is-draggable": isDraggable,
      })}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  getStyles: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  isClickable: PropTypes.bool,
  isDraggable: PropTypes.bool,
};

// export default Card;
export default withStyles(styles)(Card);
