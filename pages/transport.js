import {
  Wrapper,
  Text,
  Link,
} from '../components'

export default () => (
  <div>
  <Wrapper title='Transport'>
  <Text>
    Coaches are provided to transport attendees to the camp from Melbourne Tullamarine airport and back via Melbourne CBD. Interstate and international travellers should fly into Tullamarine airport around midday.
  </Text>

  <Text is='h1' fontSize={1} mt={5} bold>Airport Bus</Text>
  <Text>The busses leave at 1pm or 2pm. Meet on Arrival Drive outside the ParkRoyal Hotel.</Text>
  <Text><a href="https://goo.gl/maps/KgLbGgsiGD92">https://goo.gl/maps/KgLbGgsiGD92</a></Text>
  <Text>Kevin Vanderbeken (0438594258) is the airport contact person. Please let him know if you're late, lost or anything has changed.</Text>

  <Text is='h1' fontSize={1} mt={5} bold>Melbourne CBD Bus</Text>
  <Text>The busses leave at 1.30pm or 2.30pm. Meet at the Federation Square Bus Loop.</Text>
  <Text><a href="https://goo.gl/maps/6n7t58jAmGw">https://goo.gl/maps/6n7t58jAmGw</a></Text>
  <Text>Matt Carter (0422240866) is the CBD contact person. Please let him know if you're late, lost or anything has changed.</Text>

  <Text is='h1' fontSize={1} mt={5} bold>Web Directions Code Bus</Text>
  <Text>The bus leaves at 5.30pm. Meet at the National Gallery of Victoria on St Kilda Rd.</Text>
  <Text><a href="https://goo.gl/maps/f3MBGxpCakE2">https://goo.gl/maps/f3MBGxpCakE2</a></Text>
  <Text>Craig Sharkie (0488070971) is the Web Directions Code contact person. Please let him know if you're late, lost or anything has changed.</Text>

  <Text is='h1' fontSize={1} mt={5} bold>Monday Return Bus 1</Text>
  <Text>The bus leaves CampJS at 7.00am.</Text>
  <Text>It stops at the Federation Square Bus Loop at approximately 9am.</Text>
  <Text>It terminates at Tullamarine Airport at approximately 10am.</Text>
  <Text>Glen Arrowsmith (040061084) is the return bus contact person. Please let him know if you're late, lost or anything has changed.</Text>

  <Text is='h1' fontSize={1} mt={5} bold>Monday Return Bus 2</Text>
  <Text>The bus leaves CampJS at 9.30am.</Text>
  <Text>It stops at the Federation Square Bus Loop at approximately 11am.</Text>
  <Text>It terminates at Tullamarine Airport at approximately 12pm.</Text>
  <Text>Glen Arrowsmith (040061084) is the return bus contact person. Please let him know if you're late, lost or anything has changed.</Text>

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
