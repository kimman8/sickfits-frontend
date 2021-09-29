import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import DisplayError from './ErrorMessage';

const OrderStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  max-width: var(--maxWidth);
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order: Order(where: { id: $id }) {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export default function SingleOrder({ id }) {
  const { loading, data, error } = useQuery(SINGLE_ORDER_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>loading</p>;
  if (error) return <DisplayError error={error} />;
  const { Order } = data;
  return (
    <OrderStyles>
      <Head>
        <title>Sick Fits | {Order.name}</title>
      </Head>
      <img
        src={Order.photo.image.publicUrlTransformed}
        alt={Order.photo.altText}
      />
      <div className="details">
        <h2>{Order.name}</h2>
        <p>{Order.description}</p>
        <p>{formatMoney(Order.price)}</p>
      </div>
    </OrderStyles>
  );
}
