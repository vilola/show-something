import React from "react";
import {Meta, Story} from "@storybook/react";
import {CardModule, CardModuleProps} from "./CardModule";

export default {
    component: CardModule,
    title: 'Components/Block/CardModule',
} as Meta;

const Template: Story<CardModuleProps> = args => <CardModule {...args} />;

export const Example = Template.bind({});

Example.args = {
    content: {
        heading: 'Hi here are your cards',
        text_content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Fusce wisi. Etiam bibendum elit eget erat. Etiam egestas wisi a erat.',
        items: [
            {
                title: 'First card!',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Fusce wisi. Etiam bibendum elit eget erat. Etiam egestas wisi a erat.',
                icon: 'https://cdn-icons.flaticon.com/png/512/2071/premium/2071669.png?token=exp=1650557538~hmac=cf5193ef6a684e177d93b17f72b53fac'
            },
            {
                title: 'Second card with content',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Fusce wisi. Etiam bibendum elit eget erat. Etiam egestas wisi a erat.',
                icon: 'https://cdn-icons.flaticon.com/png/512/846/premium/846786.png?token=exp=1650557538~hmac=468a58a06db66e0124cb24ba3742884c'
            },
            {
                title: 'More cards',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Fusce wisi. Etiam bibendum elit eget erat. Etiam egestas wisi a erat.',
                icon: 'https://cdn-icons.flaticon.com/png/512/2071/premium/2071669.png?token=exp=1650557538~hmac=cf5193ef6a684e177d93b17f72b53fac'
            },
            {
                title: 'One more card',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Fusce wisi. Etiam bibendum elit eget erat. Etiam egestas wisi a erat.',
                icon: 'https://cdn-icons.flaticon.com/png/512/846/premium/846786.png?token=exp=1650557538~hmac=468a58a06db66e0124cb24ba3742884c'
            },
            {
                title: 'More cards',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Fusce wisi. Etiam bibendum elit eget erat. Etiam egestas wisi a erat.',
                icon: 'https://cdn-icons.flaticon.com/png/512/2071/premium/2071669.png?token=exp=1650557538~hmac=cf5193ef6a684e177d93b17f72b53fac'
            }
        ]
    }
}