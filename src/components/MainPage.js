import "../style/mainpage.css"
import Header from "./Header"
import Feature from "./Feature"
import Subscribe from "./Subscribe"
import Footer from "./Footer"

import top_photo from "../img/top/top_photo.svg"
import pic_1 from "../img/picture/pic_1.svg"
import pic_2 from "../img/picture/pic_2.svg"
import pic_3 from "../img/picture/pic_3.svg"
import pic_4_big from "../img/picture/pic_4_big.svg"
import GetItemsData from "./GetItemsData"

const MainPage = () => {


    return (
        <>
            <div className="toptop">
                <Header />
                <div className="top">
                    <div className="top__content">
                        <img className="top__photo" src={top_photo} alt="phot" />
                        <div className="top__info">
                            <p className="top__heading">
                                <span className="top__heading_big">THE BRAND</span>
                                <span className="top__heading_p">OF LUXERIOUS
                                    <span className="top__heading_color">FASHION</span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="catalog">
                    <div className="catalog__block">
                        <img src={pic_1} alt="picture_1" className="catalog__pictures" />
                        <div className="catalog__text">
                            <span className="catalog__offer">30% OFF</span>
                            <span className="catalog__category">FOR WOMEN</span>
                        </div>
                    </div>
                    <div className="catalog__block">
                        <img src={pic_2} alt="picture_2" className="catalog__pictures" />
                        <div className="catalog__text">
                            <span className="catalog__offer">HOT DEAL</span>
                            <span className="catalog__category">FOR MEN</span>
                        </div>
                    </div>
                    <div className="catalog__block">
                        <img src={pic_3} alt="picture_3" className="catalog__pictures" />
                        <div className="catalog__text">
                            <span className="catalog__offer">NEW ARRIVALS</span>
                            <span className="catalog__category">FOR KIDS</span>
                        </div>
                    </div>
                    <div className="catalog__block-big">
                        <img src={pic_4_big} alt="picture_4" className="catalog__pictures-big" />
                        <div className="catalog__text">
                            <span className="catalog__offer">LUXIROUS & TRENDY</span>
                            <span className="catalog__category">ACCESORIES</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="items-heading">
                <h3 className="items-heading__h3">Fetured Items</h3>
                <p className="items-heading__text">Shop for items based on what we featured in this week</p>
            </div>
            <GetItemsData />
            <Feature />
            <Subscribe />
            <Footer /> 
        </>  
    )
}

export default MainPage;