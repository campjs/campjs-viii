import { config, Text } from 'axs'
import traits from '../traits.js'

config.set(traits)

export default (props) => (
  <Text {...props} />
)
