import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import { perPage } from '../config';
import DisplayError from './ErrorMessage';
import PaginationStyles from './styles/PaginationStyles';

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;

export default function Pagination({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);
  if (loading) return <p>loading..</p>;
  if (error) return <DisplayError error={error} />;
  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage);
  return (
    <PaginationStyles>
      <Head>
        <title>
          Sick Fits | Page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${parseInt(page) - 1}`}>
        <a aria-disabled={page <= 1}>⇦ Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} items total</p>
      <Link href={`/products/${parseInt(page) + 1}`}>
        <a aria-disabled={page >= pageCount}>Next ➪</a>
      </Link>
    </PaginationStyles>
  );
}
