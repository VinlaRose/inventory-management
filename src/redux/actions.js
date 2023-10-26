
  
  export const fetchItems = () => async(dispatch) => {
    try{
        const response = await fetch("https://inventory-management-backend.vinlarose.repl.co/items");
        const items = await response.json();
        console.log(items)
        dispatch({type: "FETCH_ITEMS", payload: items});
        
    }catch(error){
        console.log("Error fetching items", error);
        dispatch({ type: "FETCH_ITEMS_FAILURE" });
    }
  }
  
  export const addItem = (itemData) => async (dispatch) => {
    try {
      const response = await fetch(
        "https://inventory-management-backend.vinlarose.repl.co/items",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
          
          body: JSON.stringify(itemData), 
        }
      );
    
    
  
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
         dispatch({ type: "ADD_ITEM", payload: data.data });
      } else {
        console.error("Error adding item. Status:", response.status);
        dispatch({ type: "ADD_ITEM_FAILURE" });
      }
    } catch (error) {
      console.error("Error adding item:", error);
    dispatch({ type: "ADD_ITEM_FAILURE" });
    }
  };
  
  export const deleteItem = (itemId) => async (dispatch) => {
    try {
      const response = await fetch(
        `https://inventory-management-backend.vinlarose.repl.co/items/${itemId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200) {
        console.log("Item deleted successfully");
        dispatch({ type: "DELETE_ITEM", payload: itemId });
      } else {
        console.error("Error deleting item. Status:", response.status);
        dispatch({ type: "DELETE_ITEM_FAILURE" });
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      dispatch({ type: "DELETE_ITEM_FAILURE" });
    }
  };
  
 export const editItem = (itemId, updatedItemData) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://inventory-management-backend.vinlarose.repl.co/items/${itemId}`,
      {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItemData),
      }
    );

    if (response.status === 200) {
      const data = await response.json();
      console.log("Item updated successfully", data);
      dispatch({ type: "EDIT_ITEM", payload: data.updatedData });
    } else {
      console.error("Error updating item. Status:", response.status);
      dispatch({ type: "EDIT_ITEM_FAILURE" });
    }
  } catch (error) {
    console.error("Error updating item:", error);
    dispatch({ type: "EDIT_ITEM_FAILURE" });
  }
};

  
// Fetch sales items
export const fetchSales = () => async (dispatch) => {
  try {
    const response = await fetch("https://inventory-management-backend.vinlarose.repl.co/sales");
    const sales = await response.json();
    console.log(sales);
    dispatch({ type: "FETCH_SALES", payload: sales });
  } catch (error) {
    console.log("Error fetching sales items", error);
    dispatch({ type: "FETCH_SALES_FAILURE" });
  }
};

// Add a sales item
export const addSale = (saleData) => async (dispatch) => {
  console.log(saleData)
  try {
    const response = await fetch(
      "https://inventory-management-backend.vinlarose.repl.co/sales",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saleData),
      }
    );

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      dispatch({ type: "ADD_SALE", payload: data.data });
    } else {
      console.error("Error adding sale item. Status:", response.status);
      dispatch({ type: "ADD_SALE_FAILURE" });
    }
  } catch (error) {
    console.error("Error adding sale item:", error);
    dispatch({ type: "ADD_SALE_FAILURE" });
  }
};

// Edit a sales item
export const editSale = (saleId, updatedSaleData) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://inventory-management-backend.vinlarose.repl.co/sales/${saleId}`,
      {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedSaleData),
      }
    );

    if (response.status === 200) {
      const data = await response.json();
      console.log("Sale item updated successfully", data);
      dispatch({ type: "EDIT_SALE", payload: data.updatedSale });
    } else {
      console.error("Error updating sale item. Status:", response.status);
      dispatch({ type: "EDIT_SALE_FAILURE" });
    }
  } catch (error) {
    console.error("Error updating sale item:", error);
    dispatch({ type: "EDIT_SALE_FAILURE" });
  }
};

// Delete a sales item
export const deleteSale = (saleId) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://inventory-management-backend.vinlarose.repl.co/sales/${saleId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 204) {
      console.log("Sale item deleted successfully");
      dispatch({ type: "DELETE_SALE", payload: saleId });
    } else {
      console.error("Error deleting sale item. Status:", response.status);
      dispatch({ type: "DELETE_SALE_FAILURE" });
    }
  } catch (error) {
    console.error("Error deleting sale item:", error);
    dispatch({ type: "DELETE_SALE_FAILURE" });
  }
};
