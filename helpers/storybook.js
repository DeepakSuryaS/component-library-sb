import React from "react";
import { getClasses } from "./styles";

export const getTemplate = (Component, styles) => (args) => {
  const allProps = { ...Component.defaultProps, ...args };

  return <Component {...args} getStyles={getClasses(styles)(allProps)} />;
};

export const getListTemplate =
  (Component, styles) =>
  ({ items, ...args }) => {
    return items.map((item, index) => {
      const allProps = { ...Component.defaultProps, ...args, ...item };

      return (
        <Component
          key={index}
          {...args}
          {...item}
          getStyles={getClasses(styles)(allProps)}
        />
      );
    });
  };

export const getOptionsArgTypes = (options) => {
  return {
    description: "**Options: **",
    table: {
      type: {
        summary: options.map((option) => option).join(" | "),
      },
    },
    options: options,
    control: {
      type: "select",
    },
  };
};

export const disableGlobalArgTypes =
  (parameters) =>
  (...args) => {
    args.forEach((arg) => {
      parameters.argTypes[arg].table.disable = true;
    });
  };
