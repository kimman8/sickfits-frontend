import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import styled from 'styled-components';
import OrderStyles from '../../components/styles/OrderStyles';
import DisplayError from '../../components/ErrorMessage';
import SingleOrder from '../../components/SingleOrder';
import formatMoney from '../../lib/formatMoney';

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

export default function SingleOrderPage({ query }) {
  const { loading, data, error } = useQuery(SINGLE_ORDER_QUERY, {
    variables: {
      id: query.id,
    },
  });
  if (loading) return <p>loading</p>;
  if (error) return <DisplayError error={error} />;
  const { order } = data;
  return (
    <OrderStyles>
      <Head>
        <title>Sick Fits | {order.id}</title>
      </Head>
      <p>
        <span>Order ID:</span>
        <span>{order.id}</span>
      </p>
      <p>
        <span>Charge:</span>
        <span>{order.charge}</span>
      </p>
      <p>
        <span>Order Total:</span>
        <span>{formatMoney(order.total)}</span>
      </p>
      <p>
        <span>ItemCount:</span>
        <span>{order.items.length}</span>
      </p>
      <img
        src={order?.items?.photo?.image.publicUrlTransformed}
        alt={order?.photo?.altText}
      />
      <div className="details">
        <h2>{order.name}</h2>
        <p>{order.description}</p>
        <p>{formatMoney(order.price)}</p>
      </div>
    </OrderStyles>
  );
  // return <SingleOrder id={query.id} />;
}
