import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PhotoBox } from './PhotoBox'

export default {
    title: 'Components/Organism/PhotoBox',
    component: PhotoBox,
    parameters: {
        backgrounds: {
          default: 'light',
          values: [
            { name: 'light', value: '#fff' },
          ],
        },
      },
} as ComponentMeta<typeof PhotoBox>

const Template: ComponentStory<typeof PhotoBox> = (args) => (
    <PhotoBox {...args} />
)

export const Default = Template.bind({})
Default.args = {
    content: {
        picture: { url: 'https://images.unsplash.com/photo-1650399470902-0dd9259b91c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80' },
        title: 'Box title',
        link: { url: '#' },
    },
}

export const External = Template.bind({})
External.args = {
    content: {
        picture: { url: 'https://images.unsplash.com/photo-1650399470902-0dd9259b91c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80' },
        title: 'Box title',
        link: { url: '', external_url: '#' },
    },
}

export const NoTitle = Template.bind({})
NoTitle.args = {
    content: {
        picture: { url: 'https://images.unsplash.com/photo-1650399470902-0dd9259b91c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80' },
        title: '',
        link: { url: '#' },
    },
}

export const Wide: ComponentStory<typeof PhotoBox> = (args) => (
    <PhotoBox {...args} />
)
Wide.args = {
    content: {
        picture: { url: 'https://images.unsplash.com/photo-1650399470902-0dd9259b91c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80' },
        title: 'Box title',
        link: { url: '#' },
    },
}

export const GalleryWide: ComponentStory<typeof PhotoBox> = (args) => (
    <PhotoBox gallery {...args} />
)
GalleryWide.args = {
    content: {
        picture: { url: 'https://images.unsplash.com/photo-1650399470902-0dd9259b91c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80' },
        title: 'Box title',
        link: { url: '#' },
    },
}
