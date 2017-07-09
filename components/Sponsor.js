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
      <Box mb={5} css={{display: 'flex', 'flex-flow': 'column'}}>
		<Box is='a' href={siteUrl} css={{display: 'inline',width: '50%','margin-top': '1rem'}}>
			<Box is='img' src={`/static/sponsors/${logo}.png`} css={{width: '50%'}}/>
			<Text>Visit {company}</Text>
        </Box>
      </Box>
    )
  }
}

export default Sponsor
