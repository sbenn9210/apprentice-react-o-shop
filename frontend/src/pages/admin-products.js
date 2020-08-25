import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Table from '../components/shared/table';

function AdminProducts() {
  const products = useSelector(({ products }) => products.products);

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
