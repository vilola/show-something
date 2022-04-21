import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BreadCrumbs } from './BreadCrumbs'

export default {
    title: 'Components/Organism/BreadCrumbs',
    component: BreadCrumbs,
    parameters: {
        backgrounds: {
          default: 'light',
          values: [
            { name: 'light', value: '#fff' },
          ],
        },
      },
} as ComponentMeta<typeof BreadCrumbs>

const prev = [
    { url: '#', title: 'Previous Page 1' },
    { url: '#', title: 'Previous Page 2' },
]

const current = { url: '#', title: 'Current Page' }

const Template: ComponentStory<typeof BreadCrumbs> = () => (
    <BreadCrumbs prev={prev} current={current} />
)

export const Default = Template.bind({})
