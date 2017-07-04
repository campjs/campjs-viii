import { Component } from 'react'

import {
  Wrapper,
  Box,
  Text
} from './'

class Talk extends Component {
  render () {
    const {
      name,
      profilePicture,
      twitter,
      github,
      role,
      email,
      css = {}
    } = this.props
    return (
      <Box mb={5} css={{display: 'flex'}}>
        <Box is='img' src={twitter ? `/static/profiles/${twitter}.png` : `/static/profiles/${github}.png`} css={{width: '20%', height: '20%', margin: '0.5em'}}/>
        <Box>
          <Text is='h3' bold>{name} - <a href={twitter ? `https://twitter.com/${twitter}` : `https://github.com/${github}`}>@{twitter || github}</a></Text>
          <Box>{role}</Box>
          <Box>{email}</Box>
        </Box>
      </Box>
    )
  }
}

export default Talk
