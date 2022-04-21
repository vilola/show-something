import React from "react";
import {Meta, Story} from "@storybook/react";
import {Icon, IconProps} from "./Icon";

export default {
    component: Icon,
    title: 'Components/Primitive/Icon',
    parameters: {
        backgrounds: {
          default: 'light',
          values: [
            { name: 'light', value: '#fff' },
          ],
        },
      },
} as Meta;

const Template: Story<IconProps> = args => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
    name: 'phone'
}