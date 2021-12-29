import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import SingleProduct, { SINGLE_ITEM_QUERY } from '../components/SingleProduct';
import { fakeItem } from '../lib/testUtils';
import { CartStateProvider } from '../lib/cartState';

const product = fakeItem();

const mocks = [
  {
    // when someone requests this query and variable combo
    request: {
      query: SINGLE_ITEM_QUERY,
      variables: {
        id: '123',
      },
    },
    // return this data
    result: {
      data: {
        Product: product,
      },
    },
  },
];

describe('<SingleProduct/>', () => {
  it('renders with proper data', async () => {
    // we need to make some fake data
    const { container, debug } = render(
      <CartStateProvider>
        <MockedProvider mocks={mocks}>
          <SingleProduct id="123" />
        </MockedProvider>
      </CartStateProvider>
    );
    debug();
    // wait for the testid to show up
    await screen.findByTestId('singleProduct');
  });
});
