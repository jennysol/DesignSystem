import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@studies-ui/react'

export default {
  title: 'Datadisplay/Avatar',
  component: Avatar,
  args: {
    src: 'https://people.com/thmb/SL7_3mF5irtEm4Kz8f63FWDrmPA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/dog-dating-1-a1a34ab3445740fcadf8699850c8333b.jpg',
    alt: 'Jennifer Soliver'
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}