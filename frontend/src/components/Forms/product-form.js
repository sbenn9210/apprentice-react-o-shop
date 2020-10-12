import React, { useState, useEffect } from 'react';
import history from '../../utils/history';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import TextInput from '../shared/text-input';
import ProductCard from '../../pages/product-card';
import { productActions } from '../../store/product/action';
import { productsActions } from '../../store/products/action';

function ProductForm(props) {
  const [inputs, setInputs] = useState({
    id: '',
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
      history.push('/admin-products');
      if (id) {
        let numberID = Number(id);
        dispatch(
          productsActions.updateProduct({
            id: numberID,
            title,
            price,
            category,
            image,
          })
        );
      } else {
        dispatch(productActions.createProduct(title, price, category, image));
      }
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  let { id } = useParams();

  let products = useSelector(({ products }) => products.products);

  useEffect(() => {
    if (id) {
      let item = products.find((product) => product.id === Number(id));
      setInputs(item);
    }
  }, []);

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
