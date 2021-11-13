import React, { useEffect, useState } from 'react'
import PlatformImg from '../../assets/img/custom/PlatformImg.png';
import CollectionImgBg from '../../assets/img/custom/Collectionimgbg.svg';

const AnEngagingSec = () => {
return (
    <section className="common-gapping an-engaging-sec">
        <div className="container">
            <div className="row align-items-center">
                <div className="an-engaging-left-block">
                    <h2 className="sec-title">An engaging and rewarding experience.</h2>
                    <p className="text">When you buy and sell on the Starlight NFT marketplace using our native Starlight Token, you will have access to perks, privileges and exclusive NFT drops. </p>
                    <p className="text">Show off not only your NFT creations or collection but also your Starlight rewards tier based on how many Starlight tokens you hold.</p>
                </div>
                <div className="an-engaging-right-block">
                    <img src={PlatformImg} />
                    <span className="Collectionimgbg-img">
                        <img src={CollectionImgBg} />
                    </span>
                </div>
            </div>
        </div>
    </section>
    )
}
export default AnEngagingSec