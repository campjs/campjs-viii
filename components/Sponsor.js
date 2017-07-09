import { Component } from 'react'

import {
  Box,
  Text
} from './'

class Sponsor extends Component {
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
    console.log('toggle');
  }

  render () {
    const {
      company,
      logo,
	  siteUrl,
      css = {}
    } = this.props
    return (
      <Box mb={5} css={{display: 'flex'}}>
        <Box is='img' src=`/static/sponsors/${logo}.png`} css={{width: '20%', height: '20%', margin: '0.5em'}}/>
        <Box>
          <Text is='h2'
            fontSize={1}
            bold>
            {company}
          </Text>
          <Box is='a' onClick={siteUrl}>Visit {company}</Box>
        </Box>
      </Box>
    )
  }
}

export default Sponsor
