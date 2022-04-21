import React from "react";
import {Meta, Story} from "@storybook/react";
import {TextContent, TextContentProps} from "./TextContent";

export default {
    component: TextContent,
    title: 'Components/Primitive/TextContent',
    parameters: {
        backgrounds: {
          default: 'light',
          values: [
            { name: 'light', value: '#fff' },
          ],
        },
      },
} as Meta;

const Template: Story<TextContentProps> = args => <TextContent>{args.children}</TextContent>;

export const Default = Template.bind({});

Default.args = {
    children: <p>Lorem ipsum <strong>dolor sit amet</strong>.</p>
}