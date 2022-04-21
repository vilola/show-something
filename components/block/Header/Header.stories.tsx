import React from "react";
import {Meta, Story} from "@storybook/react";
import {Header, HeaderProps} from "./Header";

export default {
    component: Header,
    title: 'Components/Block/Header',
    parameters: {
        backgrounds: {
          default: 'light',
          values: [
            { name: 'light', value: '#fff' },
          ],
        },
      },
} as Meta;

const Template: Story<HeaderProps> = args => <Header {...args} />;

export const Example = Template.bind({});

Example.args = {
    content: {
        heading: 'Main title is important so it <strong class="color-living-coral">has to be long</strong>',
        text_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Fusce wisi. Etiam bibendum elit eget erat. Etiam egestas wisi a erat.',
        image: {
            file: '/img/data/header.jpg',
            alt: 'Hi, i am an image',
        },
        button_group: {
            link: '#',
            icon: 'thumb',
            title: 'Some button'
        }
    }
}