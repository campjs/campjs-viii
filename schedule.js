export const FRIDAY = 'Friday'
export const SATURDAY = 'Saturday'
export const SUNDAY = 'Sunday'

export const MAIN = 'Main Hall'
export const AMPHITHEATRE = 'Outdoor Amphitheatre'
export const TOWER = 'Tower Block Common Room'
export const LAWN = 'Centre Lawn'
export const COLTMAN = 'Coltman Hut'

import talks from './talks';

export const SCHEDULE = {
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
      talk: 'cmd',
      title: talks.cmd.title,
      speaker: talks.cmd.speaker,
    },
    {
      time: '10:00am - 10:30am',
      venue: TOWER,
      talk: 'iot',
      title: talks.iot.title,
      speaker: talks.iot.speaker,
    },
    {
      time: '10:00am - 12:00pm',
      venue: COLTMAN,
      talk: 'magikcraft',
      title: talks.magikcraft.title,
      speaker: talks.magikcraft.speaker,
    },
    {
      time: '10:30am - 11:00am',
      venue: AMPHITHEATRE,
      talk: 'functional',
      title: talks.functional.title,
      speaker: talks.functional.speaker,
    },
    {
      time: '10:30am - 11:00am',
      venue: TOWER,
      talk: 'robot',
      title: talks.robot.title,
      speaker: talks.robot.speaker,
    },
    {
      time: '11:00am',
      venue: MAIN,
      title: 'Morning Break',
    },
    {
      time: '11:15am - 11:45am',
      venue: AMPHITHEATRE,
      talk: 'sensor',
      title: talks.sensor.title,
      speaker: talks.sensor.speaker,
    },
    {
      time: '11:15am - 11:45am',
      venue: TOWER,
      talk: 'best',
      title: talks.best.title,
      speaker: talks.best.speaker,
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
      talk: 'threejs',
      title: talks.threejs.title,
      speaker: talks.threejs.speaker,
    },
    {
      time: '1:30pm - 2:00pm',
      venue: AMPHITHEATRE,
      talk: 'events',
      title: talks.events.title,
      speaker: talks.events.speaker,
    },
    {
      time: '2:00pm - 2:30pm',
      venue: AMPHITHEATRE,
      talk: 'codeScale',
      title: talks.codeScale.title,
      speaker: talks.codeScale.speaker,
    },
    {
      time: '2:30pm - 3:00pm',
      venue: AMPHITHEATRE,
      talk: 'scale',
      title: talks.scale.title,
      speaker: talks.scale.speaker,
    },
    {
      time: '3:00pm',
      venue: MAIN,
      title: 'Afternoon Break',
    },
    {
      time: '3:30pm - 4:00pm',
      venue: AMPHITHEATRE,
      talk: 'inclusive',
      title: talks.inclusive.title,
      speaker: talks.inclusive.speaker,
    },
    {
      time: '3:30pm - 4:00pm',
      venue: TOWER,
      talk: 'failures',
      title: talks.failures.title,
      speaker: talks.failures.speaker,
    },
    {
      time: '3:30pm - 4:30pm',
      venue: COLTMAN,
      talk: 'async',
      title: talks.async.title,
      speaker: talks.async.speaker,
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
      talk: 'unistyle',
      title: talks.unistyle.title,
      speaker: talks.unistyle.speaker,
    },
    {
      time: '10:00am - 10:30am',
      venue: TOWER,
      talk: 'jest',
      title: talks.jest.title,
      speaker: talks.jest.speaker,
    },
    {
      time: '10:00am - 12:00pm',
      venue: COLTMAN,
      talk: 'd3',
      title: talks.d3.title,
      speaker: talks.d3.speaker,
    },
    {
      time: '10:30am - 11:00am',
      venue: AMPHITHEATRE,
      talk: 'styled',
      title: talks.styled.title,
      speaker: talks.styled.speaker,
    },
    {
      time: '10:30am - 11:00am',
      venue: TOWER,
      talk: 'machine',
      title: talks.machine.title,
      speaker: talks.machine.speaker,
    },
    {
      time: '11:00am',
      venue: MAIN,
      title: 'Morning Break',
    },
    {
      time: '11:15am - 11:45am',
      venue: AMPHITHEATRE,
      talk: 'components',
      title: talks.components.title,
      speaker: talks.components.speaker,
    },
    {
      time: '11:15am - 11:45am',
      venue: TOWER,
      talk: 'luddite',
      title: talks.luddite.title,
      speaker: talks.luddite.speaker,
    },
    {
      time: '12:00pm',
      venue: MAIN,
      title: 'Lunch',
    },
    {
      time: '1:30pm - 2:30pm',
      venue: COLTMAN,
      talk: 'styledWorkshop',
      title: talks.styledWorkshop.title,
      speaker: talks.styledWorkshop.speaker,
    },
    {
      time: '1:30pm - 2:00pm',
      venue: AMPHITHEATRE,
      talk: 'payments',
      title: talks.payments.title,
      speaker: talks.payments.speaker,
    },
    {
      time: '1:30pm - 2:00pm',
      venue: TOWER,
      talk: 'diary',
      title: talks.diary.title,
      speaker: talks.diary.speaker,
    },
    {
      time: '2:00pm - 2:30pm',
      venue: AMPHITHEATRE,
      talk: 'database',
      title: talks.database.title,
      speaker: talks.database.speaker,
    },
    {
      time: '2:00pm - 2:30pm',
      venue: TOWER,
      talk: 'phonegap',
      title: talks.phonegap.title,
      speaker: talks.phonegap.speaker,
    },
    {
      time: '2:30pm - 3:00pm',
      venue: AMPHITHEATRE,
      talk: 'wasm',
      title: talks.wasm.title,
      speaker: talks.wasm.speaker,
    },
    {
      time: '2:30pm - 3:00pm',
      venue: TOWER,
      talk: 'electron',
      title: talks.electron.title,
      speaker: talks.electron.speaker,
    },
    {
      time: '2:30pm - 4:30pm',
      venue: COLTMAN,
      talk: 'elm',
      title: talks.elm.title,
      speaker: talks.elm.speaker,
    },
    {
      time: '3:00pm',
      venue: MAIN,
      title: 'Afternoon Break',
    },
    {
      time: '3:15pm - 3:45pm',
      venue: AMPHITHEATRE,
      talk: 'workers',
      title: talks.workers.title,
      speaker: talks.workers.speaker,
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
