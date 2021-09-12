import ItemStyles from './styles/ItemStyles';

export default function Product({ product }) {
  return (
    <ItemStyles>
      {product.name}
      {product.price}
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
    </ItemStyles>
  );
}
