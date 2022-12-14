import { render, RenderResult, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import userEvent from '@testing-library/user-event';
import { getList } from "@/components/List/CardList";
import List from '@/pages/list';
import { act } from 'react-dom/test-utils';
import { InMemoryCache } from '@apollo/client';
import { list1, list2 } from '@/mocks/data';
import { offsetLimitPagination } from '@apollo/client/utilities';

describe('List', () => {

  const mocks = [
    {
      request: {
        query: getList,
        variables: { offset: 0, limit: 20 }
      },
      result: {
        data: {
          list: list1
        }
      }
    },
    {
      request: {
        query: getList,
        variables: { offset: 21, limit: 20 }
      },
      result: {
        data: {
          list: list2
        }
      }
    }
  ];

  it('should render list', async () => {
    render(
      <MockedProvider mocks={mocks} defaultOptions={{
        watchQuery: { fetchPolicy: 'no-cache', refetchWritePolicy: "merge" },
        query: { fetchPolicy: 'no-cache' },
      }} cache={new InMemoryCache({
        typePolicies: {
          Query: {
            queryType: true,
            fields: {
              list: offsetLimitPagination()
            }
          }
        }
      })}>
        <List />
      </MockedProvider>
    )
    expect(await screen.findByTestId("loader")).toBeInTheDocument();

    await waitFor(async () => {
      expect((await screen.getAllByTestId('cardItem')).length).toBe(20);
    });

    const loadMoreBtn = screen.getByTestId("loadMore");
    await userEvent.click(loadMoreBtn);

    await waitFor(async () => {
      expect((await screen.getAllByTestId('cardItem')).length).toBe(40)
    });
  })

  it('should render error and refetch success', async () => {
    const errorMock = [{
      request: {
        query: getList,
        variables: { offset: 0, limit: 20 }
      },
      error: new Error("Failed to fetch")
    }, {
      request: {
        query: getList,
        variables: { offset: 0, limit: 20 }
      },
      result: {
        data: {
          list: list1
        }
      }
    }]
    render(
      <MockedProvider mocks={errorMock}>
        <List />
      </MockedProvider>
    )

    expect(await screen.findByTestId("loader")).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText('Failed to fetch')).toBeInTheDocument());
    const loadMoreBtn = screen.getByTestId("loadMore");
    expect(loadMoreBtn.textContent).toBe("Retry");

    await userEvent.click(loadMoreBtn);

    await waitFor(async () => {
      expect((await screen.getAllByTestId('cardItem')).length).toBe(20);
    });
  })
})