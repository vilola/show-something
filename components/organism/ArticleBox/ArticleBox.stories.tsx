import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleBox } from './ArticleBox'

export default {
    title: 'Components/Organism/ArticleBox',
    component: ArticleBox,
    parameters: {
        backgrounds: {
          default: 'light',
          values: [
            { name: 'light', value: '#fff' },
          ],
        },
      },
} as ComponentMeta<typeof ArticleBox>

const props = {
    title: 'Street art occupy skateboard meggings flexitarian poke 8-bit knausgaard. ',
    perex: 'Shoreditch franzen artisan selvage, slow-carb pork belly literally. Pok pok bicycle rights fam tumeric.',
    picture: {
        url: 'https://images.unsplash.com/photo-1650476312169-a6a96591c231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        width: '200',
        height: '200',
    },
    date: 'Yesterday',
    link: '/',
}

const Template: ComponentStory<typeof ArticleBox> = () => (
    <ArticleBox content={props} />
)

export const Default = Template.bind({})
