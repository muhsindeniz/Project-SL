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
                    <h2 className="sec-title">Community-led,<br/>plug and play platform.</h2>
                    <p className="text">We are reshaping the mould of how you discover and own your Metaverse NFTs by developing a plug and play platform to work alongside the most sought-after NFT projects.</p>
                    <p className="text">The Starlight platform is designed to be a DAO. The community will own and vote on all governing decisions after launch.</p>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Cummunity