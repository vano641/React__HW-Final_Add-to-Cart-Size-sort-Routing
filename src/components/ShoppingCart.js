import "../style/shoppingcart.css"
import { useSelector, useDispatch } from "react-redux";
import { delProductFromCart, increaseQuontity, clearShoppingCart } from "../reducers/cartSlise";

import Footer from "./Footer";
import Header from "./Header";
import Subscribe from "./Subscribe";
import { useState } from "react";


const ShoppingCart = () => {
    // Загружаем в карзину "initialState", который обновляется из localStorage
    const [cart, setCart] = useState(useSelector((state) => state.cartList))
    const [totalprice, setTotalPrice] = useState(getTotalPrice(cart));
     
    const dispatch = useDispatch();

    // подсчет общес стоимости корзины
    function getTotalPrice(cart) {
        let totalprice = 0;
        cart.forEach(element => {
            const elemSum = element.cartquontity * element.price;
            totalprice += elemSum;
        });
        return totalprice;
    }

    const handleDelProductFromCart = (id) => {
        // window.location.reload(); // если не обновить страницу, то товары из localstorage не удаляются почему то
        const newCart = cart.filter((element) => element.id !== id);
        setCart(newCart);
        dispatch(delProductFromCart(id));
    }

    const addQuontity = (id) => {
        const findProdInState = cart.find(item => item.id === id);
        if (findProdInState && findProdInState.cartquontity < 10) {
            const quontity = findProdInState.cartquontity + 1;
            dispatch(increaseQuontity({quontity, id}));
            window.location.reload()
        }
    }
    
    const reduceQuontity = (id) => {
        const findProdInState = cart.find(item => item.id === id);
        if (findProdInState && findProdInState.cartquontity >= 1) {
            const quontity = findProdInState.cartquontity - 1;
            dispatch(increaseQuontity({quontity, id}));
            window.location.reload()
        } else if (findProdInState && findProdInState.cartquontity === 0) {
            alert("Если хотите удалить товар из корзины, то нажмите <<Крестик>>\n Но лучше купите)))")
        }
    }
    
    const clearCart = () => {
        dispatch(clearShoppingCart())
        window.location.reload()
    }
    
    const dispCart = cart.map((item) => (
            <article key={item.id} className="cart-item">
                <img className="cart-item__img" src={item.img} alt="goods-item"/>
                <div className="cart-item__discription">
                    <h3 className="cart-item__h3">{item.h5}<span>T-SHIRT</span></h3>

                    <div className="cart-item__property">
                        <p className="cart-item__text">Price:<span className="cart-item__price">{item.price}</span></p>
                        <p className="cart-item__text">Color: {item.color}</p>
                        <p className="cart-item__text">Size: {item.size}</p>
                        <p className="cart-item__text">Quantity: <span><input className="cart-item__quantity"
                                    type="number" value={item.cartquontity} /></span>
                        </p>
                        <div className="cart-item__quontity-btn">
                            <button onClick={() => addQuontity(item.id)}>+ 1</button>
                            <button onClick={() => reduceQuontity(item.id)}>- 1</button>
                        </div>
                    </div>
                </div>
                <svg onClick={() => handleDelProductFromCart(item.id)} className="cart-item__imgcross" width="18" height="18" viewBox="0 0 18 18" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                        fill="#575757" />
                </svg>
            </article>
        ));
    
    return (
        <>
            <div className="toptop">
                <Header />
                <header id="main-headline" class="new-arrivals__header center">
                    <h2 class="new-arrivals__header_h2">SHOPPING CART</h2>
                </header>
                <section className="cart center">
                    <div class="cart__goods">
                        {dispCart}
                    
                    <div class="goods-buttons">
                        <button onClick={() => clearCart()} class="goods-buttons__push">CLEAR SHOPPING CART</button>
                        <button class="goods-buttons__push">CONTINUE SHOPPING</button>
                    </div>
                    </div>
                
                    <div class="cart__form">
                    <div class="form-field">
                        <h3 class="form-field__h3">SHIPPING ADRESS</h3>
                        <form class="form-field__box" action="#">
                            <input class="form-field__boxtext" type="text" autofocus required placeholder="Bangladesh" />
                            <input class="form-field__boxtext" type="text" required placeholder="State"/>
                            <input class="form-field__boxtext" type="number" required placeholder="Postcode/Zip" />
                            <p>
                                <button class="form-field__button" type="submit">GET A QUOTE</button>
                            </p>
                        </form>
                    </div>

                    <div class="form-proced">
                        <div class="form-proced__checkout">
                            <pre class="form-proced__sub">SUB TOTAL         ${totalprice}</pre>
                            <pre
                                class="form-proced__grand">GRAND TOTAL      <span class="form-proced__price">${totalprice}</span></pre>
                        </div>
                        <button class="form-proced__button">PROCEED TO CHECKOUT</button>
                    </div>
                    </div>
                </section>
            </div>
            <Subscribe />
            <Footer />
        </>
    )
    
}

export default ShoppingCart;