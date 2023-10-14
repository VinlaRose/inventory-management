import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/actions'; 

const AddItem = () => {
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState({
    name: '',
    category: '',
    description: '',
    productId: '',
    quantity: '',
    mrp: '',
    soldStatus: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  const handleAddItem = () => {
    dispatch(addItem(newItem));
    setNewItem({
      name: '',
      category: '',
      description: '',
      productId: '',
      quantity: '',
      mrp: '',
      soldStatus: false,
    });
    
    
  };

  return (
    <div className="add-item">
      <h2>Add New Item</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={newItem.name} onChange={handleChange} />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={newItem.category} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={newItem.description} onChange={handleChange} />
        </label>
        <label>
          Product ID:
          <input type="number" name="productId" value={newItem.productId} onChange={handleChange} />
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" value={newItem.quantity} onChange={handleChange} />
        </label>
        <label>
          MRP:
          <input type="number" name="mrp" value={newItem.mrp} onChange={handleChange} />
        </label>
        <button type="button" onClick={handleAddItem}>
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
