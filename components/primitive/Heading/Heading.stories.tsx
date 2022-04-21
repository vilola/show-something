import React from "react";
import {Meta, Story} from "@storybook/react";
import {Heading, HeadingProps} from "./Heading";

export default {
    component: Heading,
    title: 'Components/Primitive/Heading',
    parameters: {
        backgrounds: {
          default: 'light',
          values: [
            { name: 'light', value: '#fff' },
          ],
        },
      },
} as Meta;

const Template: Story<HeadingProps> = args => <Heading {...args} />;

export const Example = Template.bind({});

Example.args = {
    text: 'Hello <strong>World</strong>!',
    size: 'xlg',
    tag: 'h1'
}