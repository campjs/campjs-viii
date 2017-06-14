import { Box } from './'
import traits from '../traits.js'

const {
  colors
} = traits

const Html = (props) => (
  <Box
    {...props}
    is='html'
    style={{
      fontFamily: `'Source Code Pro', monospace`,
      color: colors.green,
      backgroundColor: colors.dark
    }}
  />
)

export default Html
