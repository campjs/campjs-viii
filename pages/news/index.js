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
  <Wrapper title='News'>
    {posts.map((post, i) => (
      <NavLink href={`news/${post.id}`}>{post.date} - {post.title}</NavLink>
    ))}
  </Wrapper>
)
