import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@studies-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
      <span>Testando Box</span>
      </>
    )
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
 
}