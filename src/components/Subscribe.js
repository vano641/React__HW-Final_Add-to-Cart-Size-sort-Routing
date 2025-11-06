import "../style/subscribe.css"

import subscribe_img_1 from "../img/subscribe/subscribe_img_1.svg";


const Subscribe = () => {

    return (
        <div class="subscribe center">
            <div class="subscribe__info">
                <img src={subscribe_img_1} alt="subscribe-img" />
                <p class="subscribe__info_p">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus
                    condimentum“</p>
            </div>
            <div class="subscribe__form">
                <p class="subscribe__form_h3-text">
                    <span class="subscribe__form_header">SUBSCRIBE</span>
                    <span class="subscribe__form_text">FOR OUR NEWLETTER AND PROMOTION</span>
                </p>

                <form class="subscribe__form_button" action="#">
                    <input class="subscribe__form_input" type="email" required placeholder="Enter Your Email" />
                    <button class="subscribe__form_submit" type="submit">Subscribe</button>
                </form>

            </div>
        </div>
    )
}

export default Subscribe;