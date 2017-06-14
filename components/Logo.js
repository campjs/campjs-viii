import traits from '../traits.js'
import {
  Box,
  Text
} from './'

const {
  colors
} = traits

const shadowOffsets = [...Array(20).keys()]

const Logo = () => (
  <Text is='h1'
    p={4}
    color='dark'
    bg='green'
    mb={5}
    mr='auto'
    display='inline-block'
    style={{
      fontFamily: `'SG', monospace`
    }}
    css={{
      position: 'relative',
      ':before': {
        zIndex: '-1',
        content: '""',
        width: '100%',
        height: 0,
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        paddingTop: '100%',
        backgroundColor: colors.green,
        boxShadow: shadowOffsets.map((offset) => (
          `-${offset}rem -${offset}rem 0 rgba(135,211,55,.8)`
        )).join(',')
      }
    }}>
    <Box fontSize='2.5rem' pt={6}>CampJS</Box>
    <Box fontSize='5.125rem'>VIII</Box>
  </Text>
)

export default Logo
