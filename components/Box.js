import { config, Box } from 'axs'
import traits from '../traits.js'

config.set(traits)

export default (props) => (
  <Box {...props} />
)
