import {
  Wrapper,
  Text,
  Link,
} from '../components'

export default () => (
  <div>
  <Wrapper title='Accessibility'>
  <Text mb={5}>
    We do our best to make CampJS accessible to all, our transport and venue providers have accessibility options available including wheelchair accessible buses, ramps, shower chairs and accessible bathrooms. Please <Link  href='/organisers'>contact us</Link> if you require assistance or additional facilities so that we can support your attendance. See the <Link  href='/transport'>transport</Link> and <Link href='/accommodation'>accommodation</Link> pages for more details.
  </Text>
  </Wrapper>
  </div>
)
