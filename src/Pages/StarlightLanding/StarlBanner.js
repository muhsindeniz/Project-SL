import React, { useEffect, useState } from 'react'
import starlBanner from '../../assets/img/custom/starlBanner.jpg'
import mobilebanner from '../../assets/img/custom/mobile-banner.png'
import { useLocation, Link } from "react-router-dom";

const StarlBanner = () => {
return (
    <section className="starl-banner-sec">
        <div className="starl-banner-inner">
            <div className="starl-banner-img">
                <img className="desktop" src={starlBanner} />
                <img className="mobile" src={mobilebanner} />
            </div>
            <div className="starl-banner-info">
                <h1>Starlight</h1>
                <h3>ENTER THE FUTURE</h3>
                <p>Powering the metaverse on a next-gen
NFT platform built on the Solana blockchain.</p>
                <div className="new-header-right-btn">
                    <ul className="d-flex justify-content-center">
                        <li className="nav-item p-0 d-flex align-items-center">
                            <Link to="/CreateCollectible" className="nav-link p-0">
                                <button className="btn btn-primary-outline">Whitepaper</button>
                            </Link>
                        </li>

                        <li className="nav-item p-0 d-flex align-items-center">
                            <Link to="/CreateCollectible" className="nav-link p-0">
                                <button className="btn btn-fill">Buy SLX</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
}
export default StarlBanner