import Register from "../../pages/register";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Pages/Register",
  component: Register,
} as ComponentMeta<typeof Register>;

const Template: ComponentStory<typeof Register> = (args) => <Register />;

export const Form = Template.bind({});
