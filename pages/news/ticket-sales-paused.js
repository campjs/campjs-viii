import {
  News,
  Text,
  NavLink
} from '../../components'

export default () => (
  <News title='Tickets' date='July 16'>
    <Text>
      CampJS VIII is going to be the biggest CampJS in history with the most speakers & attendees ever!
    </Text>

    <Text>
      Tickets sales caught us by surprise and we have paused ticket sales at 150.
    </Text>

    <Text>
      If you don’t have a ticket yet, don’t panic. There is still hope.
    </Text>

    <Text>
      We will be releasing the long rumoured family tickets next. A childcare service will be kindly sponsored by the fine folks at <NavLink href='https://www.funcaptcha.com'>FunCaptcha</NavLink>. A few details still need to be ironed out but they will be released in the next couple of days.
    </Text>

    <Text>
      We are also releasing some sponsored diversity and community tickets thanks to the generous people at <NavLink href='https://www.lookahead.com.au'>Lookahead Search</NavLink>. More <NavLink prefetch href='/news/diversity-community-tickets'>details in the news post</NavLink>.
    </Text>

    <Text>
      Finally we’ll be releasing some last minute tickets based on how many people we can fit into the main hall. Make sure you <NavLink href='https://ti.to/campjs/campjs-viii'>add yourself to the waiting list</NavLink> for your best chance to get one.
    </Text>
  </News>
)
