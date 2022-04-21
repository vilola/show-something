import React from "react";
import {Meta, Story} from "@storybook/react";
import {ProgressModule, ProgressModuleProps} from "./ProgressModule";

export default {
    component: ProgressModule,
    title: 'Components/Block/ProgressModule',
} as Meta;

const Template: Story<ProgressModuleProps> = args => <ProgressModule {...args} />;

export const Example = Template.bind({});

Example.args = {
    content: {
        heading: 'Lets count them',
        text_content: 'Nullam rhoncus aliquam metus. In convallis. Nullam sit amet magna in magna gravida vehicula. Maecenas libero. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Integer malesuada. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Integer lacinia. In convallis. Aenean placerat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla non arcu lacinia neque faucibus fringilla. Ut enim ad minima veniam.',
        items: [
            {
                title: 'Hello',
                text_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Fusce wisi. Etiam bibendum elit eget erat. Etiam egestas wisi a erat.',
                value: 98,
                def_color: 'living-coral'
            },
            {
                title: 'There',
                text_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Fusce wisi. Etiam bibendum elit eget erat. Etiam egestas wisi a erat.',
                value: 70
            },
            {
                title: 'We',
                text_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Fusce wisi. Etiam bibendum elit eget erat. Etiam egestas wisi a erat.',
                value: 80
            },
            {
                title: 'Are',
                text_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Fusce wisi. Etiam bibendum elit eget erat. Etiam egestas wisi a erat.',
                value: 47
            },
            {
                title: 'Awesome',
                text_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Fusce wisi. Etiam bibendum elit eget erat. Etiam egestas wisi a erat.',
                value: 30
            }
        ]
    }
}