import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import Nav from '../components/Nav';
import { CURRENT_USER_QUERY } from '../components/User';
import { fakeCartItem, fakeUser } from '../lib/testUtils';
import { CartStateProvider } from '../lib/cartState';

// make some mocks for being logged in, logged out and logged in with cart items
const notSignedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { authenticatedItem: null } },
  },
];

const signedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { authenticatedItem: fakeUser() } },
  },
];

const signedInMocksWithCartItems = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        authenticatedItem: fakeUser({
          cart: [fakeCartItem()],
        }),
      },
    },
  },
];

// console.log(signedInMocksWithCartItems);
describe('<Nav/>', () => {
  it('Renders a minimal nav when signed out', () => {
    const { container, debug } = render(
      <CartStateProvider>
        <MockedProvider mocks={notSignedInMocks}>
          <Nav />
        </MockedProvider>
      </CartStateProvider>
    );
    expect(container).toHaveTextContent('Sign In');
    expect(container).toHaveTextContent('Products');
    expect(container).toHaveTextContent('ProductsSign In');
    expect(container).toMatchSnapshot();
    const link = screen.getByText('Sign In');
    const productsLink = screen.getByText('Products');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/signin');
    expect(productsLink).toHaveAttribute('href', '/products');
  });
  it('Renders a full nav when signed in', async () => {
    const { container, debug } = render(
      <CartStateProvider>
        <MockedProvider mocks={signedInMocks}>
          <Nav />
        </MockedProvider>
      </CartStateProvider>
    );
    await screen.findByText('Orders');
    expect(container).toMatchSnapshot();
    // const signOutLink = screen.findByText('Sign Out');
    // expect(signOutLink).toHaveAttribute('button', 'Sign Out');
    expect(container).toHaveTextContent('Sign Out');
    expect(container).toHaveTextContent('My Cart');
    expect(container).toHaveTextContent('Sell');
  });
  it('Renders the number of items in the cart', async () => {
    const { container, debug } = render(
      <CartStateProvider>
        <MockedProvider mocks={signedInMocksWithCartItems}>
          <Nav />
        </MockedProvider>
      </CartStateProvider>
    );
    await screen.findByText('Orders');
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
