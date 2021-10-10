import React from 'react';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import styled from 'styled-components';
import OrderItemStyles from '../components/styles/OrderItemStyles';
import DisplayError from '../components/ErrorMessage';
import formatMoney from '../lib/formatMoney';

const USER_ORDERS_QUERY = gql`
  query {
    allOrders {
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

const OrderUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 4rem;
`;

function countItemsInAnOrder(order) {
  return order.items.reduce((tally, item) => tally + item.quantity, 0);
}

export default function OrdersPage() {
  const { loading, data, error } = useQuery(USER_ORDERS_QUERY);
  if (loading) return <p>loading</p>;
  if (error) return <DisplayError error={error} />;
  const { allOrders } = data;
  return (
    <div>
      <Head>
        <title>Your orders ({allOrders.length})</title>
      </Head>
      <h2>You have {allOrders.length} orders!</h2>
      <OrderUl>
        {allOrders.map((order) => (
          <OrderItemStyles>
            <Link href={`/order/${order.id}`}>
              <a>
                <div className="order-meta">
                  <p>
                    {countItemsInAnOrder(order)}
                    {countItemsInAnOrder(order) > 1 ? ' Items' : ' Item'}
                  </p>
                  <p>
                    {order.items.length} Product
                    {order.items.length === 1 ? '' : 's'}
                  </p>
                  <p>{formatMoney(order.total)}</p>
                </div>
                <div className="images">
                  {order.items.map((item) => (
                    <img
                      src={item.photo?.image?.publicUrlTransformed}
                      alt={item.name}
                      key={`image-${item.id}`}
                    />
                  ))}
                </div>
              </a>
            </Link>
          </OrderItemStyles>
        ))}
      </OrderUl>
    </div>
  );
  // return <SingleOrder id={query.id} />;
}
