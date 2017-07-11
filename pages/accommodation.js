import {
  Wrapper,
  Text,
  Box,
  Link,
} from '../components'

export default () => (
  <div>
  <Wrapper title='Accommodation'>
  <Text>
    CampJS VIII will be held at <Link href='http://www.lordsomerscamp.com/'>Lord
    Somers Camp, Victoria, Australia</Link> (<Link
    href='http://maps.google.com/maps?f=q&hl=en&geocode=&q=Lord+Somers+Camp+Parklands+Avenue+Somers&sll=-37.787844,145.025454&sspn=0.019637,0.046778&ie=UTF8&cid=-38391441,145152110,7610982389541332772&ll=-38.382642,145.160122&spn=0.023548,0.036478&z=14&iwloc=A&source=embed'>map</Link>). The venue is about 1.5hrs drive from Melbourne CBD, on the Mornington Peninsula.
  </Text>
  <Text>
    The accommodation at Lord Somers is dormitory style, with shared bathrooms. The dorms are comfortable and heated. Bunks with mattresses are provided for sleeping, you will need to bring your own pillow, sleeping bag and linen. There is space for tent camping, you will need to bring your own tent and camping equipment. Please see the <Link href='/food'>food page</Link> for information on meals.
  </Text>
  <Text>
    There is a women&#39;s acommodation wing with it&#39;s own bathrooms and common room. Bathrooms in the common areas of the camp are non gendered and attendees are supported in using the accommodation and bathroom options that they are comfortable with. CampJS is committed to providing an inclusive and safe environment for all so please <Link href='/organisers'>contact us</Link> if you have any questions about facilities and accommodation.
  </Text>
  <Text is='h1' fontSize={1} mt={5} bold>Accessibility</Text>
  <Text>
    Lord Somers Camp provides ramps, accessible bathrooms and shower chairs and welcomes guide dogs. If you have specific accessibility requirements please <Link href='/organisers'>contact us</Link> so that we can make arrangements with the venue and transport providers.
  </Text>
  <Text is='h1' fontSize={1} mt={5} bold>Families</Text>
  <Text>
    Families are welcome at CampJS, please <Link href='/organisers'>contact us</Link> if you would like to bring your family so that we can arrange appropriate accommodation. Family tickets and more information will be available soon.
  </Text>
  <Text is='h1' fontSize={1} mt={5} bold>Alternative Accommodation</Text>
  <Text>
    The Mornington Peninsula is a popular holiday spot so there are plenty of alternative accommodation options nearby for attendees that would prefer to stay offsite. Please see the <Link href='/transport'>transport page</Link> for more information about traveling to and from the camp.
  </Text>
  </Wrapper>
  </div>
)
