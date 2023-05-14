import { colors } from '@studies-iu/tokens' 
import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300'
})

export function App() {
  return (
    <h1 style={{color: colors.ignite300}}>Hello World</h1>
  )
}