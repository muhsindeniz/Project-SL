import React, { useEffect, useState } from 'react'
import CheckFillClr from '../../assets/img/icons/custom/check-fill-clr.png';

const TheStarlightSec = () => {
return (
    <section className="common-gapping the-starlight-sec">
        <div className="container">
            <div className="row align-items-center">
                <div className="the-starlight-left-block">
                    <h2 className="sec-title">The Starlight DAO Governance Token</h2>
                    <p className="text">The Starlight (SLX) token empowers the community by distributing voting rights over project delivery and road mapping.</p>
                    <p className="text">It also rewards the Starlight community in various ways: airdrops proportional to user activity, access to exclusive NFT collections, NFT lotteries, low platform fees and access to collaboration tokens.</p>
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
                            <a href="#0" className="btn btn-primary">100, 000, 000 SLX</a>
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
                            <a href="#0" className="btn btn-primary">Claim now  </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default TheStarlightSec