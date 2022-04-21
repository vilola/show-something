import React from "react";
import {Meta, Story} from "@storybook/react";
import {ProgressItem, ProgressItemProps} from "./ProgressItem";

export default {
    component: ProgressItem,
    title: 'Components/Organism/ProgressItem',
} as Meta;

const Template: Story<ProgressItemProps> = args => <ProgressItem {...args} />;

export const Example = Template.bind({});
Example.args = {
    title: 'Etiam commodo dui eget wisi.',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Fusce wisi. Etiam bibendum elit eget erat. Etiam egestas wisi a erat.',
    value: 68
}

export const Color = Template.bind({});
Color.args = {
    title: 'Etiam commodo dui eget wisi.',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Fusce wisi. Etiam bibendum elit eget erat. Etiam egestas wisi a erat.',
    value: 20,
    color: 'global-white',
    def_color: 'yellow-sea'
}