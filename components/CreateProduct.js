import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'shoes',
    description: 'da best shoes',
    price: 5443,
  });
  return (
    <Form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={inputs.name}
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          value={inputs.price}
        />
      </label>
      <label htmlFor="description">
        Description
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={inputs.description}
        />
      </label>
      <button type="button" onClick={clearForm}>
        + Add Product
      </button>
    </Form>
  );
}
