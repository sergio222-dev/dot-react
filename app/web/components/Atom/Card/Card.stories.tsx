import Card from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <div style={{ maxWidth: "500px" }}>
    <Card>Contenido</Card>
  </div>
);

export const Default = Template.bind({});
