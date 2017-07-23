import {
  News,
  Text,
  NavLink,
  Sponsor
} from '../../components'

export default () => (
  <News title='Sponsored Childcare & Family Friendly Tickets' date='July 16'>
    <Text>
      CampJS is proud to announce that we will be providing free childcare and family friendly tickets.
    </Text>

    <Text>
      Providing childcare wouldn't have been possible without <a href="https://www.funcaptcha.com">FunCaptcha's</a> kind sponsorship, some extra allowances by the venue & <a href="https://twitter.com/cathyblabla">Cathy Lill's</a> organisational help.
    </Text>

    <Text>
      <a href="http://abrachild.com.au/">Abracadabra Childcare Services</a> will be available from 10am to 12pm and 2pm to 4pm on Saturday and Sunday. Hours may increase based on demand. If you have any questions please contact one of our <NavLink prefetch href='/organisers'>organisers</NavLink>. We're always happy to help.
    </Text>

    <Text>
      We have now released a set of <NavLink mt={5} mb={5} href='https://ti.to/campjs/campjs-viii'>family tickets.</NavLink>
    </Text>

    <Text>
      Thanks to the venue, children 10 or under aren't being charged for accommodation or food. You'll have to supply your own cot if applicable. More information is on the <NavLink prefetch href='/accommodation'>accommodation</NavLink> page.
    </Text>

    <Text>
      Children over 10 are charged for catering & accommodation but we've lowered their ticket down to cost value.
    </Text>

    <Text>
      We have also released some daytime only tickets for parents. We recognize that the dormitory style <NavLink prefetch href='/accommodation'>accommodation</NavLink> isn't suitable for all families. Breakfast, lunch, dinner and drinks are provided and note you're welcome to stay after sunset.
    </Text>

    <Text>
      If you're a parent that wants to come along with their partner but not attend the talks, there are no discounts available as most of the costs go towards the food, drink & accommodation.
    </Text>

    <Text>
      If you have already purchased a normal ticket and would like to upgrade. Please contact one of the organisers <NavLink prefetch href='/organisers'>organisers</NavLink>.
    </Text>

    <NavLink mt={5} mb={5} href='https://ti.to/campjs/campjs-viii'>Get tickets.</NavLink>

    <Sponsor
        company='FunCaptcha'
        logo='funcaptcha.png'
        siteUrl='https://www.lookahead.com.au/'
    >
      Thank you again FunCaptcha for sponsoring the childcare service.
    </Sponsor>

  </News>
)
