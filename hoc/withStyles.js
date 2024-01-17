import React from "react";
import { getClasses } from "../helpers/styles";

const withStyles = (styles) => (Component) => {
  const ComponentWithStyles = (props) => {
    const allProps = { ...Component.defaultProps, ...props };

    return (
      <Component {...props} getStyles={getClasses(styles)({ ...allProps })} />
    );
  };

  ComponentWithStyles.displayName = Component.displayName;

  return ComponentWithStyles;
};

export default withStyles;
