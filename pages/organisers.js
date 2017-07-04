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
      email='glen.arrowsmith@gmail.com' //TODO: Swap to campjs email
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
      email='anna.m.gerber@gmail.com' //TODO: Swap to campjs email
    />

    <Organiser
      name='Craig Sharkie'
      twitter='twalve'
      role='Sponsorships'
      email='craig.sharkie@gmail.com' //TODO: Swap to campjs email
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
      role='Childcare Organisation'
      //TODO: email?
    />

    <Organiser
      name='Maurice Butler'
      twitter='butlermaurice'
      role='General Busy Body'
      //TODO: email?
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
