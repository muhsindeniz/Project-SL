import React, { useEffect, useState } from 'react'
import starlBanner from '../../assets/img/custom/starlBanner.jpg';
import mobilebanner from '../../assets/img/custom/mobile-banner.png';
import pdf from '../../assets/Starlight-Whitepaper-v1.5.pdf';
import { useLocation } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

const StarlBanner = (props) => {

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
                <p>A next-generation NFT Marketplace that enables the
utility of the world’s most sought-after digital assets.</p>
                <div className="new-header-right-btn">
                    <ul className="d-flex justify-content-center">
                        <li className="nav-item p-0 d-flex align-items-center">
                        <a href="https://drive.google.com/file/d/1-1Raiy9enIrYYhCQruUxJlgHnmWJO6za/view" target="_blank" className="nav-link p-0">
                                <button className="btn btn-primary-outline">Whitepaper</button>
                            </a>
                        </li>

                        <li className="nav-item p-0 d-flex align-items-center"  onClick={() => props.executeScroll}>
                            <Link to="Community" className="nav-link p-0">
                                <button className="btn btn-fill">Join Now</button>
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