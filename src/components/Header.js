import { Link } from "react-router-dom";
import { useState } from "react"
import navi_1 from "../img/navi/navi_1.svg"
import navi_2 from "../img/navi/navi_2.svg"
import navi_3 from "../img/navi/navi_3.svg"
import navi_4 from "../img/navi/navi_4.svg"
import navi_5 from "../img/navi/navi_5.svg"

import "../style/header.css"

const Header = () => {
    // отображение Бургер меню
    const [burgerView, setBurgerView] = useState(false);

    const ShowBurger = (e) => {
        let burgMen = document.querySelector('.burger-menu__menu');
        setBurgerView(!burgerView);
        // в зависимости от ширины экрана
        if (window.matchMedia('(max-width: 767px)').matches) {
            if (burgerView) {
                burgMen.style.right = "0";
                burgMen.style.width = "100%"
            } else {
                burgMen.style.right = "-100%";
                burgMen.style.width = "100%";
            }
        } else {
            burgMen.style.width = "232px"
            burgerView ? burgMen.style.right="0px" : burgMen.style.right="-232px";
        }
       
    }

    return (
        
        <div class="navigate">
            <div class="navigate__left">
                <Link to="/"><img src={navi_1} alt="logo" /></Link>
                <img src={navi_2} alt="search" />
            </div>
            <div class="navigate__right">
                <div class="burger-menu">
                    <input type="checkbox" id="burger" checked />
                    <label onClick={ShowBurger} for="burger"><img src={navi_3} alt="hamburger-menu" /></label>

                    <div class="burger-menu__menu">
                        <h5 class="burger-menu__h5">MENU</h5>
                        <div class="burger-menu__items">
                            <div class="burger-menu__block">
                                <h6 class="burger-menu__h6">MAN</h6>
                                <ul class="burger-menu__list">
                                    <li>Accessories</li>
                                    <li>Bags</li>
                                    <li>Denim</li>
                                    <li>T-Shirts</li>
                                </ul>
                            </div>
                            <div class="burger-menu__block">
                                <h6 class="burger-menu__h6">WOMAN</h6>
                                <ul class="burger-menu__list">
                                    <li>Accessories</li>
                                    <li>Jackets & Coats</li>
                                    <li>Polos</li>
                                    <li>T-Shirts</li>
                                    <li>Shirts</li>
                                </ul>
                            </div>
                            <div class="burger-menu__block">
                                <h6 class="burger-menu__h6">KIDS</h6>
                                <ul class="burger-menu__list">
                                    <li>Accessories</li>
                                    <li>Jackets & Coats</li>
                                    <li>Polos</li>
                                    <li>T-Shirts</li>
                                    <li>Shirts</li>
                                    <li>Bags</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <img class="navigate__right_img" src={navi_4} alt="profile" />
                <Link to="/cart" ><img class="navigate__right_img" src={navi_5} alt="basket" /></Link>
            </div>
        </div>
    )
}

export default Header;