import {
  Box,
  NavLink,
  Wrapper
} from '../components'

export default () => (
  <Wrapper>
    <Box is='nav'
      display='flex'
      flexDirection='column'
    >
      <NavLink prefetch href='/news'>1. News</NavLink>
      <NavLink prefetch href='/about'>2. About</NavLink>
      <NavLink prefetch href='/schedule'>3. Schedule</NavLink>
      <NavLink prefetch href='/get-involved'>4. Get involved</NavLink>
      <NavLink prefetch href='/call-for-speakers'>5. Call for speakers</NavLink>
      <NavLink href='https://ti.to/campjs/campjs-viii'>5. Tickets!</NavLink>
    </Box>
  </Wrapper>
)
