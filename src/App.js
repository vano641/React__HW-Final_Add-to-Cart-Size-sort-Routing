import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import store from "./store/store";
import MainPage from "./components/MainPage";
import ShoppingCart from "./components/ShoppingCart";
import CatalogPage from "./components/CatalogPage";
// import Test from "./components/text";


function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<MainPage />}/>
            <Route path='/cart' element={<ShoppingCart />}/>
            <Route path='/catalogpage' element={<CatalogPage />}/>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
    
  );
}

export default App;
