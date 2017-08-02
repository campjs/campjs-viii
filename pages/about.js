import {
  Wrapper,
  Text,
  Box,
  NavLink,
  Link,
} from '../components'

export default () => (
  <div>
  <Wrapper title='About'>
    <Text>CampJS is for anyone who is interested in web technology. Beginners & experts, all are welcome.</Text>
    <Text>Networking with other developers is arguably the most valuable aspect of a conference, yet it’s often a hurried and fleeting affair that happens in-between the schedule of a regular conference — but CampJS isn’t a regular conference. This weekend-long retreat allows everyone enough time to learn new things, relax and most importantly: create real friendships and connections.</Text>
    <Text>CampJS creates a unique blend of expert-led, structured content and self-directed, unstructured learning. Some content is scheduled, but the main area is reserved for hacking. The final night is reserved for demos for people to show off what they have built or learned at the event.</Text>
    <Text is='h1' fontSize={1} mt={5} bold>When is CampJS?</Text>
    <Text mb={5}>
      CampJS VIII will commence at 3pm Friday on the 4th of August, and
      run through to 9am Monday the 7th of August. The Camp will be held at <a href="http://www.lordsomerscamp.com/">Lord
      Somers Camp, Victoria, Australia</a> (<a
      href="http://maps.google.com/maps?f=q&hl=en&geocode=&q=Lord+Somers+Camp+Parklands+Avenue+Somers&sll=-37.787844,145.025454&sspn=0.019637,0.046778&ie=UTF8&cid=-38391441,145152110,7610982389541332772&ll=-38.382642,145.160122&spn=0.023548,0.036478&z=14&iwloc=A&source=embed">map</a>).
    </Text>
    <Box is='a' href="http://www.panoramio.com/photo/40130986">
      <Box is='img' src="/static/camp-melb.png" />
    </Box>
    <Text>
      The venue provides food, drink and comfortable accommodation for
      the duration of the event. You may camp on the grounds if that is
      your wish. See the <Link href='/accommodation'>accommodation page</Link> for more information.
    </Text>
    <Text is='h1' fontSize={1} mt={5} bold>Transport to camp</Text>
    <Text>
      A busses will be provided to take attendees to and from the venue. Please see the <Link href='/transport'>transport</Link> page for more information.
    </Text>

    <Text is='h1' fontSize={1} mt={5} bold>What's provided?</Text>
    <Text>* Comfortable Dorm-style sleeping quarters.</Text>
    <Text>* Meals and Drinks</Text>
    <Text>* Coffee (via aldi pod machine) and Tea</Text>
    <Text>* Power &amp; Limited Internet</Text>
    <Text>* Great People</Text>
    <Text>* Prizes</Text>

    <Text is='h1' fontSize={1} mt={5} bold>What to bring</Text>
    <Text>* Earplugs</Text>
    <Text>* Warm Clothes</Text>
    <Text>* Sleeping Bag + Pillow</Text>
    <Text>* Bathroom Equipment</Text>
    <Text>* Snacks to Share</Text>
    <Text>* Computer, Phone &amp; Associated Chargers</Text>
    <Text>* Board/Card Games</Text>
    <Text>* Headphones</Text>
    <Text>* Instruments</Text>
    <Text>* Medications</Text>
    <Text>* Warm Clothes &amp; Earplugs</Text>
    <Text>* Good Attitude</Text>
    <Text>* Anything else you need to survive the weekend</Text>

    <Text is='h1' fontSize={1} mt={5} bold>Should you attend?</Text>
    <Text mb={5}>Yes you should.</Text>
    <Box is='a' href="https://twitter.com/hopefulcyborg/status/429331153611280384">
      <Box is='img' src="/static/hopefully-cyborg-tweet.png" />
    </Box>

    <Text mb={5}>To get a vibe for the event please check out the <a href="#videos">Videos</a>, <a href="https://plus.google.com/communities/106906604683614333625/photos/all">Photos</a> &amp; <a href="https://storify.com/campjs">Tweets</a> from previous events.</Text>

    <iframe src="https://player.vimeo.com/video/159874394" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
    <Text />
    <iframe width="100%" height="400" src="https://www.youtube.com/embed/4n3UMWHQE-o" frameBorder="0" allowFullScreen></iframe>

    <Text is='h1' fontSize={1} mt={5} bold>Code of Conduct</Text>
      <Text>CampJS takes pride in being accessible and welcoming for people
      from all walks of life. Participants should to review our <a
      href="/code-of-conduct/">code of conduct</a> prior to attending
    as any violations will be taken seriously.
  </Text>
    <Text>
      <NavLink mb={5} bold prefetch href={'/code-of-conduct'}>View the CampJS Code of Conduct.</NavLink>
    </Text>
  </Wrapper>
  </div>
)
