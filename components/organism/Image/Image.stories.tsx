import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Image } from './Image'

export default {
    title: 'Components/Organism/Image',
    component: Image,
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = () => (
    <Image
        picture={{ url: 'https://images.unsplash.com/photo-1650476312169-a6a96591c231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', width: '230', height: '300' }}
        layout="intrinsic"
        alt="Alt text"
    />
)

export const Default = Template.bind({})

const TemplateLightbox: ComponentStory<typeof Image> = () => (
    <Image
        picture={{ url: 'https://images.unsplash.com/photo-1650476312169-a6a96591c231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', width: '230', height: '300' }}
        layout="intrinsic"
        alt="Alt text"
        lightbox
    />
)

export const Lightbox = TemplateLightbox.bind({})
