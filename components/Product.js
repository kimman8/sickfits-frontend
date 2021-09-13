import Link from 'next/link';
import styled from 'styled-components';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';

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
    padding: 0 1rem;
  }
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
    </ItemStyles>
  );
}
