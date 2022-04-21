import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { GalleryCarouselModule } from './GalleryCarouselModule'

export default {
    title: 'Components/Block/GalleryCarouselModule',
    component: GalleryCarouselModule,
    parameters: {
        backgrounds: {
          default: 'light',
          values: [
            { name: 'light', value: '#fff' },
          ],
        },
      },
} as ComponentMeta<typeof GalleryCarouselModule>

const content = {
    items: [
        {
            picture: { url: 'https://images.unsplash.com/photo-1650399470902-0dd9259b91c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80' },
            title: '',
            link: {},
        },
        {
            picture: { url: 'https://images.unsplash.com/photo-1650399470902-0dd9259b91c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80' },
            title: '',
            link: {},
        },
        {
            picture: { url: 'https://images.unsplash.com/photo-1650399470902-0dd9259b91c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80' },
            title: '',
            link: {},
        },
        {
            picture: { url: 'https://images.unsplash.com/photo-1650399470902-0dd9259b91c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80' },
            title: 'Hello world',
            link: {},
        },
        {
            picture: { url: 'https://images.unsplash.com/photo-1650399470902-0dd9259b91c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80' },
            title: '',
            link: {},
        },
    ],
}

const Template: ComponentStory<typeof GalleryCarouselModule> = () => (
    <GalleryCarouselModule content={content} />
)

export const Default = Template.bind({})
