import {
  Wrapper,
  NavLink
} from '../../components'

export const posts = [
  {
    id: 'tickets-available',
    title: 'Tickets available',
    date: 'May 5'
  },
  {
    id: 'diversity-and-inclusion',
    title: 'Diversity and inclusion',
    date: 'July 5'
  },
    {
    id: 'cfp-closed',
    title: 'Call for Papers has now closed',
    date: 'July 11'
  }
]

export default () => (
  <Wrapper title='News' linkOffset={1}>
    {posts.map((post, i) => (
      <NavLink prefetch href={`/news/${post.id}`} key={i}>{i + 1}. {post.date} - {post.title}</NavLink>
    ))}
  </Wrapper>
)
