import { Component } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import {HotKeys} from 'react-hotkeys'
import {
  Box,
  Header,
  NavLink,
  Text
} from './'

const keyMap = {
  goToHome: ['esc'],
  goToLink: [...Array(20).keys()].map(n => n.toString()),
  tabToPrevLink: 'up',
  tabToNextLink: 'down'
}

const goto = (url) => () => Router.push(url)

class Wrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      links: [],
      currentLink: 0
    }
    this.goToLink = this.goToLink.bind(this)
    this.tabToPrevLink = this.tabToPrevLink.bind(this)
    this.tabToNextLink = this.tabToNextLink.bind(this)
  }
  componentDidMount () {
    const links = document.getElementsByTagName('a')
    this.setState({
      links: links
    })
    links[0] && links[0].focus()
  }
  goToLink (e) {
    const linkNum = parseInt(e.key, 10) - 1
    const link = this.state.links[linkNum]
    if (link) {
      link.focus()
      const href = link.getAttribute('href')
      if (href.startsWith('http')) {
        window.location.href = href
      } else {
        Router.push(href)
      }
    }
  }
  tabToPrevLink () {
    if (this.state.currentLink < 1) {
      this.setState({
        currentLink: this.state.links.length - 1
      })
    } else {
      this.setState({
        currentLink: this.state.currentLink - 1
      })
    }
    this.state.links[this.state.currentLink].focus()
  }
  tabToNextLink () {
    if (this.state.currentLink >= this.state.links.length - 1) {
      this.setState({
        currentLink: 0
      })
    } else {
      this.setState({
        currentLink: this.state.currentLink + 1
      })
    }
    this.state.links[this.state.currentLink].focus()
  }
  render () {
    const {
      children,
      title
    } = this.props
    const handlers = {
      goToHome: goto('/'),
      goToLink: this.goToLink,
      tabToPrevLink: this.tabToPrevLink,
      tabToNextLink: this.tabToNextLink
    }
    return (
      <HotKeys keyMap={keyMap} handlers={handlers}>
        <Box p={5}
          display='flex'
          flexDirection='column'
          justifyContent='center'
          css={{
            minHeight: '100vh',
            'a': {
              opacity: 0.7
            },
            'a:focus': {
              opacity: 1
            }
          }}>
          <Head>
            <title>
              {title
                ? `${title} - CampJS VIII`
                : 'CampJS VIII - August 4th - 7th 2017'
              }
            </title>
          </Head>
          <Box>
            {!title
              ? <Header />
              : <NavLink
                fontSize={1}
                mb={5}
                href='/'
                >
                Go back
              </NavLink>
            }
            <Text is='h1'
              fontSize={1}
              mb={4}
              bold>
              {title}
            </Text>
            <Box
              fontSize={1}
              css={{
                lineHeight: 1.5,
                maxWidth: '32em',
                'a': {
                  borderBottom: title && '.125rem solid transparent'
                },
                'a:focus': {
                  borderBottomColor: title && 'currentColor'
                }
              }}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </HotKeys>
    )
  }
}

export default Wrapper
