import { render } from '@testing-library/react';
import About from '@/pages/about';

describe('About', () => {

  it('should render about page', async () => {
    const { findByTestId } = render(
      <About />
    )

    expect(await findByTestId("heading")).toHaveTextContent("About Page");
  })
})