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
                    <h2 className="sec-title">A platform that <br/> scales and adapts.</h2>
                    <p className="text">The Starlight Marketplace is our first step towards enabling the convergence of both the digital and real worlds. It provides a seamless, fast and affordable way for our community to discover, trade and collect the highest quality and most sought-after assets in the world.</p>
                    <p className="text">As the community explores how NFTs can become an integral part of our lives as mass adoption increases, Starlight’s second step is to enable further utility and interaction for NFTs at home and work.</p>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Cummunity






