import React, { useEffect, useState } from 'react'
import CheckFillClr from '../../assets/img/icons/custom/check-fill-clr.png';

const TheStarlightSec = () => {
return (
    <section className="common-gapping the-starlight-sec">
        <div className="container">
            <div className="row align-items-center">
                <div className="the-starlight-left-block">
                    <h2 className="sec-title">The Starlight <br/>token: NEUM</h2>
                    <p className="text">The NEUM token is the governance token of the Starlight platform. It allows our community to have an invested interest in the future of the platform. The NEUM token will be built and hosted on the Solana blockchain. The NEUM token will be the preferred native currency on both the Starlight Marketplace and Starlight Meta-bridge.</p>
                    <p className="text">Because of these key benefits the NEUM token offers and high utility required, we expect a considerable reception and demand for the token as it develops.</p>
                </div>
                <div className="the-starlight-right-block">
                    <div className="hard-camp-block">
                        <ul className="hard-camp-left-list">
                            <li>
                                <span className="completed-status"> <span><img src={CheckFillClr} /></span> Completed</span>
                                <span className="camp-show-btn">2%: Seed</span>
                                <span className="camp-show-btn-label">2, 000, 000 SLX</span>
                            </li>
                            <li>
                                <span className="camp-show-btn">20%: Liquidity</span>
                                <span className="camp-show-btn-label">2, 000, 000 SLX</span>
                            </li>
                            <li>
                                <span className="camp-show-btn">8%: Team & Dev</span>
                                <span className="camp-show-btn-label">8, 000, 000 SLX</span>
                            </li>
                        </ul>
                        <div className="hard-cap-main-box">
                            <h6>Hard Cap:</h6>
                            <a href="#0" className="btn btn-fill">100, 000, 000 SLX</a>
                        </div>
                        <ul className="hard-camp-right-list">
                            <li>
                                <span className="camp-show-btn">40%: Public</span>
                                <span className="camp-show-btn-label">40, 000, 000 SLX</span>
                            </li>
                            <li>
                                <span className="camp-show-btn">20%: Airdrops</span>
                                <span className="camp-show-btn-label">2, 000, 000 SLX</span>
                            </li>
                            <li>
                                <span className="camp-show-btn">10%: Marketing</span>
                                <span className="camp-show-btn-label">10, 000, 000 SLX</span>
                            </li>
                        </ul>
                    </div>
                    <div className="hard-camp-claim-box">
                        <div className="hard-camp-claim-show-box">
                            <div className="hard-claim-balance-box">
                                <p>Your balance</p>
                                <h2>102<sub>SLX</sub></h2>
                            </div>
                            <div className="hard-claim-available-box">
                                <p>Available for claim</p>
                                <h2>546<sub>SLX</sub></h2>
                            </div>
                        </div>
                        <div className="hard-claim-btn-block">
                            <p>You are eligible for rewards:</p>
                            <a href="#0" className="btn btn-fill">Claim now  </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default TheStarlightSec