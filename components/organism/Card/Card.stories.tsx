import React from "react";
import {Meta, Story} from "@storybook/react";
import {Card, CardProps} from "./Card";

export default {
    component: Card,
    title: 'Components/Organism/Card',
} as Meta;

const Template: Story<CardProps> = args => <Card {...args} />;

export const Example = Template.bind({});

Example.args = {
    title: 'Hello <strong>World</strong>!',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Fusce wisi. Etiam bibendum elit eget erat. Etiam egestas wisi a erat.',
    icon: 'https://cdn-icons.flaticon.com/png/512/846/premium/846786.png?token=exp=1650557538~hmac=468a58a06db66e0124cb24ba3742884c'
}