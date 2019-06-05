import App from '../components/App'
import Header from '../components/Header'
import Submit from '../components/Submit'
import NewPostList from '../components/NewPostList';
import PostList from '../components/PostList'

export default () => (
  <App>
    <Header />
    {/* <Submit /> */}
    <PostList />
    <NewPostList />
  </App>
)
