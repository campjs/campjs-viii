import { Component } from 'react'

import {
  Box,
  Text
} from './'

class Sponsor extends Component {
  render () {
    const {
      company,
      logo,
      siteUrl,
      css = {},
      children
    } = this.props
    return (
      <Box mb={6} mt={5} width={.66}>
        <Box is='a' href={siteUrl} style={{opacity:1}} target="_blank">
          <Box is='img' src={`/static/sponsors/${logo}`} css={{
            'background-color': 'white',
            padding: '.5rem',
            width: '100%'
          }}></Box>
          <Box>{children}</Box>
          <Box>Visit {company}</Box>
        </Box>
      </Box>
    )
  }
}

export default Sponsor
