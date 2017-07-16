import {
  News,
  Text,
  NavLink,
  Sponsor
} from '../../components'

export default () => (
  <News title='Diversity and Community Tickets' date='July 16'>
    <Text>
      The CampJS Diversity and Community Ticket program is positioned to make sure that we reach as many Campers from as many parts of the JavaScript Community as we possibly can.
    </Text>

    <Text>
      If you're from an under-represented part of our community, then you're welcome to apply for a Diversity Ticket so we can work on some balance.
    </Text>

    <Text>
      If you're just not able to make a ticket a reality, then we'd love to have you apply for a Community Ticket.
    </Text>

    <Text>
      We can't help you get to Melbourne, but we've got your back from the Camp side of things!
    </Text>

    <Text>
      Oh, and if you know someone who fits either of those criteria, let them know we'd love to hear from them. ⛺
    </Text>

    <NavLink bold mt={5} mb={5} href='https://docs.google.com/a/campjs.com/forms/d/e/1FAIpQLSenw5QfS6aVlHxp8W6EwvJ5O0_q_QDh16-qUGUcH-9ivWDToA/viewform'>Apply here.</NavLink>

    <Sponsor
        company='Lookahead Search'
        logo='lookahead.png'
        siteUrl='https://www.lookahead.com.au/'
    >
      Thank you Lookahead Search for sponsoring the Diversity and Community Ticket program.
    </Sponsor>

  </News>
)
