import { gql, useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import Loader from '../Loader';
import Card from './Card';

const getList = gql`
  query GetList($offset: Int, $limit: Int) {
    list(offset: $offset, limit: $limit) {
      id,
      name,
      address,
      email,
      phoneNumber
    }
  }
`;

interface TListQueryVars {
  offset: number,
  limit: number
}

export interface TData {
  id: string,
  name: string,
  address: string,
  email: string,
  phoneNumber: string,
}
interface TDataList {
  list: [TData]
}

export default function CardList() {
  const [fetchList, { loading, error, data, refetch }] = useLazyQuery<TDataList, TListQueryVars>(getList, { refetchWritePolicy: "merge" });

  useEffect(() => {
    if (!data?.list.length) {
      fetchList({ variables: { offset: 0, limit: 20 }})
    }
  }, [])

  return (
    <>
      {data?.list.length && (
        <div className="grid">
          {data.list.map((val: TData) => (
            <Card key={val.id} user={val} />
          ))}
        </div>
      )}
      {error && (
        <div className="errorMessage">{error.message}</div>
      )}
      {loading ? (
        <Loader />
      ) : (
        <button
          type="button"
          className="loadMoreBtn"
          onClick={() => refetch({ offset: data.list.length + 20, limit: 20 })}
        >
          {error ? (
            'Retry'
          ) : (
            'Load More ...'
          )}
        </button>
      )}
    </>
  )
}