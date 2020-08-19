import React from 'react';
import { Link } from 'react-router-dom';

function AdminProducts() {
  return (
    <div>
      <h1>Admin Products</h1>
      <Link to="/admin-products/new">
        <button className="btn btn-primary">New Product</button>
      </Link>
    </div>
  );
}

export default AdminProducts;
