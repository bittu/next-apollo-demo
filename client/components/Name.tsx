import { useQuery, gql } from '@apollo/client';
import Loader from './Loader';

const GET_NAME = gql`
  query NAME {
    name
  }
`;

const Component = () => {
  const { loading, error, data } = useQuery(GET_NAME);

  return (
    loading ? (
      <Loader />
    ) : (
      <span>
        {error ? (
          error.message
        ) : (
          data.name
        )}
      </span>
    )
  )
}

export default Component
