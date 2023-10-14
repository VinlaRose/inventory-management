
  
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
  
  