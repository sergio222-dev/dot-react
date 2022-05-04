import Card from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () => (
  <div style={{ maxWidth: "500px" }}>
    <Card>
      <Card.CardHeader>Header de Carta</Card.CardHeader>
      <Card.CardContent>Contenido de Carta</Card.CardContent>
    </Card>
  </div>
);

export const Default = Template.bind({});
