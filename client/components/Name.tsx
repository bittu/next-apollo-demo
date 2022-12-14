import { useQuery, gql } from '@apollo/client';
import Loader from './Loader';

export const GET_NAME = gql`
  query NAME {
    name
  }
`;

const Component = () => {
  const { loading, data } = useQuery(GET_NAME);

  return (
    loading ? (
      <Loader />
    ) : (
      <>
        {data.name}
      </>
    )
  )
}

export default Component
