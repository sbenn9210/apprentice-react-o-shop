import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import history from '../../utils/history';

import TextInput from '../shared/text-input';
import { productActions } from '../../store/product/action';
import ProductCard from '../../pages/product-card';

function ProductForm(props) {
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
      history.push('/admin-products');
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const productFields = [
    {
      type: 'text',
      name: 'title',
      placeholder: 'Title',
      id: 'title',
      value: title,
      onchange: onChange,
    },
    {
      type: 'text',
      name: 'price',
      placeholder: 'Price',
      id: 'price',
      value: price,
      onchange: onChange,
    },
    {
      type: 'select',
      name: 'category',
      placeholder: 'Category',
      id: 'category',
      value: category,
      onchange: onChange,
    },
    {
      type: 'text',
      name: 'image',
      placeholder: 'Image',
      id: 'image',
      value: image,
      onchange: onChange,
    },
  ];

  const { className } = props;

  return (
    <div className={className}>
      <div className="col-lg-8 col-sm-12">
        <h1>Add New Product</h1>
        <form name="product-form" onSubmit={handleSubmit}>
          {productFields.map((field, index) =>
            field.type === 'text' ? (
              <div className="form-group" key={index}>
                <label htmlFor="title">{field.placeholder}</label>
                <TextInput
                  type={field.type}
                  name={field.name}
                  id={field.id}
                  value={field.value}
                  onChange={onChange}
                />
              </div>
            ) : (
              <div className="form-group" key={index}>
                <label htmlFor="category">{field.placeholder}</label>
                <select
                  className="form-control"
                  name={field.name}
                  id={field.id}
                  value={field.value}
                  onChange={onChange}
                >
                  {categoryOptions.map(({ name }, index) => (
                    <option value={name} key={index} disabled={name === ''}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            )
          )}
          <div className="form-group">
            <button className="btn btn-primary">Save Product</button>
          </div>
        </form>
      </div>
      <ProductCard title={title} price={price} image={image} />
    </div>
  );
}

export default ProductForm;
