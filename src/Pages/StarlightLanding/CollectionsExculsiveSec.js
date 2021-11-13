import React, { useEffect, useState } from 'react'
import CollectionsExculsiveImage from '../../assets/img/custom/CollectionsExculsiveImage.png';

const CollectionsExculsiveSec = () => {
return (
    <section className="common-gapping collections-exculsive-sec">
        <div className="container">
            <div className="row">
                <div className="collections-exculsive-left-block">
                    <h2 className="sec-title">Collections exculsive only <br />to the Starlight marketplace.</h2>
                    <p className="text">We partner with artists, musicians, game designers and photographers to provide Starlight tier holders with the most exculsive NFT collections on the blockchain.</p>
                    <p className="text">Buy and sell your NFTs directly on the platform as the demand increases for the rarest items.</p>
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
    )
}
export default CollectionsExculsiveSec