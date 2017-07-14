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
      <NavLink prefetch href='/schedule'>3. Sessions</NavLink>
      <NavLink prefetch href='/get-involved'>4. Get involved</NavLink>
      <NavLink prefetch href='/call-for-speakers'>5. Call for speakers</NavLink>
      <NavLink prefetch href='/code-of-conduct'>6. Code of conduct</NavLink>
<<<<<<< HEAD
      <NavLink prefetch href='/sponsors'>7. Sponsors</NavLink>
      <NavLink href='https://ti.to/campjs/campjs-viii'>8. Tickets!</NavLink>
=======
      <NavLink prefetch href='/organisers'>7. Organisers</NavLink>
      <NavLink prefetch href='/feedback'>8. Feedback</NavLink>
      <NavLink href='https://ti.to/campjs/campjs-viii'>9. Tickets!</NavLink>
      <NavLink prefetch href='/accommodation'>10. Accommodation</NavLink>
      <NavLink prefetch href='/food'>11. Food and Drinks</NavLink>
      <NavLink prefetch href='/transport'>12. Transport</NavLink>
      <NavLink prefetch href='/accessibility'>13. Accessibility</NavLink>
      <NavLink prefetch href='/sponsors'>14. Sponsors</NavLink>
>>>>>>> master
    </Box>
  </Wrapper>
)
