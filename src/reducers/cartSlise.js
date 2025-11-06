import { createSlice } from '@reduxjs/toolkit';

const KeyLocalStorage = "cart-list";
// обновляем изначальное состояние карзины из localStorage
const initialState = JSON.parse(localStorage.getItem(KeyLocalStorage)) || [];
    // [
    // {
    //     id: 1,
    //     img: "img/items/item_1.svg",
    //     overlay: "../img/items/items_hover.svg",
    //     h5: "ELLERY X M'O CAPSULE",
    //     p: "Known for her sculptural takes on traditional   tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    //     price: 52.00,
    //     color: "Red",
    //     size: "M"
    // },
    
// ];


export const cartSlice = createSlice({
  name: 'cartList',
  initialState, // state
  reducers: {

    addProductToCart: (state, action) => {
     
      // добавляем в массив initialState пришедший повар
        state.push(action.payload);
        // записываем изменное состояние в localStorage
        localStorage.setItem(KeyLocalStorage, JSON.stringify(state))
        return state;
    },

    increaseQuontity: (state, action) => {
      const product = state.find(product => product.id === action.payload.id);
      if (product) {
        product.cartquontity = action.payload.quontity;
      }
      localStorage.setItem(KeyLocalStorage, JSON.stringify(state)) 
    },

    delProductFromCart: (state, action) => {
      // const newList = initialState.filter((element) => element.id !== action.payload);
      const newList = state.filter((element) => element.id !== action.payload);
      localStorage.setItem(KeyLocalStorage, JSON.stringify(newList))
      return state.filter((element) => element.id !== action.payload);
      // window.location.reload();
      
    },

    clearShoppingCart: (state, action) => {
      localStorage.removeItem(KeyLocalStorage);
    }
  }

})

export const { addProductToCart, delProductFromCart, increaseQuontity, clearShoppingCart} = cartSlice.actions;
export default cartSlice.reducer