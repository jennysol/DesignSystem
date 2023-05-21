import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@studies-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Datadisplay/Button',
  component: Button,
  args: {
    children: 'Send'
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new'
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  }
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo Passo
        <ArrowRight weight="bold" />
      </>
    )
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  }
}