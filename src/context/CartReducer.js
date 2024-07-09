export function CartReducer(state, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };

    case "SET_PRODUCTS_ON_CART": {
      let itPresent = false;
      state.cart.map((item) => {
        if (item.id === action.payload.id) {
          itPresent = true;
        }
      });
      if (itPresent) {
        return state;
      }
      const newProd = { ...action.payload, qty: 1 };
      return { ...state, cart: [...state.cart, newProd] };
    }

    case "DEC_QTY_ON_CART": {
      const decQtyCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: item.qty > 1 ? item.qty - 1 : item.qty };
        }
        return item;
      });
      return { ...state, cart: decQtyCart };
    }

    case "INC_QTY_ON_CART": {
      const incQtyCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
      return { ...state, cart: incQtyCart };
    }

    case "DEL_ON_CART": {
      const delItem = state.cart.filter((item) => item.id != action.payload);
      return { ...state, cart: delItem };
    }

    default:
      return state;
  }
}
