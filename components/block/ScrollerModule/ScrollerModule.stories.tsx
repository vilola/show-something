import React from "react";
import {Meta, Story} from "@storybook/react";
import {ScrollerModule, ScrollerModuleProps} from "./ScrollerModule";

export default {
    component: ScrollerModule,
    title: 'Components/Block/ScrollerModule',
    parameters: {
        backgrounds: {
          default: 'light',
          values: [
            { name: 'light', value: '#fff' },
          ],
        },
      },
} as Meta;

const Template: Story<ScrollerModuleProps> = args => <ScrollerModule {...args} />;

export const Example = Template.bind({});

Example.args = {
    content: {
        heading: 'Cake, cake and cake company',
        text_content: 'Nullam rhoncus aliquam metus. <strong>In convallis. Nullam sit amet magna in magna gravida vehicula. Maecenas libero.</strong> Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Integer malesuada. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Integer lacinia. In convallis. Aenean placerat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla non arcu lacinia neque faucibus fringilla. Ut enim ad minima veniam.',
        items: [
            {
                file: '/img/data/file.jpg',
                ale: ''
            },
            {
                file: '/img/data/file2.jpg',
                ale: ''
            },
            {
                file: '/img/data/file3.jpg',
                ale: ''
            },
            {
                file: '/img/data/file4.jpg',
                ale: ''
            },
            {
                file: '/img/data/file.jpg',
                ale: ''
            },
            {
                file: '/img/data/file2.jpg',
                ale: ''
            },
            {
                file: '/img/data/file3.jpg',
                ale: ''
            },
            {
                file: '/img/data/file4.jpg',
                ale: ''
            },
        ]
    }
}