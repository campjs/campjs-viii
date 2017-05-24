import {
  Wrapper,
  Box
} from './'

export const posts = [
  {
    id: 'tickets-available',
    title: 'Tickets available',
    date: 'May 5'
  }
]

export default ({
  title,
  children,
  date,
  ...props
}) => (
  <Wrapper {...props}
    backLink='/news'
    backText='Back to news'
    title={`${title} - News`}>
    <Box mb={6} css={{ opacity: 0.5 }}>{date}</Box>
    {children}
  </Wrapper>
)
