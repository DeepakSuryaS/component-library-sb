import React from "react";
import Card from "./Card";
import { options } from "./constants";

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;
const ListTemplate = ({ items, ...args }) =>
  items.map((item, index) => <Card key={index} {...args} {...item} />);

export const Default = Template.bind({}); // only exported items are shown in storybook as a story

export const Clickable = Template.bind({});
Clickable.args = {
  isClickable: true,
};

export const Dragable = Template.bind({});
Dragable.args = {
  isDragable: true,
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