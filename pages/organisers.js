import {
  Wrapper,
  Organiser,
  Box,
  Link,
  Text
} from '../components'

export default () => (
  <Wrapper title='Organisers'>
    <Text>
      CampJS is organised by a large group of volunteers. Where privacy is not an issue, everything is organised in public in the <Link href='https://github.com/campjs/campjs-next/issues'>Github issues</Link>.
    </Text>
    <Text>
      If you would like to volunteer, you don't have to ask permission, just jump in. However if you're unsure, message one or many of us privately. We are happy to help.
    </Text>
    <Text mb={6}>
      During CampJS, you'll also find emergency contact numbers on your nametag.
    </Text>

    <Organiser
      name='Glen Arrowsmith'
      twitter='garrows'
      role='General Organiser'
      email='garrows@campjs.com'
    />

    <Organiser
      name='Damon Oehlman'
      twitter='damonoehlman'
      role='Sponsorships & Finance'
      email='damon@campjs.com'
    />

    <Organiser
      name='Anna Gerber'
      twitter='AnnaGerber'
      role='Scheduling and Zine'
      email='annagerber@campjs.com'
    />

    <Organiser
      name='Craig Sharkie'
      twitter='twalve'
      role='Sponsorships & Scholarships'
      email='sharkie@campjs.com'
    />

    <Organiser
      name='Tim Oxley'
      twitter='secoif'
      role='Traditional Founding Father of CampJS'
      email='tim@campjs.com'
    />

    <Organiser
      name='Cathy Lill'
      twitter='cathyblabla'
      role='Advisor and Childcare Organisation'
    />

    <Organiser
      name='Maurice Butler'
      twitter='butlermaurice'
      role='General Busy Body'
      email='mauricebutler@campjs.com'
    />

    <Organiser
      name='Adam Brady'
      twitter='adam__brady'
      role='General Busy Body'
    />

    <Organiser
      name='Luke Brooker'
      twitter='lukebrooker'
      role='CampJS Website'
    />

  </Wrapper>
)
