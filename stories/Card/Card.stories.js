import React from "react";
import Card from "./Card";
import styles from "./Card.module.css";
import { options } from "./constants";
import {
  getListTemplate,
  getOptionsArgTypes,
  getTemplate,
} from "../../helpers/storybook";

const Template = getTemplate(Card, styles);
const ListTemplate = getListTemplate(Card, styles);

export default {
  title: "Card",
  component: Card,
  args: {
    children: "This is a card",
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
  },
  // argTypes below is not needed since we've handled with storybook.js helper
  // argTypes: {
  //   color: {
  //     description: "**Options: **",
  //     table: {
  //       type: {
  //         summary: options.colors.map((color) => color).join(" | "),
  //       },
  //     },
  //     control: {
  //       type: "select",
  //       options: options.colors,
  //     },
  //   },
  //   size: {
  //     description: "**Options: **",
  //     table: {
  //       type: {
  //         summary: options.sizes.map((size) => size).join(" | "),
  //       },
  //     },
  //     control: {
  //       type: "select",
  //       options: options.sizes,
  //     },
  //   },
  // },
};

// template and list template aren't needed anymore as we've handled it using the storybook.js helper
// const Template = (args) => <Card {...args} />;
// const ListTemplate = ({ items, ...args }) =>
//   items.map((item, index) => <Card key={index} {...args} {...item} />);

export const Default = Template.bind({}); // only exported items are shown in storybook as a story

export const Clickable = Template.bind({});
Clickable.args = {
  isClickable: true,
};

export const Draggable = Template.bind({});
Draggable.args = {
  isDraggable: true,
};

// export const Colors = () =>
//   options.colors.map((color, index) => <Card key={index} color={color} />);

// export const Sizes = () =>
//   options.sizes.map((size, index) => <Card key={index} size={size} />);

// for ListTemplate
export const Colors = ListTemplate.bind({});
Colors.args = {
  items: options.colors.map((color) => ({ color })),
};

export const Sizes = ListTemplate.bind({});
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
};
