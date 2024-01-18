/** @type { import('@storybook/react').Preview } */
import React from "react";
import "minireset.css";
import "../styles/global.css";
import "../styles/tokens.css";

const styles = {
  display: "flex",
  flexDirection: "column",
  maxHeight: "auto",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexWrap: "wrap",
  height: "100%",
  gap: "10px 30px",
};

export const decorators = [
  (Story, parameters) =>
    disableGlobalArgTypes(parameters)("getStyles") || (
      <div style={styles}>
        <Story />
      </div>
    ),
];

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
