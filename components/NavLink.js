import {
  Link
} from './'

const NavLink = ({
  children,
  ...props
}) => (
  <Link
    {...props}
    css={{
      position: 'relative',
      ':before': {
        content: `"❯"`,
        position: 'absolute',
        left: 0,
        transform: 'translateX(-130%)',
        opacity: 0,
        transition: '.2s all ease-in-out'
      },
      ':hover': {
        opacity: 1
      },
      ':focus': {
        opacity: 1
      },
      ':hover:before': {
        opacity: 1
      },
      ':focus:before': {
        opacity: 1
      }
    }}
  >
    {children}
  </Link>
)

export default NavLink
