import React, { useEffect, useState } from 'react'
import SolanaLogo from '../../assets/img/custom/solanalogo.svg';
import MetaplexLogo from '../../assets/img/custom/metaplexlogo.svg';
import communityImg from '../../assets/img/custom/community-img.png';

const Cummunity = () => {
return (
    <section className="common-gapping cummunity">
        <div className="container">
            <div className="row align-items-center">
                <div className="cummunity-left-block">
                    <img src={communityImg} />
                </div>
                <div className="cummunity-right-block">
                    <h2 className="sec-title">Starlight Marketplace <br/>and Meta-bridge.</h2>
                    <p className="text">There are two main functions of the Starlight Platform. The Marketplace is where users discover, trade and collect the world’s most sought-after digital assets powered by the Solana blockchain.</p>
                    <p className="text">The Meta-bridge allows brands and companies to partner with Starlight to enable users to interact with their digital assets in games or metaverse-enabled homes.</p>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Cummunity




