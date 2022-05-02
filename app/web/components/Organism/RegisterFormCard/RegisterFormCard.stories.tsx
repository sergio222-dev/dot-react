import RegisterFormCard from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Organism/RegisterFormCard",
  component: RegisterFormCard,
} as ComponentMeta<typeof RegisterFormCard>;
const Template: ComponentStory<typeof RegisterFormCard> = (args) => (
  <div>
    <RegisterFormCard />
  </div>
);

export const Form = Template.bind({});
