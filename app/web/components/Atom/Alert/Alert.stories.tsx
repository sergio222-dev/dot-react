import { Alert } from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args}> Alerta de ejemplo </Alert>;

export const Important = Template.bind({});
Important.args = {
  status: "Important",
};

export const Error = Template.bind({});
Error.args = {
  status: "Error",
};

export const Info = Template.bind({});
Info.args = {
  status: "Info",
};
