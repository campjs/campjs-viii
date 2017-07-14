import {
  Wrapper,
  Text,
  Sponsor
} from '../components'

export default () => (
  <Wrapper title='Become a Sponsor'>
    <Text>The only thing better than being involved in CampJS as a Camper is being involved as a Sponsor*.</Text>
    <Text>We have several Sponsor prospectuses available and would love for you to get in touch with us to craft a package to meet your needs. <a href="mailto:sponsors@campjs.com/">Request a prospectus</a> and see where you can help out. Any help is appreciated.</Text>

    <Text is='h1' fontSize={1} mt={5} bold>Our Current Sponsors</Text>

  	<Sponsor
        company='Lookahead Search'
        logo='lookahead.png'
        siteUrl='https://www.lookahead.com.au/'
    />

  	<Sponsor
        company='RedBubble'
        logo='redbubble.png'
        siteUrl='https://www.redbubble.com/'
    />

  	<Sponsor
        company='FunCaptcha'
        logo='funcaptcha.png'
        siteUrl='https://www.funcaptcha.com/'
    />

  	<Sponsor
        company='Mozilla'
        logo='mozilla.svg'
        siteUrl='https://www.mozilla.org'
    />

  	<Sponsor
        company='Digital8'
        logo='digital8.png'
        siteUrl='https://digital8.com.au/'
    />

    <Text is='h1' fontSize={1} mt={5} bold>Speaker Sponsors</Text>
    <Text>These sponsors have kindly paid for their employees ticket & travel to come to CampJS to do a talk. Nice one employers.</Text>

  	<Sponsor
        company='Adobe'
        logo='adobe.png'
        siteUrl='https://www.adobe.com/'
    />

  	<Sponsor
        company='Just Digital People'
        logo='justdigitalpeople.png'
        siteUrl='https://www.justdigitalpeople.com.au/'
    />

    <Text>Adding more sponsors soon....</Text>
  </Wrapper>

)
