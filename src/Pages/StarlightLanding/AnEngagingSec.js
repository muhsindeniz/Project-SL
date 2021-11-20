import React, { useEffect, useState } from 'react'
import PlatformImg from '../../assets/img/custom/PlatformImg.png';
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
                    <h2 className="sec-title">Always engaging,<br/>always rewarding.</h2>
                    <p className="text">When you buy and sell on the Starlight NFT marketplace using our native Starlight Token, you will have access to perks, privileges and exclusive NFT collection drops.</p>
                    <p className="text">Show off not only your NFT creations or collection but also your Starlight rewards tier based on how many Starlight tokens you hold.</p>
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
                <div className="new-an-engaging-right-block">
                    <h2 className="sec-title">Collections exculsive only<br/> on the Starlight gateway.</h2>
                </div>
            </div>
        </div>
    </section>

    <section className="common-gapping collections-exculsive-sec">
        <div className="container">
            <div className="row">
                <div className="collections-exculsive-left-block">
                    <p className="text">We partner with metaverse creators, game designers, artists, musicians, and photographers worldwide to offer Starlight token holders the most exclusive and sought-after NFT collections.</p>
                    <p className="text">When you trade on the Starlight marketplace, you can be sure that you're part of the community that is leading the NFT space in the expression of creativity on the world's fastest blockchain.</p>
                    <div className="next-collection-block">
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
                    </div>
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