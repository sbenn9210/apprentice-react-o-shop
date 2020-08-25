import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Table from '../components/shared/table';
import { productService } from '../services/product-service';
import { productsActions } from '../store/products/action';

function AdminProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    productService.getProducts().then(books => dispatch(productsActions.getProducts(books)))
  }, [dispatch])

  let products = useSelector(({products}) => products.products)
  
  const columns = [
    { header: 'Author', name: 'author' },
    { header: 'Name', name: 'title' },
    { header: '', name: 'editable' },
  ];

  return (
    <div className="col-lg-8 offset-lg-2">
      <h1>Admin Products</h1>
      <Table
        data={products}
        columns={columns}
        editable={true}
        editUrl={'/admin-products/new'}
      />
      <Link to="/admin-products/new">
        <button className="btn btn-primary">New Product</button>
      </Link>
    </div>
  );
}

export default AdminProducts;
