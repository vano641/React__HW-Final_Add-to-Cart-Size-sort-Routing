import "../style/feature.css"
import f_item_1 from "../img/feature_items/f_item_1.svg";
import f_item_2 from "../img/feature_items/f_item_2.svg";
import f_item_3 from "../img/feature_items/f_item_3.svg";

const Feature = () => {


    return (
        <div class="feature center">
            <article class="feature__items">
                <img src={f_item_1} alt="feature_item_1" />
                <h5 class="feature__h5">Free Delivery</h5>
                <p class="feature__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
                    extensive models.</p>
            </article>
            <article class="feature__items">
                <img src={f_item_2} alt="feature_item_2" />
                <h5 class="feature__h5 feature__h5-center">Sales & discounts</h5>
                <p class="feature__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
                    extensive models.</p>
            </article>
            <article class="feature__items">
                <img src={f_item_3} alt="feature_item_3" />
                <h5 class="feature__h5 feature__h5-right">Quality assurance</h5>
                <p class="feature__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
                    extensive models.</p>
            </article>
        </div>
    )
}

export default Feature;