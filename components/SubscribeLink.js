import {
  Link
} from './'

import { SATURDAY, SUNDAY } from '../schedule'

function buildLink (props) {
  return 'https://www.google.com/calendar/render?action=TEMPLATE' +
  `&text=${props.title}${props.speaker ? " -- " + props.speaker : ""}` +
  `${props.start && props.end ? "&dates=" + formatDate(props.start) + "/" + formatDate(props.end) : ""}` +
  `&location=${props.venue}` +
  `&details=${props.note || ""}` +
  `&sf=true&output=xml`
}

function formatDate (date) {
  return date.toISOString().replace(/-|:|\.\d\d\d/g,"")
}

const SubscribeLink = (props) => (
  <Link
    href= {buildLink(props)}
    css={{
      position: 'relative',
      ':before': {
        content: `"❯"`,
        position: 'absolute',
        right: 0,
        transform: 'translateX(-130%)',
        opacity: 0,
        transition: '.2s all ease-in-out'
      },
      ':hover': {
        opacity: 1
      },
      ':focus': {
        opacity: 1
      },
      ':hover:before': {
        opacity: 1
      },
      ':focus:before': {
        opacity: 1
      }
    }}
  >
    📅 Add to Google Calendar
  </Link>
)

export default SubscribeLink
