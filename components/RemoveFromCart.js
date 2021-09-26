import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';

const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;
const BigButton = styled.button`
  background: none;
  font-size: 3rem;
  border: 0;
  &:hover {
    color: var(--red);
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}
export default function RemoveFromCart({ id }) {
  const [removeFromCart, { loading }] = useMutation(REMOVE_FROM_CART_MUTATION, {
    variables: { id },
    update,
  });
  return (
    <BigButton
      type="button"
      onClick={() => {
        removeFromCart().catch((err) => console.log(err.message));
      }}
      disabled={loading}
      title="Remove Item from cart"
    >
      &times;
    </BigButton>
  );
}
