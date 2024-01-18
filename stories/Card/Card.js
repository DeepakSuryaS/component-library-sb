import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { options } from "./constants";
import styles from "./Card.module.css";
import { getClasses } from "../../helpers/styles";
import withStyles from "../../hoc/withStyles";

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

export const Card = ({ getStyles, children, isClickable, isDraggable }) => {
  return (
    <div
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

export default withStyles(styles)(Card);

// below is code without using hoc
// export const Card = ({
//   children,
//   color = "primary",
//   size = "sm",
//   isClickable,
//   isDraggable,
// }) => {
//   const getStyles = getClasses(styles)({
//     color,
//     size,
//   });

//   return (
//     <div
//       // className={classNames(styles.card, {
//       //   [styles[`color-${color}`]]: color,
//       //   [styles[`size-${size}`]]: size,
//       //   [styles["is-clickable"]]: isClickable,
//       //   [styles["is-draggable"]]: isDraggable,
//       // })}
//       className={getStyles("card", ["color", "size"], {
//         "is-clickable": isClickable,
//         "is-draggable": isDraggable,
//       })}
//     >
//       {children}
//     </div>
//   );
// };

// Card.propTypes = {
//   children: PropTypes.node.isRequired,
//   color: PropTypes.oneOf(options.colors),
//   size: PropTypes.oneOf(options.sizes),
//   isClickable: PropTypes.bool,
//   isDraggable: PropTypes.bool,
// };

// export default Card;
