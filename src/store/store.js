import { configureStore } from "@reduxjs/toolkit";
import cartListReducer from "../reducers/cartSlise"

const store = configureStore({
	reducer: {
		//из файла productsListSlice.js - name: 'productsList' 
		// productsListReducer - редюсеры от туда же
		cartList: cartListReducer
	},
	
});
export default store;