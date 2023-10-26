import React, { useState } from 'react';
import "./ProductTable.css";
import { useDispatch } from 'react-redux';
import { deleteSale, editSale } from '../../redux/actions'; 

const SalesTable = ({ products }) => {
  const dispatch = useDispatch();
  const [editingItem, setEditingItem] = useState(null);
  const [editedItemData, setEditedItemData] = useState({});

  const deleteButton = (id) => {
    dispatch(deleteSale(id));
  }

  const editButton = (item) => {
    setEditingItem(item);
    setEditedItemData({ ...item }); 
  }

  const saveButton = () => {
    
   dispatch(editSale(editingItem._id, editedItemData));

 
    setEditingItem(null);
    setEditedItemData({});
  }

  const cancelEdit = () => {
    
    setEditingItem(null);
    setEditedItemData({});
  }

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItemData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products?.slice().reverse().map((product) => (
          <tr key={product._id}>
            <td>
              {editingItem && editingItem._id === product._id ? (
                <input
                  type="text"
                  name="name"
                  value={editedItemData.name}
                  onChange={handleEditInputChange}
                />
              ) : (
                product.name
              )}
            </td>
            <td>
              {editingItem && editingItem._id === product._id ? (
                <input
                  type="text"
                  name="category"
                  value={editedItemData.category}
                  onChange={handleEditInputChange}
                />
              ) : (
                product.category
              )}
            </td>
            <td>
              {editingItem && editingItem._id === product._id ? (
                <input
                  type="text"
                  name="description"
                  value={editedItemData.description}
                  onChange={handleEditInputChange}
                />
              ) : (
                product.description
              )}
            </td>
            <td>
              {editingItem && editingItem._id === product._id ? (
                <input
                  type="text"
                  name="productId"
                  value={editedItemData.productId}
                  onChange={handleEditInputChange}
                />
              ) : (
                product.productId
              )}
            </td>
            <td>
              {editingItem && editingItem._id === product._id ? (
                <input
                  type="text"
                  name="quantity"
                  value={editedItemData.quantity}
                  onChange={handleEditInputChange}
                />
              ) : (
                product.quantity
              )}
            </td>
            <td>
              {editingItem && editingItem._id === product._id ? (
                <input
                  type="text"
                  name="mrp"
                  value={editedItemData.mrp}
                  onChange={handleEditInputChange}
                />
              ) : (
                product.mrp
              )}
            </td>
            <td>
              {editingItem && editingItem._id === product._id ? (
                <>
                  <button onClick={saveButton}>SAVE</button>
                  <button onClick={cancelEdit}>CANCEL</button>
                </>
              ) : (
                <>
                  <button onClick={() => deleteButton(product._id)}>DELETE</button>
                  <button onClick={() => editButton(product)}>EDIT</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;
