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
                        <h2 className="sec-title">The more you use,<br/>the cleaner the air.</h2>
                        <h3>1% from transaction fees profits</h3>
                        <p className="text">Creation inspires art, and therefore it is incredibly important that future generations have a safe and healthy planet to explore and create. This is why we're partnering with Climeworks.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default ClimeworksSec