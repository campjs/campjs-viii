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
    >
      Thanks for sponsoring Diversity Tickets & Coffee
    </Sponsor>

    <Sponsor
        company='Thinkmill'
        logo='thinkmill.png'
        siteUrl='https://www.thinkmill.com.au/'
    >
      Thanks for sponsoring Diversity and Community Tickets
    </Sponsor>

    <Sponsor
        company='RedBubble'
        logo='redbubble.png'
        siteUrl='https://www.redbubble.com/'
    >
      Thanks for sponsoring video production & sending Brad Barrow
    </Sponsor>

    <Sponsor
        company='FunCaptcha'
        logo='funcaptcha.png'
        siteUrl='https://www.funcaptcha.com/'
    >
      Thanks for sponsoring child care
    </Sponsor>

    <Sponsor
        company='Mozilla'
        logo='mozilla.svg'
        siteUrl='https://www.mozilla.org'
    >
      Thanks for sponsoring the buses & sending Marcos Caceres
    </Sponsor>

    <Sponsor
        company='Digital8'
        logo='digital8.png'
        siteUrl='https://digital8.com.au/'
    >
      Thanks for sponsoring the internet
    </Sponsor>

    <Text is='h1' fontSize={1} mt={5} bold>Speaker Sponsors</Text>
    <Text>These sponsors have kindly paid for their employees ticket & travel to come to CampJS to do a talk. Nice one employers.</Text>

    <Sponsor
        company='Adobe'
        logo='adobe.png'
        siteUrl='https://www.adobe.com/'
    >
      Thanks for sending Tommy-Carlos Williams
    </Sponsor>

    <Sponsor
        company='iflix'
        logo='iflix.svg'
        css={{height:'100px'}}
        siteUrl='https://www.iflix.com/'
    >
      Thanks for sending Josh Gillies & Adam Brady
    </Sponsor>

    <Sponsor
        company='Small Multiples'
        logo='smallmultiples.png'
        siteUrl='https://small.mu/'
    >
      Thanks for sending Joachim Bachstätter
    </Sponsor>

    <Sponsor
        company='X-Team'
        logo='xteam.png'
        siteUrl='https://x-team.com'
    >
      Thanks for sending Josh Johnston
    </Sponsor>

    <Sponsor
        company='Just Digital People'
        logo='justdigitalpeople.png'
        siteUrl='https://www.justdigitalpeople.com.au/'
    >
      Thanks for sending Josh Wulf
    </Sponsor>

    <Sponsor
        company='Seer Medical'
        logo='seermedical.png'
        siteUrl='https://seermedical.com/'
    >
      Thanks for sending Robert Kerr
    </Sponsor>

  </Wrapper>

)
