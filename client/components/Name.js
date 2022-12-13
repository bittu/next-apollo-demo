import { useQuery, gql } from '@apollo/client';

const GET_NAME = gql`
  query NAME {
    name
  }
`;

const Component = () => {
  const { loading, error, data } = useQuery(GET_NAME);

  return (
    <span>
      {loading ? '..' : data.name}
      {error && 'Error: ' + error}
    </span>
  )
}

const query = gql`
  query name {
    name
  }
`

export default Component
