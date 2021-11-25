import React, { useEffect, useState } from 'react'
import SolanaLogo from '../../assets/img/custom/solanalogo.svg';
import MetaplexLogo from '../../assets/img/custom/metaplexlogo.svg';
import PrimedImg from '../../assets/img/custom/primedimg.png';

const TimeWarpingSec = () => {
return (
    <section className="common-gapping time-warping-sec">
        <div className="container">
            <div className="row align-items-center">
                <div className="time-warping-left-block">
                    <ul className="time-warping-speed-list">
                        <li className="minting-list-item">
                            <h3>Minting</h3>
                            <h4>
                                <span>$2.45</span>
                                <span>0.01 SOL</span>
                            </h4>
                            <p><span>0.034ETH / $136.25</span>ON RARIBLE</p>
                        </li>
                        <li className="auction-list-item">
                            <h3>Auction</h3>
                            <h4>
                                <span>$7.36</span>
                                <span>0.03 SOL</span>
                            </h4>
                            <p><span>0.034ETH / $136.25</span>ON RARIBLE</p>
                        </li>
                        <li className="total-list-item">
                            <h3>Total</h3>
                            <h4>
                                <span>$9.81</span>
                                <span>0.04 SOL</span>
                            </h4>
                            <p><span>0.034ETH / $136.25</span>ON RARIBLE</p>
                        </li>
                    </ul>
                    <p className="update-time">Price example from 11 November 2021</p>
                </div>
                <div className="time-warping-right-sec">
                    <h2 className="sec-title">Time-warping speeds, <br/>low transaction fees.</h2>
                    <p className="text">Discovering, buying and selling NFTs should be frictionless, effortless and fast. Starlight is built to bring you the best NFT marketplace experience on the Solana blockchain with time-warping transaction speeds of 400 millisecond per block and jaw-dropping low fees.</p>
                </div>
            </div>
        </div>
    </section>
    )
}
export default TimeWarpingSec