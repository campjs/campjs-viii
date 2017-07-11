import {
  Wrapper,
  Text,
  Link,
} from '../components'

export default () => (
  <div>
  <Wrapper title='Transport'>
  <Text>
    Coaches are provided to transport attendees to the camp from Melbourne Tullamarine airport and back via Melbourne CBD. Interstate and international travellers should fly into Tullamarine airport around midday, coaches will leave at 1pm and 2pm. A bus will also take attendees from the Web Directions Code conference venue to CampJS leaving at 5.30pm. Coaches will depart the camp at 7am and 10am on Monday morning, arriving Melbourne CBD at approx 8.30am and 11.30am, and airport at approx 9am and 12pm.
  </Text>
  <Text is='h1' fontSize={1} mt={5} bold>Accessibility</Text>
  <Text>
    Our coach steps are able to be lowered to provide easier access, a wheelchair accessible van is available at no additional cost but must be booked in advance so please let us know if you require this. If you have any questions or other accessibility requirements please <Link  href='/organisers'>contact us</Link> to discuss.
  </Text>
  <Text is='h1' fontSize={1} mt={5} bold>Public Transport</Text>
  <Text>
    Public buses operate from Lord Somers Camp to Frankston, which has direct trains to Melbourne Flinders Street station. For more information on journey times and connections see the <a href="https://www.ptv.vic.gov.au/journey">Public Transit Victoria</a> website.
  </Text>
  <Text is='h1' fontSize={1} mt={5} bold>Parking</Text>
  <Text>
    Car parking is available at Lord Somers Camp for cars and small caravans.
  </Text>
  </Wrapper>
  </div>
)
