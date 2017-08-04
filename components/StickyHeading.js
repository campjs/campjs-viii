import {
  Text
} from './'

const StickyHeading = ({
  children,
  ...props
}) => (
  <Text
    {...props}
    css={{
      position: 'sticky',
      top: 0,
      backgroundColor: '#21302F',
      zIndex: 1
    }}
  >
    {children}
  </Text>
)

export default StickyHeading
