import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Icon } from './Icon'

export default {
    title: 'Components/Primitive/IconP22',
    component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (attrs) => <Icon {...attrs} inline />

export const Default = Template.bind({})
Default.args = {
    name: 'thumb',
    color: 'color-global-white'
}