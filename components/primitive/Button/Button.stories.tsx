import React from "react";
import {Meta, Story} from "@storybook/react";
import {Button, ButtonProps} from "./Button";

export default {
    component: Button,
    title: 'Components/Primitive/Button',
    parameters: {
        backgrounds: {
          default: 'light',
          values: [
            { name: 'light', value: '#fff' },
          ],
        },
      },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    text: 'Google',
    link: 'https://google.com'
}