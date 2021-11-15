import React, { useEffect, useState } from 'react';
import ClimeworksImg from '../../assets/img/custom/climeworks-img.png';
import ClimeworksLogo from '../../assets/img/custom/climeworks-logo.png';
import Charitymobile from '../../assets/img/custom/Charitymobile.png';

const ClimeworksSec = () => {
return (
    <section className="common-gapping climeworks-sec">
        <div className="container">
            <div className="climeworks-inner-block">
                <img src={ClimeworksImg} className="climeworks-decktop-img"/>
                <img src={Charitymobile} className="climeworks-mobile-img"/>
                <div className="climeworks-block-info">
                    <div className="climeworks-left-block">
                        <img src={ClimeworksLogo}/>
                    </div>
                    <div className="climeworks-right-block">
                        <h2 className="sec-title">The more you use, the cleaner the air.</h2>
                        <h3>0.01% of every transaction.</h3>
                        <p className="text">Creation inspires art, and therefore it is incredibly important that future generations have a safe and healthy planet to explore and create. This is why we're partnering with Climeworks.</p>
                        <p className="text">As Starlight NFT marketplace scales in prominence and usage on the world's fastest blockchain, the funding raised to give back to the planet will be significant. We are so excited about the extraordinary work Climeworks is doing.</p>
                    </div>
                </div>
            </div>
            <div className="starlight-roadmap-block">
                <h2>Starlight roadmap:</h2>
                <div className="starlight-roadmap-btn-block">
                    <p>A peak into the future. Project priority is decided  <br/> by the Starlight community. <b>Have your say:</b></p>
                    <a href="#0" className="btn btn-fill">Vote: coming soon</a>
                </div>
            </div>
        </div>
    </section>
    )
}
export default ClimeworksSec