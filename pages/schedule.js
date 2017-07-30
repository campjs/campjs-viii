import {
  Wrapper,
  Talk,
  Box,
  NavLink,
  Text,
} from '../components'

const FRIDAY = 'Friday'
const SATURDAY = 'Saturday'
const SUNDAY = 'Sunday'
const MAIN = 'Main Hall'
const AMPHITHEATRE = 'Outdoor Amphitheatre'
const TOWER = 'Tower Block Common Room'
const LAWN = 'Centre Lawn'
const COLTMAN = 'Coltman Hut'
const SCHEDULE_DAYS = [FRIDAY, SATURDAY, SUNDAY]
const SCHEDULE_VENUES = [MAIN, AMPHITHEATRE, TOWER, LAWN]
const FRIDAY_TIMES = ['3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '7:15pm']
const SATURDAY_TIMES = ['9:00am', '10:00am-10:30am']
const SCHEDULE = {
  [FRIDAY]: [
    {
      time: '3:00pm',
      venue: LAWN,
      title: 'First Bus Arrives'
    },
    {
      time: '4:00pm',
      venue: LAWN,
      title: 'Second Bus Arrives',
    },
    {
      time: '5:00pm',
      venue: LAWN,
      title: 'Ice Breaker Session',
      speaker: 'Tim Oxley',
      note: 'If weather permits else in Tower Block Common Room',
    },
    {
      time: '6:00pm',
      venue: MAIN,
      title: 'Dinner',
    },
    {
      time: '7:00pm',
      venue: LAWN,
      title: 'Third Bus Arrives',
    },
    {
      time: '7:15pm',
      venue: MAIN,
      title: 'Welcome and Announcements',
      speaker: 'Glen Arrowsmith',
    },
    {
      time: 'Late',
      venue: AMPHITHEATRE,
      note: 'Evening program (Music etc.)',
    },
    {
      time: 'Late',
      venue: TOWER,
      note: 'Games etc.',
    },
  ],
  [SATURDAY]: [
    {
      time: '9:00am',
      venue: MAIN,
      title: 'Breakfast',
    },
    {
      time: '10:00am - 10:30am',
      venue: AMPHITHEATRE,
      title: 'Copy-paste-pray? No way!',
      speaker: 'Joshua Paling',
    },
    {
      time: '10:00am - 10:30am',
      venue: TOWER,
      title: 'JavaScript rules my life',
      speaker: 'Christopher Biggs',
    },
    {
      time: '10:00am - 12:00pm',
      venue: COLTMAN,
      title: 'Magikcraft - Modding Minecraft with JavaScript',
      speaker: 'Josh Wulf',
    },
    {
      time: '10:30am - 11:00am',
      venue: AMPHITHEATRE,
      title: 'What we\'ve learned and can learn from functional programming',
      speaker: 'Joachim Bachstätter',
    },
    {
      time: '10:30am - 11:00am',
      venue: TOWER,
      title: 'Do you want to build a robot?',
      speaker: 'Anna Gerber',
    },
    {
      time: '11:00am',
      venue: MAIN,
      title: 'Morning Break',
    },
    {
      time: '11:15am - 11:45am',
      venue: AMPHITHEATRE,
      title: 'The Generic Sensor API',
      speaker: 'Jessica Claire Edwards',
    },
    {
      time: '11:15am - 11:45am',
      venue: TOWER,
      title: 'New Javascript is the best Javascript',
      speaker: 'Patrick Quinn-Graham',
    },
    {
      time: '12:00pm',
      venue: MAIN,
      title: 'Lunch',
    },
    {
      time: '1:15pm',
      venue: LAWN,
      title: 'Group Photo',
    },
    {
      time: '1:30pm - 3:00pm',
      venue: TOWER,
      title: 'Informal Lightning Talks / Demos',
    },
    {
      time: '1:30pm - 3:30pm',
      venue: COLTMAN,
      title: 'Workshop: Beginner\'s Guide to DataViz with ThreeJS',
      speaker: 'Isabell Kiral-Kornek and Robert Kerr',
    },
    {
      time: '1:30pm - 2:00pm',
      venue: AMPHITHEATRE,
      title: 'The complex made simple with Event Sourcing',
      speaker: 'Ben O\'Neal',
    },
    {
      time: '2:00pm - 2:30pm',
      venue: AMPHITHEATRE,
      title: 'Engineering Experiences: Coding for design at scale',
      speaker: 'Brad Barrow',
    },
    {
      time: '2:30pm - 3:00pm',
      venue: AMPHITHEATRE,
      title: 'Building products for developing countries at massive scale',
      speaker: 'Adam Brady',
    },
    {
      time: '3:00pm',
      venue: MAIN,
      title: 'Afternoon Break',
    },
    {
      time: '3:30pm - 4:00pm',
      venue: AMPHITHEATRE,
      title: 'Inclusive Javascript',
      speaker: 'Julie Grundy',
    },
    {
      time: '3:30pm - 4:00pm',
      venue: TOWER,
      title: 'Random Failures of Architecture I Have Committed',
      speaker: 'Colin Scott',
    },
    {
      time: '3:30pm - 4:30pm',
      venue: COLTMAN,
      title: 'Practical Async - Tools, Techniques, Debugging',
      speaker: 'Kory Nunn',
    },
    {
      time: '6:00pm',
      venue: MAIN,
      title: 'Dinner',
    },
    {
      time: '7:00 pm',
      venue: MAIN,
      title: 'Announcements',
    },
    {
      time: 'Late',
      venue: AMPHITHEATRE,
      title: 'Evening Program',
      note: 'Karaoke, Live Coding etc',
    },
    {
      time: 'Late',
      venue: TOWER,
      title: 'Games etc',
    },
  ],
  [SUNDAY]: [
    {
      time: '9:00am',
      venue: MAIN,
      title: 'Breakfast',
    },
    {
      time: '10:00am - 10:30am',
      venue: AMPHITHEATRE,
      title: 'A Unified Styling Language',
      speaker: 'Mark Dalgleish',
    },
    {
      time: '10:00am - 10:30am',
      venue: TOWER,
      title: 'Jest for API Servers',
      speaker: 'Brendan Graetz',
    },
    {
      time: '10:00am - 12:00pm',
      venue: COLTMAN,
      title: 'Workshop: Beginner\'s Guide to DataViz with D3',
      speaker: 'Isabell Kiral-Kornek and Robert Kerr',
    },
    {
      time: '10:30am - 11:00am',
      venue: AMPHITHEATRE,
      title: 'Styled Components and the Road to Unification',
      speaker: 'Glen Maddern',
    },
    {
      time: '10:30am - 11:00am',
      venue: TOWER,
      title: 'Machine Learning and JavaScript',
      speaker: 'Dominik Dumaine',
    },
    {
      time: '11:00am',
      venue: MAIN,
      title: 'Morning Break',
    },
    {
      time: '11:15am - 11:45am',
      venue: AMPHITHEATRE,
      title: 'Framework agnostic frontend components',
      speaker: 'Josh Gillies',
    },
    {
      time: '11:15am - 11:45am',
      venue: TOWER,
      title: 'Luddite.js',
      speaker: 'Mikey Williams',
    },
    {
      time: '12:00pm',
      venue: MAIN,
      title: 'Lunch',
    },
    {
      time: '1:30pm - 2:30pm',
      venue: COLTMAN,
      title: 'Styled components informal workshop',
      speaker: 'Glen Maddern',
    },
    {
      time: '1:30pm - 2:00pm',
      venue: AMPHITHEATRE,
      title: 'Using the web payments API',
      speaker: 'Marcos Caceres',
    },
    {
      time: '1:30pm - 2:00pm',
      venue: TOWER,
      title: 'Dear Diary: Journal writing for devs',
      speaker: 'Josh Johnston',
    },
    {
      time: '2:00pm - 2:30pm',
      venue: AMPHITHEATRE,
      title: 'An empty database in every pocket',
      speaker: 'Brad Barrow',
    },
    {
      time: '2:00pm - 2:30pm',
      venue: TOWER,
      title: 'It\'s Been Too Long Since You Last Looked At PhoneGap',
      speaker: 'Tommy-Carlos Williams',
    },
    {
      time: '2:30pm - 3:00pm',
      venue: AMPHITHEATRE,
      title: 'WebAssembly 101',
      speaker: 'Ash Kyd',
    },
    {
      time: '2:30pm - 3:00pm',
      venue: TOWER,
      title: 'Mad science with Electron',
      speaker: 'Fraser Xu',
    },
    {
      time: '2:30pm - 4:30pm',
      venue: COLTMAN,
      title: 'Elm Workshop',
      speaker: 'Sebastian Porto',
    },
    {
      time: '3:00pm',
      venue: MAIN,
      title: 'Afternoon Break',
    },
    {
      time: '3:15pm - 3:45pm',
      venue: AMPHITHEATRE,
      title: 'The JavaScript Workers: An Introduction to Web & Service Workers',
      speaker: 'Jessica Claire Edwards',
    },
    {
      time: '3:15pm - 4:15pm',
      venue: TOWER,
      title: 'Informal Lightning talks / demos / workshop session',
    },
    {
      time: '6:00pm',
      venue: MAIN,
      title: 'Dinner',
    },
    {
      time: '7:00 pm',
      venue: MAIN,
      title: 'Lightning Talks and Demos',
    },
    {
      time: 'Late',
      venue: MAIN,
      title: 'Closing Remarks',
    },
  ],
}

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
      <Text is='h1'>{day}</Text>
      {SCHEDULE[day].map((entry) => (
        <Box
          key={entry.time + entry.venue}
          mb={40}
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
        </Box>
      ))}
    </Box>
  ))}
  </Wrapper>
)
