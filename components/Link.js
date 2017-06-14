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
  href.startsWith('http')
    ? <A {...props} href={href} />
    : (
      <NextLink {...props} href={href} prefetch={prefetch}>
        <A {...props} href={href} />
      </NextLink>
    )
)

export default Link
