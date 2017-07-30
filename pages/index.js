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
      <NavLink prefetch href='/sessions'>4. Sessions</NavLink>
      <NavLink prefetch href='/get-involved'>5. Get involved</NavLink>
      <NavLink prefetch href='/call-for-speakers'>6. Call for speakers</NavLink>
      <NavLink prefetch href='/code-of-conduct'>7. Code of conduct</NavLink>
      <NavLink prefetch href='/organisers'>8. Organisers</NavLink>
      <NavLink prefetch href='/feedback'>9. Feedback</NavLink>
      <NavLink href='https://ti.to/campjs/campjs-viii'>10. Tickets!</NavLink>
      <NavLink prefetch href='/accommodation'>11. Accommodation</NavLink>
      <NavLink prefetch href='/food'>12. Food and Drinks</NavLink>
      <NavLink prefetch href='/transport'>13. Transport</NavLink>
      <NavLink prefetch href='/accessibility'>14. Accessibility</NavLink>
      <NavLink prefetch href='/sponsors'>15. Sponsors</NavLink>
    </Box>
  </Wrapper>
)
