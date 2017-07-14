import {
  Wrapper,
  Text,
  Sponsor
} from '../components'

export default () => (
  <Wrapper title='Become a Sponsor'>
    <p>The only thing better than being involved in CampJS as a Camper is being involved as a Sponsor*.</p>
    <p>We have several Sponsor prospectuses available and would love for you to get in touch with us to craft a package to meet your needs. <a href="mailto:sponsors@campjs.com/">Request a prospectus</a> and see where you can help out. Any help is appreciated.</p>

    <Text is='h1' fontSize={1} mt={5} bold>Our Current Sponsors</Text>

	<Sponsor
      company='Lookahead Search'
      logo='lookahead'
      siteUrl='https://www.lookahead.com.au/'
    ></Sponsor>

  </Wrapper>
)
