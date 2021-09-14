import Link from 'next/link';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';

const KimsTitle = styled.h3`
  margin: 0 1rem;
  text-align: center;
  position: relative;
  transform: skew(-5deg) rotate(-1deg);
  margin-top: -3rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);

  a {
    background: var(--red);
    padding: 0 1rem;
    display: inline;
    line-height: 1.3;
    color: white;
    font-size: 4rem;
  }
`;

const PriceStyle = styled.h4`
  transform: rotate(3deg);
  background: var(--red);
  position: absolute;
  color: white;
  font-size: 3rem;
  margin: 0;
  text-align: center;
  padding: 0 1rem;
  display: inline-block;
  font-weight: 600;
  line-height: 1;
  padding: 5px;
  top: -3px;
  right: -3px;
`;

export default function Product({ product }) {
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />

      <KimsTitle>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </KimsTitle>
      <PriceStyle>{formatMoney(product.price)}</PriceStyle>
      <p>{product.description}</p>
    </ItemStyles>
  );
}
