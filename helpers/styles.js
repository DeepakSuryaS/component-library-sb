import classNames from "classnames";

const getModuleClasses = (cssModule, classKey) =>
  (cssModule && cssModule[classKey]) || classKey;

const getObjectClasses = (cssModule, object) => {
  return Object.keys(object).reduce((classes, classKey) => {
    const className = cssModule[classKey];
    // this className is the value that cssModules has assigned for the className that we've used. below is an example.
    // {
    //   "card": "qVzYry2rVqvv0CZTuHDp",
    //   "color-primary": "GohFCj3UhmaoZgAibVJ7",
    //   "color-secondary": "qpxaXPYeX8ZsU49OX4eG",
    //   "size-sm": "CcNBlZ8Brm8YCOyt5Ltj",
    //   "size-lg": "SKxwv9VT6hRy_kO1cmR5",
    //   "is-clickable": "xJ6OLGu3c870csg1VzQL",
    //   "is-draggable": "eaZYxL4JKscf6r_6qzkX"
    // }
    return className ? { ...classes, [className]: object[classKey] } : classes;
  }, {});
};

const getDynamicClasses = (cssModule, props, classes) => {
  return classes.reduce((classesObj, classKey) => {
    const propValue = props[classKey];
    const className = cssModule[`${classKey}-${propValue}`];

    return className && propValue
      ? { ...classesObj, [className]: propValue }
      : classesObj;
  }, {});
};

export const getClasses =
  (cssModule) =>
  (props) =>
  (...args) => {
    return classNames(
      args.map((arg) => {
        if (Array.isArray(arg)) {
          return getDynamicClasses(cssModule, props, arg);
        } else if (typeof arg === "string") {
          return getModuleClasses(cssModule, arg);
        } else if (typeof arg === "object") {
          return getObjectClasses(cssModule, arg);
        }
      })
    );
  };
