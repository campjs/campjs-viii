import {
  Wrapper,
  NavLink
} from '../../components'

export const posts = [
  {
    id: 'tickets-available',
    title: 'Tickets available',
    date: 'May 5'
  }
]

export default () => (
  <Wrapper title='News' linkOffset={1}>
    {posts.map((post, i) => (
      <NavLink prefetch href={`/news/${post.id}`} key={i}>{i + 1}. {post.date} - {post.title}</NavLink>
    ))}
  </Wrapper>
)
