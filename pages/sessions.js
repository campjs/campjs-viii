import {
  Wrapper,
  Talk,
  Box,
  NavLink,
  Text
} from '../components'

import talks from '../talks';

const talkList = [
  talks['styled'],
  talks['robot'],
  talks['phonegap'],
  talks['sensor'],
  talks['inclusive'],
  talks['payments'],
  talks['d3'],
  talks['wasm'],
  talks['workers'],
  talks['machine'],
  talks['unistyle'],
  talks['elm'],
  talks['best'],
  talks['electron'],
  talks['scale'],
  talks['styledWorkshop'],
  talks['magikcraft'],
  talks['async'],
  talks['rule'],
  talks['events'],
  talks['glamorous'],
  talks['components'],
  talks['jest'],
  talks['luddite'],
  talks['failures'],
  talks['functional'],
  talks['codeScale'],
  talks['iot'],
  talks['diary'],
  talks['threejs'],
  talks['database'],
  talks['cmd'],
]

export default () => (
  <Wrapper title='Sessions'>
    <Text mb={6}>
      Note that attendance to the sessions are optional. There will be 2 to 3 sessions going at a time depending on scheduling but feel free to hangout in the main hall and hack on your own thing or collaborate with others.
    </Text>

    {talkList.map((talk) => (
      <Talk {...talk}>{talk.description.map((desc) => (<Text>{desc}</Text>))}</Talk>
    ))}

  </Wrapper>
)
