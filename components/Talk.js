import { Component } from 'react'

import {
  Box,
  Text,
  Link,
} from './'

class Talk extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showDetails: false
    }
    // This binding is necessary to make `this` work in the callback
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleDetails () {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  }

  render () {
    const {
      title,
      speaker,
      profilePicture,
      twitter,
      github,
      children,
      id,
      css = {}
    } = this.props
    return (
      <Box mb={5} css={{display: 'flex'}} id={id}>
        <Box is='img' src={twitter ? `/static/profiles/${twitter}.png` : `/static/profiles/${github}.png`} css={{width: '20%', height: '20%', margin: '0.5em'}}/>
        <Box>
          <Text is='h2'
            fontSize={1}
            bold>
            {title}
          </Text>
          <Text is='h3'>{speaker} - <a href={twitter ? `https://twitter.com/${twitter}` : `https://github.com/${github}`}>@{twitter || github}</a></Text>
          <Box is='a' onClick={this.toggleDetails}>{this.state.showDetails ? 'Less detail >' : 'More detail >'}</Box>
          <Box display={!this.state.showDetails && 'none'}>
            {children}
          </Box>
          <Box>
            <Link href={`/schedule#${id}`}>Schedule</Link>
          </Box>
        </Box>
      </Box>
    )
  }
}

export default Talk
