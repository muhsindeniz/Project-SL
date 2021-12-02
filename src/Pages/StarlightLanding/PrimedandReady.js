import React, { useEffect, useState } from 'react'
import SolanaLogo from '../../assets/img/custom/solanalogo.svg';
import MetaplexLogo from '../../assets/img/custom/metaplexlogo.svg';
import PrimedImg from '../../assets/img/custom/primedimg.png';

const PrimedandReady = () => {
return (
    <section className="common-gapping primed-and-ready-sec">
        <div className="container">
            <div className="row align-items-center">
                <div className="primed-left-block">
                    <h2 className="sec-title">Primed and Ready,<br/>The Future is here.</h2>
                    <p className="text">Built on the ultra-fast and efficient Solana blockchain and utilising the open-sourced Metaplex infrastructure, the way you discover, own and interact with digital assets are about to change forever.</p>
                    <p className="text">Starlight is positioned to be the preferred community owned and led platform for discovery, trading and interaction of NFTs, built to work with the Metaverse.</p>
                    <div className="primed-logo-block">
                        <span><img src={SolanaLogo} /></span>
                        <span><img src={MetaplexLogo} /></span>
                    </div>
                </div>
                <div className="primed-right-block">
                    <img src={PrimedImg} />
                </div>
            </div>
        </div>
    </section>
    )
}
export default PrimedandReady




