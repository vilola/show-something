import React from "react";
import {Meta, Story} from "@storybook/react";
import {CountedModule, CountedModuleProps} from "./CountedModule";

export default {
    component: CountedModule,
    title: 'Components/Block/CountedModule',
    parameters: {
        backgrounds: {
          default: 'light',
          values: [
            { name: 'light', value: '#fff' },
          ],
        },
      },
} as Meta;

const Template: Story<CountedModuleProps> = args => <CountedModule {...args} />;

export const Example = Template.bind({});

Example.args = {
    content: {
        heading: 'Lets count them',
        items: [
            {
                title: 'First card!',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Fusce wisi. Etiam bibendum elit eget erat. Etiam egestas wisi a erat.'
            },
            {
                title: 'Second card with content',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Fusce wisi. Etiam bibendum elit eget erat. Etiam egestas wisi a erat.'
            },
            {
                title: 'More cards',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Fusce wisi. Etiam bibendum elit eget erat. Etiam egestas wisi a erat.'
            },
            {
                title: 'One more card',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Fusce wisi. Etiam bibendum elit eget erat. Etiam egestas wisi a erat.'
            },
            {
                title: 'More cards',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Fusce wisi. Etiam bibendum elit eget erat. Etiam egestas wisi a erat.'
            }
        ]
    }
}