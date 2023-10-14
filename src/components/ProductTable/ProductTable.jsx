import React from 'react';
import "./ProductTable.css";

const ProductTable = ({ products }) => {
    

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Product ID</th>
          <th>Quantity</th>
          <th>MRP</th>
          <th>Sold</th>
        </tr>
      </thead>
      <tbody>
        {products?.slice().reverse().map((product) => (
          <tr key={product._id}>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.description}</td>
            <td>{product.productId}</td>
            <td>{product.quantity}</td>
            <td>${product.mrp}</td>
            <td><button>SOLD</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
