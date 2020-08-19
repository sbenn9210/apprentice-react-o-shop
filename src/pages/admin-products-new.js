import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import TextInput from '../components/shared/text-input';
import { productActions } from '../store/product/action';

function AdminProductsNew() {
  const [inputs, setInputs] = useState({
    title: '',
    price: '',
    category: '',
    image: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const { title, price, category, image } = inputs;

  const categoryOptions = [
    { name: '', id: '' },
    { name: 'Bread', id: 'bread' },
    { name: 'Vegetables', id: 'vegetables' },
    { name: 'Fruits', id: 'fruits' },
    { name: 'Dairy', id: 'dairy' },
  ];

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title && price && category && image) {
      setSubmitted(true);
      dispatch(productActions.createProduct(title, price, category, image));
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div className="col-lg-4 offset-lg-4">
      <h1>Add New Product</h1>
      <form name="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <TextInput
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label className="d-block" htmlFor="price">
            Price
          </label>
          <div className="input-group">
            <span className="input-group-text">$</span>
            <TextInput
              className="input-group-text"
              type="text"
              name="price"
              id="price"
              value={price}
              onChange={onChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            className="form-control"
            name="category"
            id="category"
            value={category}
            onChange={onChange}
          >
            {categoryOptions.map(({ name }, index) => (
              <option value={name} key={index} disabled={name === ''}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <TextInput
            type="text"
            name="image"
            id="image"
            value={image}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">New Product</button>
        </div>
      </form>
    </div>
  );
}

export default AdminProductsNew;
