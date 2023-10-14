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
        default :
            return state

    }
}
