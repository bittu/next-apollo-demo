import { render } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import { GET_NAME } from "@/components/Name";
import Home from '@/pages/index';

describe('Home', () => {

  const mocks = [
    {
      request: {
        query: GET_NAME
      },
      result: {
        data: {
          name: "Lorem Ipsum"
        }
      }
    }
  ];

  it('should render welcome heading', async () => {
    const { findByTestId, findByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    )

    expect(await findByTestId("loader")).toBeInTheDocument();
    expect(await findByText('Welcome, Lorem Ipsum')).toBeInTheDocument();
  })
})