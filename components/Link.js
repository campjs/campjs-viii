import {
  Text
} from './'
import NextLink from 'next/link'

const A = ({
  children,
  css,
  ...props
}) => (
  <Text is='a'
    {...props}
    display='inline-block'
    css={{
      cursor: 'pointer',
      transition: '.25s all ease-in-out',
      ':hover': {
        opacity: '.7'
      },
      ':focus': {
        opacity: '.7'
      },
      ...css
    }}>
    {children}
  </Text>
)

const Link = ({
  href,
  prefetch,
  ...props
}) => (
  <A {...props} href={href} />
)

export default Link
