export function FilterReducer({ state, action }) {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_RATING":
      return { ...state, rating: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "FILTER_BY_BRAND":
      return { ...state, brand: action.payload };
    case "CLEAR_FILTER":
      return {
        by_Rating: 0,
        searchQuery: "",
        brand: "",
      };

    default:
      return state;
  }
}
