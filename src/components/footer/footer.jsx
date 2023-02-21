import React from "react";
import './footer.css';

import facebook from "../../assets/img/facebook.png"
import instagram from "../../assets/img/instagram.png"
import twitter from "../../assets/img/twitter.png"
import card from "../../assets/img/card.png"
import transf from "../../assets/img/transf.png"
import bitcoin from "../../assets/img/bitcoin.png"

function Footer() {

    return (
        <footer class=" bd-footer py-4 py-md-5 mt-5 form-footer">
            <div class="form-cont-rs-mp">
                <div class="form-cont-rs">
                    <img className="form-img-icons" src={facebook} alt=""></img>
                    <img className="form-img-icons" src={instagram} alt=""></img>
                    <img className="form-img-icons" src={twitter} alt=""></img>
                </div>
                <div class="form-cont-mp">
                    <img className="form-img-icons" src={card} alt=""></img>
                    <img className="form-img-icons" src={transf} alt=""></img>
                    <img className="form-img-icons" src={bitcoin} alt=""></img>
                </div>
            </div>
            <div class="form-cont-da">
                <h3 class="form-texto">©2023 Derechos de Autor  </h3>
                <h4 class="form-texto">Escalona Daimerlis Miranda Sergio Tovar Marglodis</h4>
            </div>
        </footer>
    );
}

export default Footer;