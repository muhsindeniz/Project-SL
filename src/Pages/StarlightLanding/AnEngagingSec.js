import React, { useEffect, useState } from 'react'
import PlatformImg from '../../assets/img/custom/PlatformImg.svg';
import CollectionImgBg from '../../assets/img/custom/Collectionimgbg.svg';
import engaging from '../../assets/img/custom/always-engaging.png';
import mobileengaging from '../../assets/img/custom/mobile-always-engaging.png';
import CollectionsExculsiveImage from '../../assets/img/custom/CollectionsExculsiveImage.png';

const AnEngagingSec = () => {
return (
    <>
    <section className="common-gapping an-engaging-sec">
        <div className="container">
            <div className="row align-items-start">
                <div className="an-engaging-left-block">
                    <h2 className="sec-title">Next-generation <br/> NFT Marketplace.</h2>
                    <p className="text">When you buy and sell on the Starlight Marketplace using our native Starlight Token, you will have access to perks, privileges and exclusive NFT collection drops. </p>
                    <p className="text">The Starlight Marketplace is equipped with five unique tools. Each tool serves a specific function that benefits artists, creators and collectors. These tools are: Gallery, Trade, Factory, Launchpad and Rewards.</p>
                </div>
                <div className="an-engaging-right-block">
                    <img className="desktop" src={engaging} />
                    <img className="mobile" src={mobileengaging} />
                </div>
            </div>

            <div className="row align-items-center new-an-engaging-section">
                <div className="new-an-engaging-left-block">
                    <img src={PlatformImg} />
                </div>
            </div>
        </div>
    </section>
    
    <section className="common-gapping collections-exculsive-sec">
        <div className="container">
            <div className="row">
                <div className="collections-exculsive-left-block">
                <h2 className="sec-title">An eye on the future with <b /> Starlight Meta-bridge</h2>
                    <p className="text">The Starlight Meta-bridge is our second bold step to take NFT ownership to a whole new level by bridging the digital world and reality gap. This metaverse enabling technology will power our interaction with our digital assets. This could be as simple as displaying NFT collections in homes from your Starlight Marketplace profile to augmented reality interaction via AR hardware and 3D games.</p>
                    {/* <div className="next-collection-block">
                        <h4>Next collection drop in:</h4>
                        <ul className="next-collection-count-list">
                            <li>
                                4
                                <span>Days</span>
                            </li>
                            <li>
                                5
                                <span>Hours</span>
                            </li>
                            <li>
                                43
                                <span>Minutes</span>
                            </li>
                            <li>
                                25
                                <span>Seconds</span>
                            </li>
                        </ul>
                    </div> */}
                </div>
                <div className="collections-exculsive-right-block">
                    <img src={CollectionsExculsiveImage} />
                </div>
            </div>
        </div>
    </section>
    </>
    )
}
export default AnEngagingSec