import {
  Wrapper,
  Talk,
  Box,
  NavLink,
  Text,
  StickyHeading,
  SubscribeLink,
} from '../components'

import { FRIDAY, SATURDAY, SUNDAY } from '../schedule'
import { SCHEDULE } from '../schedule'

const SCHEDULE_DAYS = [FRIDAY, SATURDAY, SUNDAY]

export default () => (
  <Wrapper title='Schedule'>
    <Box is='nav'
      display='flex'
      flexDirection='column'
    >
      <NavLink href={`#${FRIDAY}`}>{FRIDAY}</NavLink>
      <NavLink href={`#${SATURDAY}`}>{SATURDAY}</NavLink>
      <NavLink href={`#${SUNDAY}`}>{SUNDAY}</NavLink>
    </Box>
    {SCHEDULE_DAYS.map((day) => (
    <Box is='section' id={day} key={day}>
      <StickyHeading is='h1'>{day}</StickyHeading>
      {SCHEDULE[day].map((entry) => (
        <Box
          key={entry.time + entry.venue}
          mb={40}
          pt={'1.8em'}
          id={ entry.talk }
        >
          <Text
            p={2}
            is='h2'
            width={1}
            css={{
              display: 'inline-block',
              'background-color': '#87D337',
              color: '#21302F'
            }}
          >
              <Text is='span'>{entry.time}</Text>
              <Text is='span' ml='auto' css={{ float: 'right' }}>{entry.venue}</Text>
          </Text>
          { entry.title && <Text css={{ 'font-weight': 700 }}>{entry.title}</Text> }
          { entry.speaker && <Text>{entry.speaker}</Text> }
          { entry.note && <Text>{entry.note}</Text> }
          { entry.talk && <NavLink href={`/sessions#${entry.talk}`}>Read More</NavLink> }
          <br />
          { entry.start && entry.end && <SubscribeLink {...entry} /> }
        </Box>
      ))}
    </Box>
  ))}
  </Wrapper>
)
