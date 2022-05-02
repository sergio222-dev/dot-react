import TextField from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = () => <TextField />;

export const Default = Template.bind({});
