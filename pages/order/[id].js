import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import OrderStyles from '../../components/styles/OrderStyles';
import DisplayError from '../../components/ErrorMessage';
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
      {order.items.map((item) => (
        <div className="order-item" key={item.id}>
          <img
            src={item.photo.image.publicUrlTransformed}
            alt={item.photo.altText}
          />
          <div className="item-details">
            <h2>{item.name}</h2>
            <p>Qty: {item.quantity}</p>
            <p>Each: {formatMoney(item.price)}</p>
            <p>Subtotal: {formatMoney(item.price * item.quantity)}</p>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </OrderStyles>
  );
  // return <SingleOrder id={query.id} />;
}
