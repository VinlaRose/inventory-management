const initialState = {
    items : [],
    soldItems: [],
    loading: false,
    error: null,
}


export const inventoryReducer = (state = initialState, action) => {
    switch (action.type){
        case "FETCH_ITEMS":
            return {
                ...state,
                items : action.payload,
                loading: false,
                error: null
            };
        case "FETCH_ITEMS_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error fetching items"
            };
        case "ADD_ITEM":
            return{
                ...state,
                items:  [...state.items, action.payload],
                loading: false,
                error: null
            }
        case "ADD_ITEM_FAILURE":
            return{
                ...state,
                loading: false,
                error: "Error adding item to itenary"
            }

        case "DELETE_ITEM":
            const updatedItems = state.items.filter((item) => item._id !== action.payload);
            console.log(action.payload)
            console.log(updatedItems)
            return {
                ...state,
                loading: false,
                items: updatedItems,
                error: null
            };

        case "DELETE_ITEM_FAILURE":
             return {
            ...state,
            loading: false,
            error: "Error deleting item",
            };

        case "EDIT_ITEM":
                const editedItems = state.items.map((item) =>
                item._id === action.payload._id ? action.payload : item);
            return {
            ...state,
            loading: false,
            items: editedItems,
            };

        case "EDIT_ITEM_FAILURE":
            return {
            ...state,
            loading: false,
            error: "Error editing item",
            };

         case "FETCH_SALES":
      return {
        ...state,
        soldItems: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_SALES_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error fetching sales items",
      };
    case "ADD_SALE":
        console.log(action.payload)
      return {
        ...state,
        soldItems: [...state.soldItems, action.payload],
        loading: false,
        error: null,
      };
    case "ADD_SALE_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error adding sale item",
      };
    case "DELETE_SALE":
      const updatedSales = state.soldItems.filter((sale) => sale._id !== action.payload);
      return {
        ...state,
        loading: false,
        soldItems: updatedSales,
        error: null,
      };
    case "DELETE_SALE_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error deleting sale item",
      };
    case "EDIT_SALE":
      const editedSales = state.soldItems.map((sale) =>
        sale._id === action.payload._id ? action.payload : sale
      );
      return {
        ...state,
        loading: false,
        soldItems: editedSales,
        error: null,
      };
    case "EDIT_SALE_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error editing sale item",
      };
        default :
            return state

    }
}
