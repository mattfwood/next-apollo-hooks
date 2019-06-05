import { Query } from 'react-apollo'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import { allPostsQuery, allPostsQueryVars } from './PostList';


export default function NewPostList() {
  const { data, loading } = useQuery(allPostsQuery, {
    variables: allPostsQueryVars
  });

  console.log({ data, loading });

  return (
    <div>New Post List</div>
  )
}